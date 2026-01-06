import React from 'react';
import { Link } from '@inertiajs/react';
import { BarChart3, Building2, UserCheck } from 'lucide-react';

const solutionItems = [
    {
        id: 1,
        title: 'Lead Generation Businesses',
        href: '/',
        icon: <BarChart3 size={18} strokeWidth={2} />
    },
    {
        id: 2,
        title: 'Performance Marketing Agencies',
        href: '/for-agencies',
        icon: <Building2 size={18} strokeWidth={2} />
    },
    {
        id: 3,
        title: 'Marketing Tracking Freelancer',
        href: '/for-tracking-freelancer',
        icon: <UserCheck size={18} strokeWidth={2} />
    }
];

export default function SolutionForMenu({ isOpen }) {
    if (!isOpen) return null;

    return (
        <div className="absolute left-0 top-full w-full bg-[#0a0a0c] border-b border-white/10 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto flex py-8 px-6">
                
                {/* Left Side: Description (Matching your site style) */}
                <div className="w-1/3 border-r border-white/5 pr-12 flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-[#03C879] uppercase tracking-[0.2em] mb-4">
                        Tailored for you
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                        Who is LeadJourney for?
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Whether you're a business owner, an agency, or a solo specialist, we provide the tools to scale your performance marketing.
                    </p>
                </div>

                {/* Right Side: Simple List (No Image Preview) */}
                <div className="w-2/3 pl-12 grid grid-cols-1 gap-2 self-center">
                    {solutionItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/10"
                        >
                            <div className="flex-shrink-0 p-2 rounded-lg bg-[#03C879]/10 text-[#03C879] group-hover:bg-[#03C879] group-hover:text-black transition-all duration-300">
                                {item.icon}
                            </div>
                            <span className="text-sm font-bold text-white group-hover:text-[#03C879] transition-colors">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}