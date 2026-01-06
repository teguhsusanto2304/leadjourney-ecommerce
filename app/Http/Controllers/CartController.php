<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\DB;
use App\Notifications\OrderCompletedNotification;

class CartController extends Controller
{
    public function complete(Request $request)
    {
        Order::where(['user_id' => auth()->id(),'status' => 'pending'])
                    ->update(['status' => 'completed']);

        auth()->user()->notify(new OrderCompletedNotification());
        
        return Inertia::render('Shipping/OrderComplete', [
            'message' => 'Thank you for your purchase! Your order has been completed successfully.',
        ]);
    }

    public function checkout(Request $request)
    {
        $userId   = Auth::id();
        $cart     = Cache::get("cart_{$userId}", []);

        foreach ($cart as $item) {
            $product = Product::findOrFail($item['product']['id']);

            if ($item['quantity'] > $product->stock_quantity) {
                return back()->withErrors([
                    'quantity' => "{$product->name} only has {$product->stock} left in stock.",
                ]);
            }

            // Deduct stock
            $product->decrement('stock_quantity', $item['quantity']);

            // Save to carts/orders table
            Cart::create([
                'user_id'    => $userId,
                'product_id' => $product->id,
                'quantity'   => $item['quantity'],
                'price'      => $product->price,
            ]);
        }

        Cache::forget("cart_{$userId}");

        $cartItems = Cart::with('product')
            ->where('user_id', auth()->id())
            ->get();

        // 2. Calculate totals
        $subtotal = $cartItems->sum(function($item) {
            return $item->product->price * $item->quantity;
        });
        
        $shipping = 0.00; // You can calculate shipping logic here
        $total = $subtotal + $shipping;

        // 3. Render the shipping page with the data
        return Inertia::render('Shipping/Show', [
            'cart' => $cartItems,
            'totals' => [
                'subtotal' => number_format($subtotal, 2),
                'shipping' => number_format($shipping, 2),
                'total' => number_format($total, 2),
            ]
        ]);
    }

    public function order()
    {
        // 1. Get current cart items (assuming auth or session)
        $cartItems = Cart::with('product')
            ->where('user_id', auth()->id())
            ->get();

        // 2. Calculate totals
        $subtotal = $cartItems->sum(function($item) {
            return $item->product->price * $item->quantity;
        });
        
        $shipping = 0.00; // You can calculate shipping logic here
        $total = $subtotal + $shipping;

        // 3. Render the shipping page with the data
        return Inertia::render('Checkout/Shipping', [
            'cart' => $cartItems,
            'totals' => [
                'subtotal' => number_format($subtotal, 2),
                'shipping' => number_format($shipping, 2),
                'total' => number_format($total, 2),
            ]
        ]);
    }

    public function store_shipping(Request $request)
    {
            // 1. Validate the incoming React data
            $validated = $request->validate([
                'email' => 'required|email',
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'address' => 'required|string',
                'city' => 'required|string',
                'state' => 'required|string',
                'zip' => 'required|string',
                'shipping_method' => 'required',
            ]);

            // 2. Get current cart items to calculate totals
            $cartItems = Cart::with('product')->where(['user_id' => auth()->id(), 'status' => 'cart'])->get();
            $subtotal = $cartItems->sum(fn($item) => $item->product->price * $item->quantity);
            $total = $subtotal; // Add tax/shipping logic here if needed

            // 3. Store in Database using a Transaction
            DB::transaction(function () use ($validated, $cartItems, $subtotal, $total) {
                
                // Create the main Order
                $order = Order::create([
                    'user_id' => auth()->id(),
                    'email' => $validated['email'],
                    'first_name' => $validated['first_name'],
                    'last_name' => $validated['last_name'],
                    'address' => $validated['address'],
                    'city' => $validated['city'],
                    'state' => $validated['state'],
                    'postal_code' => $validated['zip'],
                    'subtotal' => $subtotal,
                    'total' => $total,
                    'status' => 'pending',
                    'shipping_method' => $validated['shipping_method'],
                ]);

                // Create each OrderItem snapshot
                foreach ($cartItems as $item) {
                    OrderItem::create([
                        'order_id' => $order->id,
                        'product_id' => $item->product_id,
                        'product_name' => $item->product->name,
                        'price' => $item->product->price,
                        'quantity' => $item->quantity,
                        'total' => $item->product->price * $item->quantity,
                    ]);
                }

                // 4. Clear the Cart after successful order creation
                Cart::where('user_id', auth()->id())
                    ->update(['status' => 'order']);
            });

            $cartItems = Cart::where(['user_id' => auth()->id(), 'status' => 'order'])->get();

            // Calculate subtotal
            $subtotal = $cartItems->sum(fn($item) => $item->price * $item->quantity);


            // Redirect to the next step (Payment)
            return Inertia::render('Shipping/Payment', [
            'cart' => $cartItems->toArray(),
            'totals' => [
                'subtotal' => number_format($subtotal, 2),
                'tax'      => number_format($subtotal * 0.1, 2),
                'total'    => number_format($subtotal * 1.1, 2),
            ],
        ]);
        }
    

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $userId   = Auth::id();
        $cacheKey = "cart_{$userId}";
        $cart     = Cache::get($cacheKey, []);

