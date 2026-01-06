import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProductCard from '@/Components/ProductCard';
import { Head } from '@inertiajs/react';
import { Bolt, Filter, ChevronDown } from 'lucide-react';

export default function Index({ auth, products }) {
    return (
        <AuthenticatedLayout>
            <Head title="Product Catalog" />

            <div className="flex flex-col p-6 lg:p-10 max-w-[1400px] mx-auto w-full gap-8">
                
                {/* Hero Banner - Matching your HTML reference */}
                <div className="relative w-full rounded-2xl overflow-hidden min-h-[240px] shadow-2xl">
                    <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ 
                            backgroundImage: `linear-gradient(90deg, rgba(16,34,25,0.9) 0%, rgba(16,34,25,0.4) 100%), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')` 
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13ec80]/20 border border-[#13ec80]/30 w-fit mb-4 backdrop-blur-sm">
                            <Bolt size={14} className="text-[#13ec80]" />
                            <span className="text-[#13ec80] text-xs font-bold uppercase tracking-wider">New Arrivals</span>
                        </div>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                            Premium Tools & <br/>
                            <span className="text-[#13ec80]">High-Intent Leads</span>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg font-medium mb-8 max-w-lg">
                            Supercharge your funnel with verified B2B contacts and advanced tracking plugins.
                        </p>
                    </div>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-[72px] z-20 py-2 bg-[#f6f8f7] dark:bg-[#102219]/95 backdrop-blur-sm">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        <FilterButton label="Category: All" active />
                        <FilterButton label="Price Range" />
                        <FilterButton label="Type" />
                    </div>
                    <div className="flex items-center gap-3 min-w-fit text-sm">
                        <p className="text-[#9db9ab] hidden md:block">Sort by:</p>
                        <button className="flex items-center gap-2 text-white font-bold hover:text-[#13ec80] transition-colors">
                            Popularity <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Load More Section */}
                <div className="flex justify-center mt-auto pb-10">
                    <button className="bg-[#283930] hover:bg-[#1e362a] text-white px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 border border-[#13ec80]/20 hover:border-[#13ec80]/50">
                        Load More Products
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// Helper component for the filter buttons
function FilterButton({ label, active = false }) {
    return (
        <button className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap shadow-sm border ${
            active 
            ? 'bg-[#162a20] border-[#13ec80]/40 text-white font-semibold' 
            : 'bg-[#162a20] border-[#283930] text-[#9db9ab] font-medium hover:border-gray-500 hover:text-white'
        }`}>
            {label} <ChevronDown size={14} />
        </button>
    );
}