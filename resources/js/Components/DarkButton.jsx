export default function AuthButtons() {
    return (
        <div className="flex items-center gap-4 bg-[#0a0a0c] p-8">
            
            {/* 1. Login Button (Outlined/Dark) */}
            <Link 
                href="/login"
                className="group flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 rounded-2xl transition-all hover:bg-white/10 hover:border-white/20"
            >
                <span className="text-[#03C879] font-bold text-lg">Login</span>
                <div className="p-1 rounded-full border border-[#03C879]/30 group-hover:border-[#03C879]">
                    <User size={20} className="text-[#03C879]" />
                </div>
            </Link>

            {/* 2. Book Free Demo Button (Primary Green) */}
            <Link 
                href="/demo"
                className="flex items-center gap-2 px-8 py-4 bg-[#03C879] text-white rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(3,200,121,0.3)]"
            >
                <span className="font-bold text-lg">Book free demo</span>
                <ArrowUpRight size={22} strokeWidth={2.5} />
            </Link>

        </div>
    );
}