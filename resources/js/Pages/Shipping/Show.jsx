import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ShieldCheck, ArrowLeft, ChevronDown } from 'lucide-react';

export default function Shipping({ auth, cart, totals }) {
    const { data, setData, post, processing, errors } = useForm({
        email: auth.user.email || '',
        marketing: false,
        country: 'United States',
        first_name: '',
        last_name: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        shipping_method: 'standard',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('order.shipping'));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Shipping Information" />

            <div className="min-h-screen bg-[#060d09] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* LEFT SIDE: SHIPPING FORM */}
                    <div className="lg:col-span-7">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-[11px] font-medium mb-8 text-[#9db9ab]/60 uppercase tracking-widest">
                            <span className="text-[#13ec80]">Cart</span>
                            <span>&gt;</span>
                            <span className="text-white">Shipping</span>
                            <span>&gt;</span>
                            <span>Payment</span>
                            <span>&gt;</span>
                            <span>Review</span>
                        </nav>

                        <h1 className="text-3xl font-bold mb-2">Shipping Information</h1>
                        <p className="text-[#9db9ab] text-sm mb-10">Where should we send your order?</p>

                        <form onSubmit={submit} className="space-y-10">
                            {/* Contact Info */}
                            <section>
                                <div className="flex justify-between items-end mb-4">
                                    <h2 className="text-lg font-bold">Contact Information</h2>
                                    <p className="text-xs text-[#9db9ab]">Already have an account? <Link href="/login" className="text-[#13ec80]">Log in</Link></p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">Email Address</label>
                                        <input 
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#13ec80] outline-none"
                                        />
                                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                                    </div>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-[#22332b] bg-[#111c15] text-[#13ec80] focus:ring-0" />
                                        <span className="text-xs text-[#9db9ab] group-hover:text-white transition-colors">Email me with news and offers</span>
                                    </label>
                                </div>
                            </section>

                            {/* Shipping Address */}
                            <section>
                                <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 relative">
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">Country / Region</label>
                                        <select 
                                        value={data.country}
                                        onChange={(e) => setData('country', e.target.value)}
                                        className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm appearance-none outline-none">
                                            <option>United States</option>
                                            <option>Germany</option>
                                            <option>Indonesia</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 bottom-3 text-[#9db9ab]" size={16} />
                                        {errors.country && <div className="text-red-500">{errors.country}</div>}
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">First Name</label>
                                        <input                                         
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        placeholder="John" className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none focus:border-[#13ec80]" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">Last Name</label>
                                        <input value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} placeholder="Doe" className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none focus:border-[#13ec80]" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">Address</label>
                                        <input                                         
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        placeholder="1234 Main St" className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">Apartment, Suite etc (Optional)</label>
                                        <input 
                                        value={data.apartment}
                                        onChange={(e) => setData('apartment', e.target.value)}
                                        className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none" />
                                    </div>
                                    <div className="col-1">
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">City</label>
                                        <input value={data.city} onChange={(e) => setData('city', e.target.value)} className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none" />
                                    </div>
                                    <div className="col-1">
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">State</label>
                                        <input value={data.state} onChange={(e) => setData('state', e.target.value)} className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none" />
                                    </div>
                                    <div className="col-1">
                                        <label className="block text-[10px] uppercase font-bold text-[#9db9ab] mb-2 tracking-widest">Zip Code</label>
                                        <input value={data.zip} onChange={(e) => setData('zip', e.target.value)} className="w-full bg-[#111c15] border-[#22332b] rounded-lg p-3 text-sm outline-none" />
                                    </div>
                                </div>
                            </section>

                            {/* Shipping Method */}
                            <section>
                                <h2 className="text-lg font-bold mb-4">Shipping Method</h2>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-4 bg-[#111c15] border border-[#13ec80] rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="size-4 rounded-full border-4 border-[#13ec80] bg-[#060d09]"></div>
                                            <div>
                                                <p className="text-sm font-bold">Standard Shipping</p>
                                                <p className="text-[10px] text-[#9db9ab]">5-7 business days</p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold">Free</span>
                                    </div>
                                </div>
                            </section>

                            <div className="flex items-center justify-between pt-6 border-t border-[#22332b]">
                                <Link href="/cart" className="flex items-center gap-2 text-[#9db9ab] hover:text-white text-xs font-bold transition-colors">
                                    <ArrowLeft size={14} /> Return to Cart
                                </Link>
                                <button className="bg-[#13ec80] hover:bg-[#10d473] text-[#0d1612] px-10 py-4 rounded-xl font-black transition-all">
                                    Continue to Payment
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT SIDE: MINI ORDER SUMMARY */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#111c15] rounded-2xl p-8 border border-[#22332b] sticky top-12">
                            <h2 className="text-xl font-bold mb-8">Order Summary</h2>
                            
                            <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="size-14 bg-[#060d09] rounded-lg border border-[#22332b] overflow-hidden p-1 flex items-center justify-center">
                                            <img src={item.product.image} className="h-full w-full object-contain" alt="" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white text-xs font-bold truncate leading-tight">{item.product.name}</h4>
                                            <p className="text-[#9db9ab] text-[10px] mt-0.5">{item.product.category || 'Plan'}</p>
                                        </div>
                                        <span className="text-white text-xs font-bold">${item.product.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2 mb-8">
                                <input className="flex-1 bg-[#060d09] border-[#22332b] rounded-lg px-4 py-2 text-xs outline-none" placeholder="Gift card or discount code" />
                                <button className="bg-[#22332b] px-4 py-2 rounded-lg text-xs font-bold text-[#9db9ab]">Apply</button>
                            </div>

                            <div className="space-y-3 text-sm pt-6 border-t border-[#22332b]">
                                <div className="flex justify-between text-[#9db9ab]">
                                    <span>Subtotal</span>
                                    <span className="text-white font-bold">${totals.subtotal}</span>
                                </div>
                                <div className="flex justify-between text-[#9db9ab]">
                                    <span>Shipping</span>
                                    <span className="text-xs italic bg-[#22332b] px-2 py-0.5 rounded text-white">Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-baseline mt-8 pt-8 border-t border-[#22332b]">
                                <span className="text-lg font-bold">Total</span>
                                <div className="text-right">
                                    <span className="text-3xl font-black text-white">${totals.total}</span>
                                    <span className="block text-[10px] text-[#9db9ab] font-bold">USD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}