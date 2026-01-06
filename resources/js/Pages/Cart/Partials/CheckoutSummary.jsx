import React from 'react';
import { router } from '@inertiajs/react';
import { Lock, ShieldCheck } from 'lucide-react'; // ✅ lucide-react icons

export default function CheckoutSummary({ cart, totals }) {
  return (
    <div className="bg-[#16211b] text-white rounded-3xl p-8 border border-[#22332b] shadow-2xl">
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
        Order Summary
      </h2>
      <span className="text-[10px] bg-[#13ec80]/10 text-[#13ec80] px-2 py-0.5 rounded-full uppercase tracking-widest">
          {cart.length} Items
        </span>
      

      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-[#9db9ab] text-sm">
          <span>Subtotal</span>
          
          <span className="text-white font-medium">${totals.subtotal}</span>
        </div>
        <div className="flex justify-between text-[#9db9ab] text-sm">
          <span>Tax (Estimate)</span>
          <span className="text-white font-medium">${totals.tax}</span>
        </div>
        <div className="flex justify-between text-[#9db9ab] text-sm">
          <span>Shipping</span>
          <span className="text-[#13ec80] font-bold">Free</span>
        </div>
      </div>

      <div className="hidden flex gap-2 mb-10">
        <input
            className="max-w-xs bg-[#0d1612] border-[#22332b] rounded-xl px-3 py-3 text-sm 
                    focus:ring-1 focus:ring-[#13ec80] outline-none text-white 
                    placeholder:text-[#283930]"
            placeholder="Promo code"
        />
        <button className="px-5 py-3 bg-[#1c2a23] border border-[#22332b] hover:bg-[#283930] rounded-xl text-xs font-bold transition-all">
            Apply
        </button>
        </div>

      <div className="flex justify-between items-end border-t border-[#22332b] pt-8 mb-8">
        <span className="text-lg font-bold text-[#9db9ab]">Total</span>
        <div className="text-right">
          <span className="text-4xl font-black tracking-tighter">${totals.total}</span>
          <span className="block text-[10px] text-[#9db9ab]/60 font-bold uppercase">USD</span>
        </div>
      </div>

      {/* Checkout Button with Lock Icon */}
      <button onClick={() => router.post(route('cart.checkout'))} className="w-full bg-[#13ec80] hover:bg-[#10d473] text-[#0d1612] py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(19,236,128,0.15)] transition-all active:scale-[0.98]">
        <Lock size={20} className="stroke-[#0d1612]" />
        Proceed to Checkout
      </button>

      {/* Secure Checkout Badge with ShieldCheck Icon */}
      <div className="flex items-center justify-center gap-2 text-[#9db9ab]/40 text-[10px] mt-6 font-bold uppercase tracking-widest">
        <ShieldCheck size={14} />
        Secure Checkout
      </div>
    </div>
  );
}