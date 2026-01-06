import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const featureData = [
    {
        tag: "Traffic Channel Report",
        title: "Track Your Entire Performance Marketing In A Single Dashboard, Combining Ad And CRM Data.",
        description: "Say goodbye to manual analyses through ad platforms, Excel spreadsheets, or CRM filters. With LeadJourney, you get a unified marketing dashboard that consolidates data from multiple sources, all accessible with a single click. Analyze your campaigns in record time, gaining insights into leads, qualified leads, and actual sales.",
        image: "https://leadjourney.io/wp-content/uploads/2025/05/Traffic-Channel-Report-LeadJourney.gif",
        link: "/traffic-channel-report/"
    },
    {
        tag: "Send offline conversion data",
        title: "Send CRM Offline Conversion Data To Ad Platforms And Boost The Algorithm.",
        description: "LeadJourney allows you to send offline conversion data from your CRM directly to ad platforms, giving their algorithms more accurate information to optimize targeting and performance. This improves campaign efficiency by ensuring better audience targeting and smarter bidding strategies.",
        image: "https://leadjourney.io/wp-content/uploads/2025/05/Offline-Conversions.gif",
        link: "/offline-conversion-data/"
    },
    {
        tag: "Lead Overview Report",
        title: "Track The Exact Origin Of Each Individual Lead",
        description: "Track the exact origin of each individual lead and follow their entire journey—from the first click on your website to the final click that generates the lead. This comprehensive tracking provides full visibility into how your campaigns are performing, allowing for better attribution.",
        image: "https://leadjourney.io/wp-content/uploads/2025/05/Lead-Overview.gif",
        link: "/lead-overview/"
    },
    {
        tag: "Multiple attribution models",
        title: "Generate First-Click And Last-Click Reports For Deeper Insights.",
        description: "Generate both first-click and last-click reports, giving you deeper insights into the customer journey. These reports help you understand which touchpoints are driving initial engagement and final conversions, enabling more precise attribution.",
        image: "https://leadjourney.io/wp-content/uploads/2024/09/img-40-1.png",
        link: "/attribution-models/"
    },
    {
        tag: "Lead Journey Report",
        title: "Trace The Full Customer Journey Of Every Individual Lead.",
        description: "The Customer Journey Report allows you to trace the entire path of every individual lead. By mapping out each key touchpoint, this report provides valuable insights into how leads move through your funnel, enabling you to optimize strategies for improved ROI.",
        image: "https://leadjourney.io/wp-content/uploads/2025/05/LeadJourney.gif",
        link: "/lead-overview/"
    },
    {
        tag: "Customizable Metrics",
        title: "Create Fully Customizable Reports With User-Defined Metrics.",
        description: "Create fully customizable reports that feature user-defined metrics tailored to your specific business goals. This flexibility allows you to track the KPIs that matter most to you, providing deeper insights and helping you optimize your campaigns.",
        image: "https://leadjourney.io/wp-content/uploads/2025/05/Custom-Metrics.gif",
        link: "/custom-metrics/"
    },
    {
        tag: "Ad Campaign Report",
        title: "Track Performance Per Campaign, Ad Set, And Ad—With Full-Funnel Clarity.",
        description: "Track performance at the campaign, ad set, and ad level—combined with CRM data for full-funnel insights. LeadJourney reveals which campaigns drive real ROI, not just clicks, so you can optimize ad spend based on qualified leads.",
        image: "https://leadjourney.io/wp-content/uploads/2025/05/Ad-Campaign-Report.gif",
        link: "/campaign-report/"
    }
];

export default function Features() {
    return (
        <section className="bg-[#0a0a0c] py-24 relative overflow-hidden max-w-7xl mx-auto px-6 relative z-10" id="features">


            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
                {/* Header */}
                <div className="max-w-3xl mb-24 text-center mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Introducing The Most Important <span className="text-[#03C879]">Lead</span>Journey Features
                    </h2>
                    <p className="text-gray-400 text-lg">
                        <strong>LeadJourney</strong> offers powerful features to streamline your performance marketing, including a unified dashboard that combines ad platform and CRM data.
                    </p>
                </div>

                {/* Features List */}
                <div className="space-y-32">
                    {featureData.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                            
                            {/* Text Content */}
                            <div className="flex-1 text-center lg:text-left">
                                
                                <div className="inline-block px-6 py-3 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm mb-6">
                            <p className="text-white font-medium text-sm md:text-base tracking-wide">
                                {feature.tag}
                            </p>
                        </div>
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">{feature.title}</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{feature.description}</p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                    <a href="https://leadjourney.io/request-demo/" className="flex items-center gap-2 bg-[#03C879] text-white px-5 py-3 rounded-xl font-bold hover:bg-black hover:text-[#03C879] hover:border border-[#03C879] transition duration-300">
                                        Book a free demo <ArrowUpRight size={18} />
                                    </a>
                                    <a href={feature.link} className="flex items-center gap-2 text-white font-semibold hover:text-[#03C879] transition-colors">
                                        More details <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Image Wrapper with Border */}
                            <div className="flex-1 w-full group">
                                <div className="relative p-2 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-[#03C879]/30 group-hover:bg-[#03C879]/5">
                                    <div className="overflow-hidden rounded-[1.5rem] border border-white/5 shadow-2xl shadow-black">
                                        <img 
                                            src={feature.image} 
                                            alt={feature.tag} 
                                            className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105" 
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Testimonial Section */}
                <div className="mt-32 max-w-8xl mx-auto px-3 relative z-10">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="shrink-0 text-center">
                                <div className="p-1 rounded-full border-2 border-[#03C879]/30 mb-4 inline-block">
                                    <img src="https://leadjourney.io/wp-content/uploads/2024/09/img-1.png" className="w-20 h-20 rounded-full" alt="Nikita Yatsun" />
                                </div>
                                <h5 className="text-white font-bold">Nikita Yatsun</h5>
                                <p className="text-gray-500 text-xs uppercase tracking-tighter">CEO RLV Media GmbH</p>
                                <img src="https://leadjourney.io/wp-content/uploads/2024/09/stars.svg" className="h-3 mx-auto mt-2 opacity-80" alt="5 stars" />
                            </div>
                            <div className="text-gray-300 italic text-lg leading-relaxed relative">
                                <span className="text-5xl text-[#03C879]/20 absolute -top-4 -left-6 font-serif">“</span>
                                {featureData[0].description.includes('LeadJourney') && (
                                    <>
                                        “<strong>LeadJourney</strong> has transformed the way we track and optimize our marketing efforts. The ability to seamlessly integrate data from multiple channels and see real-time insights has significantly improved our campaign results. We now focus on metrics that truly matter, like ROI and qualified leads.”
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}