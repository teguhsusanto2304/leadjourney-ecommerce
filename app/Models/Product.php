<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'name',
        'category',
        'description',
        'price',
        'stock_quantity',
        'rating',
        'image',
    ];

    // Ensure the ID is treated as a string for UUIDs
    protected $keyType = 'string';
    public $incrementing = false;

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}