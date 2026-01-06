import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, ChevronDown, User, ArrowUpRight } from 'lucide-react';
import MegaMenu from './MegaMenu';
import SolutionForMenu from './SolutionForMenu';

export default function Navbar() {
    const [isMegaOpen, setIsMegaOpen] = useState(false);
    const [isSolutionForOpen, setIsSolutionForOpen] = useState(false);

    const closeAllMenus = () => {
        setIsMegaOpen(false);
        setIsSolutionForOpen(false);
    };

    return (
        <nav 
            className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10 text-white"
            onMouseLeave={closeAllMenus}
        >
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <img src="https://leadjourney.io/wp-content/uploads/2024/09/logo-46.svg" alt="LeadJourney" className="h-10" />
                    
                    <div className="flex gap-8 items-center h-20">
                        
                        {/* Features Trigger */}
                        <div className="relative h-full flex items-center group">
                            <button 
                                onMouseEnter={() => { setIsMegaOpen(true); setIsSolutionForOpen(false); }}
                                className={`flex items-center gap-1 transition-colors font-medium ${isMegaOpen ? 'text-[#03C879]' : 'text-white'}`}
                            >
                                Features 
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {/* THE GREEN LINE */}
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-[#03C879] transition-all duration-300 ${isMegaOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                        </div>
                        
                        {/* Solution For Trigger */}
                        <div className="relative h-full flex items-center group">
                            <button 
                                onMouseEnter={() => { setIsSolutionForOpen(true); setIsMegaOpen(false); }}
                                className={`flex items-center gap-1 transition-colors font-medium ${isSolutionForOpen ? 'text-[#03C879]' : 'text-white'}`}
                            >
                                Solution for 
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isSolutionForOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {/* THE GREEN LINE */}
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-[#03C879] transition-all duration-300 ${isSolutionForOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                        </div>

                        <div className="relative h-full flex items-center group">
                        <Link 
                                href="#six-steps-section" 
                                className="text-white hover:text-[#03C879] transition font-medium"
                            >
                                6 Solution Configuration
                            </Link>
                            
                            {/* Garis Hijau di bagian paling bawah navbar */}
                            <div className="absolute bottom-0 left-0 h-[2px] bg-[#03C879] w-0 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        </div>

                        <div className="relative h-full flex items-center group">
                        <Link 
                                href="#faq-section" 
                                className="text-white hover:text-[#03C879] transition font-medium"
                            >
                                FAQs
                            </Link>
                            
                            {/* Garis Hijau di bagian paling bawah navbar */}
                            <div className="absolute bottom-0 left-0 h-[2px] bg-[#03C879] w-0 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        </div>
                        
                    </div>
                </div>

                {/* Right side buttons */}
                <div className="hidden md:flex gap-4 items-center">
                    <Link href="/login" className="group flex items-center gap-3 px-5 py-2.5 border border-white/10 bg-white/5 rounded-2xl transition-all hover:bg-white/10 hover:border-white/20">
                        <span className="text-[#03C879] font-bold text-base">Login</span>
                        <div className="p-1 rounded-lg border border-[#03C879]/30 group-hover:border-[#03C879]">
                            <User size={18} className="text-[#03C879]" />
                        </div>
                    </Link>

                    <button className="flex items-center gap-2 bg-[#03C879] text-white px-5 py-3 rounded-xl font-bold hover:bg-black hover:text-[#03C879] hover:border border-[#03C879] transition duration-300">
                        <span className="text-sm">Book free demo</span>
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Dropdown Panels */}
            <div className={`absolute left-0 w-full transition-all duration-300 ${isMegaOpen ? 'opacity-100 visible' : 'opacity-0 invisible -translate-y-2'}`}>
                <MegaMenu isOpen={isMegaOpen} />
            </div>

            <div className={`absolute left-0 w-full transition-all duration-300 ${isSolutionForOpen ? 'opacity-100 visible' : 'opacity-0 invisible -translate-y-2'}`}>
                <SolutionForMenu isOpen={isSolutionForOpen} />
            </div>
        </nav>
    );
}