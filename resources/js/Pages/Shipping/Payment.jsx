import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
    CreditCard, 
    Wallet, 
    Smartphone, 
    Lock, 
    ArrowRight, 
    ArrowLeft,
    ShieldCheck
} from 'lucide-react';

export default function Payment({ auth }) {
    // Initialize form with Inertia's useForm hook
    const { data, setData, post, processing, errors } = useForm({
        payment_method: 'card',
        card_number: '',
        card_name: '',
        expiry: '',
        cvv: '',
        same_as_shipping: true,
    });

    const submit = (e) => {
        e.preventDefault();
        // Redirects to the 'order.complete' named route on your backend
        post(route('order.complete'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Checkout</h2>}
        >
            <Head title="Payment Details" />

            {/* Changed min-h-screen to avoid double scrollbars inside AuthenticatedLayout */}
            <div className="py-12 bg-[#f9fafb] dark:bg-[#0a120e] transition-colors duration-300 antialiased selection:bg-[#13ec80] selection:text-black">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Stepper Navigation */}
                    <nav className="flex items-center gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
                        <Link href={route('cart.index')} className="flex items-center gap-2 text-slate-400 dark:text-[#51645a] hover:text-[#13ec80] transition-all">
                            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">1</div>
                            <span className="text-sm font-bold uppercase tracking-widest">Cart</span>
                        </Link>
                        <div className="w-8 h-px bg-slate-200 dark:bg-[#1e2e25]"></div>
                        <Link href={route('products.index')} className="flex items-center gap-2 text-slate-400 dark:text-[#51645a] hover:text-[#13ec80] transition-all">
                            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">2</div>
                            <span className="text-sm font-bold uppercase tracking-widest">Shipping</span>
                        </Link>
                        <div className="w-8 h-px bg-slate-200 dark:bg-[#1e2e25]"></div>
                        <div className="flex items-center gap-2 text-[#13ec80]">
                            <div className="w-6 h-6 rounded-full bg-[#13ec80] text-black flex items-center justify-center text-[10px] font-bold">3</div>
                            <span className="text-sm font-bold uppercase tracking-widest">Payment</span>
                        </div>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: Form */}
                        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
                            <div>
                                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Payment Details</h1>
                                <p className="text-slate-500 dark:text-[#9db9ab] text-lg">Securely enter your payment information to finalize your order.</p>
                            </div>

                            <form id="payment-form" onSubmit={submit} className="space-y-6">
                                {/* Method Selector */}
                                <div className="bg-white dark:bg-[#111814] border border-slate-200 dark:border-[#1e2e25] rounded-2xl p-8 shadow-sm">
                                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 dark:text-[#51645a] mb-6">Select Method</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {[
                                            { id: 'card', label: 'Credit Card', icon: CreditCard },
                                            { id: 'paypal', label: 'PayPal', icon: Wallet },
                                            { id: 'apple', label: 'Apple Pay', icon: Smartphone },
                                        ].map((method) => (
                                            <label key={method.id} className="relative cursor-pointer group">
                                                <input 
                                                    type="radio" 
                                                    className="sr-only peer" 
                                                    checked={data.payment_method === method.id}
                                                    onChange={() => setData('payment_method', method.id)}
                                                />
                                                <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl border-2 border-slate-100 dark:border-[#1e2e25] bg-slate-50/50 dark:bg-[#0a120e] transition-all peer-checked:border-[#13ec80] peer-checked:bg-[#13ec80]/5 peer-checked:text-[#13ec80]">
                                                    <method.icon size={24} />
                                                    <span className="text-sm font-bold">{method.label}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Card Details */}
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#51645a]">Card Number</label>
                                            <div className="relative group">
                                                <input 
                                                    type="text"
                                                    className="w-full bg-slate-50 dark:bg-[#0a120e] border border-slate-200 dark:border-[#1e2e25] rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-[#13ec80] outline-none transition-all font-mono" 
                                                    placeholder="0000 0000 0000 0000"
                                                    value={data.card_number}
                                                    onChange={e => setData('card_number', e.target.value)}
                                                />
                                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#13ec80] transition-colors" size={20} />
                                            </div>
                                            {errors.card_number && <div className="text-red-500 text-xs mt-1">{errors.card_number}</div>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#51645a]">Expiry Date</label>
                                            <input 
                                                className="w-full bg-slate-50 dark:bg-[#0a120e] border border-slate-200 dark:border-[#1e2e25] rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#13ec80] outline-none transition-all" 
                                                placeholder="MM/YY"
                                                value={data.expiry}
                                                onChange={e => setData('expiry', e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#51645a]">CVV</label>
                                            <input 
                                                className="w-full bg-slate-50 dark:bg-[#0a120e] border border-slate-200 dark:border-[#1e2e25] rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#13ec80] outline-none transition-all" 
                                                placeholder="123"
                                                value={data.cvv}
                                                onChange={e => setData('cvv', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Billing Toggle */}
                                <div className="flex items-center justify-between p-6 bg-white dark:bg-[#111814] border border-slate-200 dark:border-[#1e2e25] rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-slate-100 dark:bg-[#1e2e25] text-[#13ec80]">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Billing same as shipping</p>
                                            <p className="text-sm text-slate-500">Your registered address will be used.</p>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => setData('same_as_shipping', !data.same_as_shipping)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${data.same_as_shipping ? 'bg-[#13ec80]' : 'bg-slate-200 dark:bg-[#283930]'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${data.same_as_shipping ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Column: Sticky Summary */}
                        <div className="lg:col-span-5 xl:col-span-4">
                            <div className="bg-white dark:bg-[#111814] border border-slate-200 dark:border-[#1e2e25] rounded-3xl p-8 shadow-xl sticky top-28">
                                <h3 className="text-2xl font-black mb-8 tracking-tight">Order Summary</h3>
                                
                                <div className="space-y-4 py-6 border-b border-slate-100 dark:border-[#1e2e25] mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Subtotal</span>
                                        <span className="font-bold font-mono">$148.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Processing Fee</span>
                                        <span className="font-bold font-mono">$12.50</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-10">
                                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                                    <div className="text-right">
                                        <p className="text-4xl font-black tracking-tighter text-[#13ec80] font-mono">$160.50</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">USD</p>
                                    </div>
                                </div>

                                <button 
                                    form="payment-form"
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-[#13ec80] hover:bg-[#0fd672] text-[#102219] font-black py-5 rounded-2xl shadow-lg shadow-[#13ec80]/30 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? (
                                        <span className="animate-pulse">PROCESSING...</span>
                                    ) : (
                                        <>
                                            <Lock size={20} />
                                            <span>PLACE ORDER</span>
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <Link href={route('order.shipping')} className="flex items-center justify-center gap-2 mt-6 text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <ArrowLeft size={16} />
                                    Back to Shipping
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}