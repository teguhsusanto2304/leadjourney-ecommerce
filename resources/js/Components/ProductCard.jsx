import React from 'react';
import { useForm } from '@inertiajs/react';
import { Star, ShoppingCart, Loader2 } from 'lucide-react';

export default function ProductCard({ product }) {
    // Return null if product is missing to prevent 'undefined' errors
    if (!product) return null;

    const { post, processing } = useForm({
        product_id: product.id,
    });

    const handleAddToCart = (e) => {
        e.preventDefault();
        
        // Final safety check before posting
        if (!product.id) {
            console.error("Product ID is missing");
            return;
        }

        post(route('cart.store'), {
            preserveScroll: true,
            // We pass the data explicitly to ensure it's not undefined
            data: { product_id: product.id }
        });
    };

    return (
        <div className="group bg-[#162a20] rounded-xl p-4 border border-[#283930] hover:border-[#13ec80]/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-black">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.category && (
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                        {product.category}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-bold leading-tight group-hover:text-[#13ec80] transition-colors">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                        {/* Lucide Star Icon */}
                        <Star 
                            size={14} 
                            className={product.rating > 0 ? "fill-yellow-400" : "text-gray-600"} 
                        />
                        <span className="text-xs font-bold text-gray-300">
                            {product.rating > 0 ? product.rating : '--'}
                        </span>
                    </div>
                </div>

                <p className="text-[#9db9ab] text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* Footer Section */}
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                        <span className="text-[10px] text-[#9db9ab] uppercase font-semibold tracking-tight">
                            Stock: {product.stock_quantity}
                        </span>
                    </div>
                    
                    <button 
                        onClick={handleAddToCart}
                        disabled={processing || product.stock_quantity <= 0}
                        className={`size-10 flex items-center justify-center rounded-lg transition-all duration-200 
                            ${product.stock_quantity <= 0 
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                : 'bg-[#283930] text-[#13ec80] hover:bg-[#13ec80] hover:text-[#102219] active:scale-95 shadow-lg shadow-black/20'
                            }`}
                        title="Add to Cart"
                    >
                        {processing ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <ShoppingCart size={20} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}