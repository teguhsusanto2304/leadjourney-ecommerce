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
        Schema::create('order_items', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('order_id')->constrained()->onDelete('cascade');
            
            // We store the product_id for reference, but...
            $table->foreignUuid('product_id')->nullable()->nullOnDelete();
            
            // ...we also store the "snapshot" details
            $table->string('product_name'); 
            $table->string('product_sku')->nullable();
            $table->decimal('price', 10, 2); // Price at the time of order
            $table->integer('quantity');
            $table->decimal('total', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
