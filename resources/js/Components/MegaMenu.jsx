import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { BarChart3,PieChart,Users,MessageSquareMoreIcon,Logs } from 'lucide-react';

const menuItems = [
    {
        id: 1,
        title: 'Traffic Channel Report',
        href: '/traffic-channel-report',
        img: 'https://leadjourney.io/wp-content/uploads/2025/05/Traffic-Channel-Report-LeadJourney.gif',
        icon: <BarChart3 size={20} className="text-white/60 group-hover:text-[#03C879]" />
    },
    {
        id: 2,
        title: 'Ad Campaign Report',
        href: '/campaign-report',
        img: 'https://leadjourney.io/wp-content/uploads/2025/05/Ad-Campaign-Report.gif',
        icon: <PieChart size={20} className="text-white/60 group-hover:text-[#03C879]" />
    },
    {
        id: 3,
        title: 'Lead Overview',
        href: '/lead-overview',
        img: 'https://leadjourney.io/wp-content/uploads/2025/05/Lead-Overview.gif',
        icon: <Users size={20} className="text-white/60 group-hover:text-[#03C879]" />
    },
    {
        id: 4,
        title: 'Offline Conversion Data',
        href: '/offline-conversion-data',
        img: 'https://leadjourney.io/wp-content/uploads/2025/05/Offline-Conversions.gif',
        icon: <MessageSquareMoreIcon size={20} className="text-white/60 group-hover:text-[#03C879]" />
    },
    {
        id: 5,
        title: 'Logs',
        href: '/logs',
        img: 'https://leadjourney.io/wp-content/uploads/2024/10/Logs-Clicks-Logs-final-1.png',
        icon: <Logs size={20} className="text-white/60 group-hover:text-[#03C879]" />
    }
];

export default function MegaMenu({ isOpen }) {
    const [activeImg, setActiveImg] = useState(menuItems[0].img);

    if (!isOpen) return null;

    return (
        <div className="absolute left-0 top-full w-full bg-[#0a0a0c] border-b border-white/10 shadow-2xl overflow-hidden">
            <div className="max-w-7xl mx-auto flex h-[450px]">
                
                {/* Left Side: Navigation List */}
                <div className="w-1/3 border-r border-white/5 p-6 flex flex-col gap-2">
                    
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            onMouseEnter={() => setActiveImg(item.img)}
                            className="group flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-[#03C879]/10 border border-transparent hover:border-[#03C879]/20"
                        >
                            <div className="text-white/60 group-hover:text-[#03C879] transition-colors">
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                                    {item.icon}
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-white group-hover:text-[#03C879] transition-colors leading-tight">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Right Side: Dynamic Image Preview */}
                <div className="w-2/3 bg-[#101115] p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#03C879]/5 to-transparent pointer-events-none" />
                    <img 
                        src={activeImg} 
                        alt="Preview" 
                        className="rounded-xl shadow-2xl border border-white/10 max-h-full object-contain transition-all duration-500 ease-in-out transform scale-100"
                        key={activeImg} // Forces re-animation on change
                    />
                </div>

            </div>
        </div>
    );
}