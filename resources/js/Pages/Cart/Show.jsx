import { React,useEffect} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link,usePage } from '@inertiajs/react';
import CartItem from './Partials/CartItem';
import CheckoutSummary from './Partials/CheckoutSummary';
import { ArrowLeft } from 'lucide-react'; // ✅ lucide-react icon
import toast from 'react-hot-toast';

export default function Show({ auth, cart, totals }) {
    const { errors } = usePage().props;
    
        useEffect(() => {
        if (errors.quantity) {
            toast.error(errors.quantity);
        }
        }, [errors]);
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Shopping Cart" />

      <div className="min-h-screen bg-white-900 text-black p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em] mb-1">
                Store
              </h1>
              <h2 className="text-3xl font-black tracking-tight">Your Cart</h2>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 text-[#13ec80] hover:text-[#10d473] transition-all font-bold group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Continue Shopping
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Cart Section */}
            <div className="lg:col-span-8 space-y-4">
              {/* Table Header */}
              <div className="hidden sm:grid grid-cols-12 px-6 mb-2 text-gray-400 text-[10px] font-black uppercase tracking-[0.15em]">
                <div className="col-span-6">Item Details</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Subtotal</div>
              </div>

              {cart.length > 0 ? (
                cart.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-20 text-center">
                  <p className="text-gray-400 mb-4">Your cart is currently empty.</p>
                  <Link href="/products" className="text-[#13ec80] font-bold underline">
                    Browse Products
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT: Checkout Section */}
            <div className="lg:col-span-4 sticky top-8">
              <CheckoutSummary cart={cart} totals={totals} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}