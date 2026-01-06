import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

const brands = [
    "https://leadjourney.io/wp-content/uploads/2024/09/item-33.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-32.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-25-1.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-31.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-27.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-30.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-28.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-29.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-26.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-1.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-2.svg",
];

export default function HeroSection() {
    return (
        <section className="relative bg-[#0a0a0c] pt-24 pb-20 overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#03C879]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div>
                        <div className="inline-block px-6 py-3 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm mb-6">
                            <p className="text-white font-medium text-sm md:text-base tracking-wide">
                                Track smarter. Scale faster. 100% Leadgen focus
                            </p>
                        </div>

                        <h1 className="text-4xl md:text-3xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-8">
                            <span className="text-[#03C879]">Lead Gen Tracking & Reporting</span> <br />
                            That’s Adblock-Proof, GDPR-Compliant & 95% Accurate
                        </h1>

                        <div className="text-gray-400 text-lg leading-relaxed mb-10 space-y-4">
                            <p>
                                Still tracking like it’s 2019? You’re <u className="decoration-[#03C879]">wasting</u> hours, 
                                <u className="decoration-[#03C879]"> flying</u> blind, and handing your competitors the edge.
                            </p>
                            <p>
                                <strong className="text-white">Lead<span className="text-[#03C879]">Journey</span></strong> combines real-time reporting 
                                and offline conversion tracking in one tool. Get a single <b>source of truth</b>, even without cookies.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#" className="flex items-center gap-2 bg-[#03C879] text-black px-7 py-4 rounded-2xl font-bold hover:bg-white transition-all transform hover:-translate-y-1">
                                Book a free demo now
                                <ArrowUpRight size={20} />
                            </a>
                            <button className="flex items-center gap-2 border border-[#03C879] text-[#03C879] px-7 py-4 rounded-2xl font-bold hover:bg-[#03C879]/5 transition-all">
                                Watch guided tour
                                <ArrowUpRight size={20} />
                            </button>
                        </div>

                        {/* SOCIAL PROOF SECTION (The Ratings part) */}
                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                            {/* User Avatars */}
                            <div className="flex flex-col gap-2">
                                <img src="https://leadjourney.io/wp-content/uploads/2024/09/users.svg" alt="Users" className="h-8 w-auto" />
                                <p className="text-xs text-gray-400">
                                    50+ marketers love <strong className="text-white">Lead<span className="text-[#03C879]">Journey</span></strong>
                                </p>
                            </div>

                            {/* Trustpilot Stats */}
                            <div className="flex items-center gap-3">
                                <img src="https://leadjourney.io/wp-content/uploads/2024/09/star-1.svg" alt="Trustpilot" className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Trustpilot Rating</p>
                                    <img src="https://leadjourney.io/wp-content/uploads/2024/09/rating-10.svg" alt="Rating" className="h-4 w-24 my-0.5" />
                                    <p className="text-[10px] text-gray-500">Based on 5 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Video Overlay */}
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#03C879] to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img 
                                src="https://leadjourney.io/wp-content/uploads/2025/05/F556692F-6319-4BD4-BB17-7030CE47E810-e1748110865382.jpeg" 
                                alt="Video Preview" 
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                                <div className="w-16 h-16 bg-[#03C879] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                                    <Play fill="black" size={28} className="ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- NEW LOGO CLOUD SECTION --- */}
                <div className="pt-12 border-t border-white/5">
                    {/* Removed lg:text-left to keep it centered on all screens */}
                    <p className="text-gray-500 text-sm font-medium mb-10 text-center">
                        Loved by leading Brands & Agencies:
                    </p>
                    
                    <div className="relative flex overflow-hidden group">
                        <div className="animate-infinite-scroll flex items-center gap-12 md:gap-20">
                            {[...brands, ...brands].map((logo, index) => (
                                <img 
                                    key={index}
                                    src={logo} 
                                    alt="Client Logo" 
                                    className="h-8 md:h-10 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            ))}
                        </div>
                        
                        {/* Gradient Fade Edges */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10" />
                    </div>
                </div>
            </div>
        </section>
        
    );
}