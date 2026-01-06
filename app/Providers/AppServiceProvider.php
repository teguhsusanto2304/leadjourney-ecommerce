<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Inertia::share([
            'auth' => fn () => [
                'user' => Auth::user(),
            ],
            'cartCount' => function () {
                if (!Auth::check()) {
                    return 0;
                }

                $userId = Auth::id();
                $cacheKey = "cart_{$userId}";

                // Get cart from cache (default empty array)
                $cart = Cache::get($cacheKey, []);

                // Count total items (sum of quantities)
                return collect($cart)->sum('quantity');
            },
        ]);



    }
}
