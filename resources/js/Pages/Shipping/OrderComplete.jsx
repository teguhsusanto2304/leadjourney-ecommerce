import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
    CheckCircle2, 
    Package, 
    Truck, 
    ArrowRight, 
    Download,
    ShoppingBag,
    Mail
} from 'lucide-react';

export default function OrderComplete({ auth, order }) {
    // Generate a mock order number if one isn't passed from props
    const orderNumber = order?.number || "ORD-7729401";

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Order Confirmed</h2>}
        >
            <Head title="Order Complete" />

            <div className="py-12 bg-[#f9fafb] dark:bg-[#0a120e] min-h-[calc(100vh-64px)] flex items-center justify-center transition-colors duration-300 antialiased selection:bg-[#13ec80] selection:text-black">
                <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    
                    <div className="text-center space-y-8">
                        {/* Success Icon Animation */}
                        <div className="relative inline-block">
                            <div className="absolute inset-0 rounded-full bg-[#13ec80] blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-white dark:bg-[#111814] border-4 border-[#13ec80] rounded-full p-6 text-[#13ec80]">
                                <CheckCircle2 size={64} strokeWidth={2.5} />
                            </div>
                        </div>

                        {/* Success Message */}
                        <div className="space-y-3">
                            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                                THANK YOU!
                            </h1>
                            <p className="text-xl text-slate-500 dark:text-[#9db9ab]">
                                Your payment has been processed successfully.
                            </p>
                        </div>

                        {/* Order Details Card */}
                        <div className="bg-white dark:bg-[#111814] border border-slate-200 dark:border-[#1e2e25] rounded-3xl p-8 shadow-xl max-w-md mx-auto">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center pb-6 border-b border-slate-100 dark:border-[#1e2e25]">
                                    <div className="text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-[#51645a]">Order Number</p>
                                        <p className="text-lg font-mono font-bold text-slate-900 dark:text-white">{orderNumber}</p>
                                    </div>
                                    <Package className="text-[#13ec80]" size={28} />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#0a120e] text-slate-400">
                                            <Mail size={18} />
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-[#9db9ab]">
                                            A confirmation email was sent to <span className="font-bold text-slate-900 dark:text-white">{auth.user.email}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#0a120e] text-slate-400">
                                            <Truck size={18} />
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-[#9db9ab]">
                                            Estimated delivery: <span className="font-bold text-slate-900 dark:text-white">Jan 12 - Jan 15</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link 
                                href={route('dashboard')}
                                className="w-full sm:w-auto bg-[#13ec80] hover:bg-[#0fd672] text-[#102219] font-black px-8 py-4 rounded-2xl shadow-lg shadow-[#13ec80]/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                <ShoppingBag size={20} />
                                <span>CONTINUE SHOPPING</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="w-full sm:w-auto bg-slate-100 dark:bg-[#1e2e25] hover:bg-slate-200 dark:hover:bg-[#283930] text-slate-900 dark:text-white font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                                <Download size={20} />
                                <span>INVOICE</span>
                            </button>
                        </div>

                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-8">
                            Need help? <Link href="#" className="text-[#13ec80] hover:underline">Contact Support</Link>
                        </p>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}