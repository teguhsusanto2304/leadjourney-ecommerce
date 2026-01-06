<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CartController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'seo' => [
                'title' => 'LeadJourney.io - Performance Marketing Tracking Software',
                'description' => 'Track all ad platforms in one dashboard...',
                'ogImage' => 'https://leadjourney.io/wp-content/uploads/2024/09/img-37-1.png'
            ]
    ]);
});
Route::get('/x', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
    // Make sure ->name('cart.index') is present!
    Route::post('/checkout', [CartController::class, 'checkout'])->name('cart.checkout');
    Route::get('/products', [CartController::class, 'index'])->name('products.index');
    Route::get('/cart', [CartController::class, 'show'])->name('cart.index');
    Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
    Route::patch('/cart/{id}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/cart/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
    Route::post('/order/shipping',[CartController::class,'store_shipping'])->name('order.shipping');    
    Route::post('/order/complete',[CartController::class,'complete'])->name('order.complete');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
