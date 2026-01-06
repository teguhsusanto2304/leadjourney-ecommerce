import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProductCard from '@/Components/ProductCard';
import { Head } from '@inertiajs/react';

export default function Catalog({ auth, products }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Product Catalog" />
            
            <div className="bg-[#102219] min-h-screen font-display">
                <div className="p-6 lg:p-10 max-w-[1400px] mx-auto w-full">
                    {/* Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}