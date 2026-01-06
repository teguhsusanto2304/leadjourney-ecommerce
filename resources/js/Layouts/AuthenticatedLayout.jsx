import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Toaster } from 'react-hot-toast';
import { 
    LayoutDashboard, 
    Users, 
    BarChart3, 
    ShoppingBag, 
    Settings, 
    Menu, 
    Search, 
    ShoppingCart, 
    Bell,
    LogOut
} from 'lucide-react';

export default function AuthenticatedLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { auth, cartCount } = usePage().props;
    const user = auth.user;

    return (
        <div className="bg-[#f6f8f7] dark:bg-[#102219] font-display text-[#111814] dark:text-white h-screen flex overflow-hidden">
            
            {/* 1. Side Navigation (Desktop) */}
            <aside className="hidden lg:flex w-[280px] flex-col border-r border-[#283930] bg-[#162a20] h-full shrink-0">
                <div className="flex h-full flex-col justify-between p-6">
                    <div className="flex flex-col gap-8">
                        {/* Logo / User */}
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-700 rounded-full size-12 shadow-lg ring-2 ring-[#283930] flex items-center justify-center overflow-hidden">
                                <img src={`https://ui-avatars.com/api/?name=${user?.name}&background=13ec80&color=102219`} alt="User avatar" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-white text-lg font-bold leading-tight tracking-tight">LeadGen Pro</h1>
                                <p className="text-[#9db9ab] text-xs font-medium tracking-wide uppercase">Member</p>
                            </div>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-col gap-2">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')} Icon={LayoutDashboard} label="Dashboard" />
                            <NavLink href="#" Icon={Users} label="Leads" />
                            <NavLink href="#" Icon={BarChart3} label="Reports" />
                            <NavLink href={route('products.index')} active={route().current('products.index')} Icon={ShoppingBag} label="Product Catalog" />
                            <NavLink href={route('profile.edit')} active={route().current('profile.edit')} Icon={Settings} label="Settings" />
                        </nav>
                    </div>

                    {/* Bottom Action */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#1e362a] to-[#102219] border border-[#283930]">
                        <p className="text-white text-sm font-bold mb-1">Authenticated</p>
                        <p className="text-[#9db9ab] text-xs mb-3">Logged in as {user?.email}</p>
                        <Link method="post" href={route('logout')} as="button" className="flex items-center gap-2 text-xs font-bold text-[#13ec80] hover:underline">
                            <LogOut size={14} />
                            Log Out
                        </Link>
                    </div>
                </div>
            </aside>

            {/* 2. Main Content Area */}
            <main className="flex-1 flex flex-col h-full relative overflow-y-auto">
                {/* Top Header */}
                <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#283930] bg-white/80 dark:bg-[#102219]/80 backdrop-blur-md px-6 py-4 lg:px-10">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-white">
                            <Menu size={24} />
                        </button>
                        <h2 className="text-[#111814] dark:text-white text-xl font-bold leading-tight">
                            {route().current('cart.index') ? 'Product Catalog' : 'Dashboard'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Search Bar */}
                        <div className="hidden md:flex items-center bg-white dark:bg-[#162a20] border border-gray-200 dark:border-[#283930] rounded-lg h-10 px-3 min-w-[300px] focus-within:ring-2 focus-within:ring-[#13ec80]/50 transition-all">
                            <Search size={18} className="text-gray-400 dark:text-[#9db9ab]" />
                            <input className="bg-transparent border-none text-sm text-[#111814] dark:text-white placeholder-gray-400 dark:placeholder-[#9db9ab] focus:ring-0 w-full ml-2" placeholder="Search..." type="text"/>
                        </div>

                        {/* Cart Action */}
                        <Link href={route('cart.index')} className="relative flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-[#283930] transition-colors text-[#111814] dark:text-white">
                            <ShoppingCart size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#13ec80] text-[10px] font-bold text-[#102219] shadow-sm ring-2 ring-[#102219]">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <button className="hidden md:flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-[#283930] transition-colors text-[#111814] dark:text-white">
                            <Bell size={20} />
                        </button>

                        <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-[#283930] overflow-hidden">
                             <img src={`https://ui-avatars.com/api/?name=${user?.name}`} alt="Profile" />
                        </div>
                    </div>
                </header>

                <div className="flex-1">
                    {children}
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                        toastOptions={{
                            // Default options for all toasts
                            style: {
                            background: '#facc15', // Tailwind yellow-400 hex
                            color: '#000',         // black text for contrast
                            },
                        }}
                        />

                </div>
            </main>
        </div>
    );
}

function NavLink({ href, active, Icon, label }) {
    return (
        <Link 
            href={href} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                active 
                ? 'bg-[#13ec80]/10 border border-[#13ec80]/20 text-[#13ec80] shadow-[0_0_15px_rgba(19,236,128,0.1)]' 
                : 'text-[#9db9ab] hover:bg-[#1e362a] hover:text-white'
            }`}
        >
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            <span className={`text-sm ${active ? 'font-bold' : 'font-semibold'}`}>
                {label}
            </span>
        </Link>
    );
}