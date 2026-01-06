import React from 'react';
import { ThumbsDown, ThumbsUp, ArrowUpRight } from 'lucide-react';

export default function MarketingCampaign() {
    const painPoints = [
        { title: "No campaign clarity", desc: "You can’t reliably match leads to the ads or campaigns that actually brought them in." },
        { title: "Excel reporting hell", desc: "You waste hours manually merging ad data with CRM exports using filters and spreadsheets." },
        { title: "Fake conversion numbers", desc: "Ad platforms show inflated or inaccurate conversions, leading to poor optimization." },
        { title: "Zero data without consent", desc: "If users reject cookies, your tracking breaks—and your data disappears." },
        { title: "Customer journey blindness", desc: "You miss critical touchpoints that show how leads really convert across channels." },
        { title: "Siloed KPI reporting", desc: "You can’t see all key performance metrics across platforms and CRM in one place." },
    ];

    const benefits = [
        { title: "Precise lead source", desc: "Identify the exact campaign, ad, and touchpoint behind every individual lead." },
        { title: "Streamlined performance view", desc: "Assess your entire performance marketing in one unified, real-time dashboard." },
        { title: "95% data accuracy", desc: "Feed ad platform algorithms with clean, reliable conversion signals for better targeting." },
        { title: "Conversion tracking without cookies", desc: "Track and send back conversions even when users reject cookies or use ad blockers." },
        { title: "Full journey visibility", desc: "Understand how leads move from first click to final conversion across all channels." },
        { title: "Custom KPI tracking", desc: "Create your own KPIs like Qualification Rate or Sales Cycle—and measure what matters." },
    ];

    return (
        <section className="relative bg-[#0a0a0c] py-24 overflow-hidden" id="comparison">
            {/* Background Decoration Image */}
            <img 
                src="https://leadjourney.io/wp-content/uploads/2024/09/circle-6.svg" 
                className="absolute top-0 right-0 h-full opacity-20 pointer-events-none hidden lg:block"
                alt=""
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Content */}
                {/* Added mx-auto to center the max-w-3xl box */}
<div className="max-w-3xl mb-16 text-center mx-auto">
    <h1 className="text-4xl md:text-4xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-8">
        Leading Companies Rely On <span className="text-[#03C879]">Lead</span>Journey To Scale Their Performance Marketing Campaigns
    </h1>
    <p className="text-gray-400 text-lg leading-relaxed">
        With <b className="text-white">Lead<span className="text-[#03C879]">Journey</span></b>, you gain all the insights needed to scale your lead campaigns. 
        We provide reporting dashboards that combine ad and CRM data with <b className="text-white">95% data accuracy</b>.
    </p>
</div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                    
                    {/* LEFT COLUMN: Without LeadJourney */}
                    <div className="bg-[#0f0f12] p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-10 text-gray-400">
                            <ThumbsDown className="text-red-500" size={24} />
                            <span className="font-bold uppercase tracking-wider text-sm">Marketing without LeadJourney</span>
                        </div>
                        <ul className="space-y-8">
                            {painPoints.map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <ThumbsDown className="text-red-500/50 shrink-0 mt-1" size={18} />
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT COLUMN: With LeadJourney */}
                    <div className="bg-[#141417] p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-10 text-[#03C879]">
                            <ThumbsUp size={24} />
                            <span className="font-bold uppercase tracking-wider text-sm">Marketing with LeadJourney</span>
                        </div>
                        <ul className="space-y-8">
                            {benefits.map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <ThumbsUp className="text-[#03C879] shrink-0 mt-1" size={18} />
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Mobile CTA (Hidden on Desktop to keep clean) */}
                        <div className="mt-12 lg:hidden">
                             <a href="https://leadjourney.io/request-demo/" className="flex items-center justify-center gap-2 bg-[#03C879] text-black px-6 py-4 rounded-xl font-bold">
                                Book a free demo now <ArrowUpRight size={18} />
                             </a>
                        </div>
                    </div>

                </div>
            </div>
            {/* TESTIMONIAL SECTION */}
            <div className="mt-16 max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
                    {/* Subtle Background Glow for the testimonial */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#03C879]/5 blur-[80px] rounded-full -mr-32 -mt-32" />

                    <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                        {/* Left side: Profile Info */}
                        <div className="flex flex-col items-center text-center shrink-0 w-full md:w-auto">
                            <div className="w-20 h-20 rounded-full border-2 border-[#03C879]/30 p-1 mb-4">
                                <img 
                                    src="https://leadjourney.io/wp-content/uploads/2024/09/img.png" 
                                    alt="Steffen Siesing" 
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-lg">Steffen Siesing</h5>
                                <p className="text-gray-500 text-sm mb-3">CEO Bilanzmanufaktur GmbH</p>
                                <img 
                                    src="https://leadjourney.io/wp-content/uploads/2024/09/stars.svg" 
                                    alt="5 Stars" 
                                    className="h-4 mx-auto"
                                />
                            </div>
                        </div>

                        {/* Vertical Divider (Desktop Only) */}
                        <div className="hidden md:block w-px h-24 bg-white/10" />

                        {/* Right side: Quote Content */}
                        <div className="flex-1">
                            <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed">
                                “With <strong className="text-white">Lead<span className="text-[#03C879]">Journey</span></strong>, we have finally found a tool that provides us with the data we need to scale our performance marketing campaigns. The most important KPI is no longer lead price but <span className="text-white font-semibold">cost per qualified lead</span>.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}