        $productId = $request->product_id;

        if (isset($cart[$productId])) {
            // increment quantity
            $cart[$productId]['quantity']++;
        } else {
            $product = Product::findOrFail($productId);

            // ✅ Nest product data so frontend can use item.product.image
            $cart[$productId] = [
                'id' => $product->id,
                'quantity'   => 1,
                'price'    => $product->price,
                'product'    => [
                    'id'       => $product->id,
                    'name'     => $product->name,
                    'sku'      => $product->sku,
                    'price'    => $product->price,
                    'category' => $product->category,
                    'image'    => $product->image, // ✅ now accessible as item.product.image
                ],
            ];
        }

        Cache::put($cacheKey, $cart, now()->addHours(2));

        return redirect()->back()->with('success', 'Product added to cart!');
    }

    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::all() // Or Product::latest()->get()
        ]);
    }

    public function show()
    {
        $userId = Auth::id();
        $cartItems = Cache::get("cart_{$userId}", []);

        $subtotal = collect($cartItems)->sum(fn($item) => $item['price'] * $item['quantity']);

        return Inertia::render('Cart/Show', [
            'cart' => array_values($cartItems),
            'totals' => [
                'subtotal' => number_format($subtotal, 2),
                'tax'      => number_format($subtotal * 0.1, 2),
                'total'    => number_format($subtotal * 1.1, 2),
            ],
        ]);
    }

    public function showdb()
    {
        $cartItems = Cart::with('product')->where('user_id', auth()->id())->get();
        
        $subtotal = $cartItems->sum(function($item) {
            // FIX: Use -> instead of .
            return $item->product->price * $item->quantity;
        });

        return Inertia::render('Cart/Show', [
            'cart' => $cartItems,
            'totals' => [
                'subtotal' => number_format($subtotal, 2),
                'tax' => number_format($subtotal * 0.1, 2),
                'total' => number_format($subtotal * 1.1, 2),
            ]
        ]);
    }

    public function storedb(Request $request)
    {
        // 1. Validate the request
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $userId = Auth::id();
        $productId = $request->product_id;

        // 2. Find existing cart item for this user and product
        $cartItem = Cart::where('user_id', $userId)
                        ->where('product_id', $productId)
                        ->first();

        if ($cartItem) {
            // 3. If exists, increment quantity
            $cartItem->increment('quantity');
        } else {
            // 4. If new, create entry
            Cart::create([
                'user_id' => $userId,
                'product_id' => $productId,
                'quantity' => 1,
            ]);
        }

        // 5. Redirect back with a success flash message
        return redirect()->back()->with('success', 'Product added to cart!');
    }

    /**
     * Update quantity from the Cart Page.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $userId   = Auth::id();
        $cacheKey = "cart_{$userId}";
        $cart     = Cache::get($cacheKey, []);

        if (isset($cart[$id])) {
            // Get product ID from cached cart item
            $productId = $cart[$id]['product']['id'] ?? $cart[$id]['product_id'];

            // Find product in DB
            $product = \App\Models\Product::findOrFail($productId);

            // ✅ Validate against stock
            if ($request->quantity > $product->stock_quantity) {
                return redirect()->back()->withErrors([
                    'quantity' => "Only {$product->stock_quantity} items available in stock.",
                ]);
            }

            // Update cart quantity
            $cart[$id]['quantity'] = $request->quantity;
            Cache::put($cacheKey, $cart, now()->addHours(2));
        }

        return redirect()->back()->with('success', 'Cart updated!');
    }

    /**
     * Remove item from cart.
     */
    public function destroy($id)
    {
        $userId   = Auth::id();
        $cacheKey = "cart_{$userId}";
        $cart     = Cache::get($cacheKey, []);
        
        

        $productId = $id;

        if (isset($cart[$productId])) {
            unset($cart[$productId]); // ✅ remove item from array
            Cache::put($cacheKey, $cart, now()->addHours(2));
        }

        return redirect()->back()->with('success', 'Item removed from cart!');
    }

}
