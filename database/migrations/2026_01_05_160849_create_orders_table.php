<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            // Contact Information
            $table->string('email');
            $table->boolean('marketing_accepted')->default(false);

            // Shipping Address
            $table->string('country')->default('United States');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('address');
            $table->string('apartment')->nullable();
            $table->string('city');
            $table->string('state');
            $table->string('postal_code');
            $table->string('phone')->nullable();

            // Shipping Method
            $table->string('shipping_method')->default('standard'); // e.g., 'standard', 'express'
            $table->decimal('shipping_cost', 10, 2)->default(0.00);

            // Order Totals & Status
            $table->decimal('subtotal', 10, 2);
            $table->decimal('tax', 10, 2)->default(0.00);
            $table->decimal('total', 10, 2);
            $table->string('status')->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
