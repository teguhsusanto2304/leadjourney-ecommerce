<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            // Foreign key for the User (assuming users table uses UUIDs)
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            // Foreign key for the Product
            $table->foreignUuid('product_id')->constrained()->onDelete('cascade');
            $table->integer('quantity')->default(1);
            $table->string('status')->default('cart');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};