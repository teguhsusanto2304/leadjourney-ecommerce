<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Order extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'user_id',
        'email',
        'marketing_accepted',
        'country',
        'first_name',
        'last_name',
        'address',
        'apartment',
        'city',
        'state',
        'postal_code',
        'phone',
        'shipping_method',
        'shipping_cost',
        'subtotal',
        'tax',
        'total',
        'status',
    ];

    /**
     * Get the user that owns the order.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the items (products) for this order.
     * (Assumes you have an OrderItem model)
     */
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
