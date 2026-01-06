import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ArrowUp } from 'lucide-react';
import Navbar from '@/Components/Navbar'; // Assumes you have a Navbar component

export default function DefaultLayout({ children }) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Handle the "Back to Top" visibility based on scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#03C879] selection:text-black">
            {/* 1. Navigation */}
            <Navbar />

            {/* 2. Main Content Area */}
            <main className="relative">
                {children}
            </main>

            {/* 3. Global Footer */}
            <footer className="bg-[#101115] border-t border-white/5 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <img src="https://leadjourney.io/wp-content/uploads/2024/09/logo-46.svg" alt="LeadJourney" className="h-8 mb-6" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Performance Marketing Tracking Software for data-driven decisions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Product</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="/features" className="hover:text-[#03C879]">Features</Link></li>
                                <li><Link href="/pricing" className="hover:text-[#03C879]">Pricing</Link></li>
                                <li><Link href="/roadmap" className="hover:text-[#03C879]">Roadmap</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="/about" className="hover:text-[#03C879]">About Us</Link></li>
                                <li><Link href="/blog" className="hover:text-[#03C879]">Blog</Link></li>
                                <li><Link href="/contact" className="hover:text-[#03C879]">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="/privacy" className="hover:text-[#03C879]">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-[#03C879]">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© 2026 LeadJourney.io. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* 4. Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-[#03C879] text-black rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95"
                >
                    <ArrowUp size={24} strokeWidth={3} />
                </button>
            )}
        </div>
    );
}