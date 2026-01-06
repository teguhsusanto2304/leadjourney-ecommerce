import React, { useState } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { Bell, Package, CheckCircle, Info } from 'lucide-react';

export default function NotificationBell() {
    const { auth } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);
    const notifications = auth.notifications || [];

    return (
        <div className="relative">
            {/* Bell Icon */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-slate-400 hover:text-[#13ec80] transition-colors bg-slate-100 dark:bg-[#1e2e25] rounded-full"
            >
                <Bell size={20} />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-bold items-center justify-center">
                            {notifications.length}
                        </span>
                    </span>
                )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
                    <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-[#111814] border border-slate-200 dark:border-[#1e2e25] rounded-2xl shadow-2xl z-20 overflow-hidden">
                        <div className="p-4 border-b border-slate-100 dark:border-[#1e2e25] flex justify-between items-center">
                            <h3 className="font-black text-xs uppercase tracking-widest">Notifications</h3>
                            {notifications.length > 0 && (
                                <button className="text-[10px] text-[#13ec80] font-bold hover:underline">Mark all as read</button>
                            )}
                        </div>

                        <div className="max-h-96 overflow-y-auto">
                            {notifications.length > 0 ? (
                                notifications.map((n) => (
                                    <div key={n.id} className="p-4 border-b border-slate-50 dark:border-[#0a120e] hover:bg-slate-50 dark:hover:bg-[#1e2e25] transition-colors cursor-pointer">
                                        <div className="flex gap-3">
                                            <div className="mt-1 text-[#13ec80]">
                                                <CheckCircle size={16} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-900 dark:text-white font-bold">{n.data.message}</p>
                                                <p className="text-xs text-slate-400 mt-1">Just now</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-slate-400">
                                    <Info className="mx-auto mb-2 opacity-20" size={32} />
                                    <p className="text-sm italic">No new notifications</p>
                                </div>
                            )}
                        </div>
                        
                        <Link href="/notifications" className="block p-3 text-center text-xs font-bold bg-slate-50 dark:bg-[#0a120e] text-slate-500 hover:text-[#13ec80] transition-colors">
                            VIEW ALL ACTIVITY
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}