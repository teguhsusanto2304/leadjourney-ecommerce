import React, { useState } from 'react';

const faqData = [
    {
        id: "01",
        question: <>What is <span className="text-[#03C879]">Lead</span>Journey?</>,
        answer: (
            <>
                <p><strong><span className="text-[#03C879]">Lead</span>Journey</strong> is a powerful performance marketing tool specifically designed for <b>lead generation businesses</b>. It combines data from all your ad platforms and CRM into one unified dashboard, helping you track the customer journey, identify the most profitable traffic channels, and make data-driven decisions to optimize your marketing campaigns.</p>
                <p className="mt-4">You can track the origin of every lead and also see the correlation between different channels and campaigns, allowing for a comprehensive understanding of how your marketing efforts work together to drive results.</p>
            </>
        )
    },
    {
        id: "02",
        question: <>How does <span className="text-[#03C879]">Lead</span>Journey integrate with CRM systems?</>,
        answer: (
            <p><strong><span className="text-[#03C879]">Lead</span>Journey</strong> integrates with your ad platforms via real-time API connections and syncs your CRM data through Webhooks. This seamless integration allows you to track and analyze data from both sources in one dashboard.</p>
        )
    },
    {
        id: "03",
        question: <>Can I track the origin of individual leads?</>,
        answer: (
            <p>With <strong><span className="text-[#03C879]">Lead</span>Journey</strong>, you can track both standard KPIs like ROI, ROAS, and lead quality, as well as custom metrics tailored to your business needs. This includes data on individual leads, traffic sources, and conversion tracking across all channels.</p>
        )
    },
    {
        id: "04",
        question: <>How does <span className="text-[#03C879]">Lead</span>Journey improve campaign analysis?</>,
        answer: (
            <p><strong><span className="text-[#03C879]">Lead</span>Journey</strong> improves your marketing campaign results by providing real-time, data-driven insights from both your ad platforms and CRM. This unified data allows you to track lead quality, customer journeys, and optimize campaigns for better ROI and efficiency.</p>
        )
    },
    {
        id: "05",
        question: <>How much does a <span className="text-[#03C879]">Lead</span>Journey subscription cost?</>,
        answer: (
            <p>If you are interested in using <strong><span className="text-[#03C879]">Lead</span>Journey</strong> <a href="https://leadjourney.io/request-demo/" className="underline font-bold">request a free demo</a> to get more information about the pricing model.</p>
        )
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq-section" className="bg-[#0a0a0c] pt-24 pb-12 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. FAQ Content Section */}
                <div className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-400 text-lg">
                            Got questions about <strong><span className="text-[#03C879]">Lead</span>Journey</strong>? Find answers in our FAQ or request a free demo.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={item.id} className="border border-white/5 rounded-2xl bg-[#151518] overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-[#03C879] font-bold text-lg opacity-50">{item.id}</span>
                                        <h3 className="text-lg md:text-xl font-semibold">{item.question}</h3>
                                    </div>
                                    <div className="shrink-0 ml-4">
                                        {openIndex === index ? (
                                            <div className="w-10 h-10 rounded-xl bg-[#03C879] flex items-center justify-center">
                                                <svg width="14" height="2" viewBox="0 0 14 2" fill="none"><path d="M1 1H13" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 rounded-xl bg-[#03C879]/10 border border-[#03C879]/20 flex items-center justify-center">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="#03C879" strokeWidth="2" strokeLinecap="round"/></svg>
                                            </div>
                                        )}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 ml-16 text-gray-400 leading-relaxed border-t border-white/5 mt-4 py-6">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Scale CTA Banner Section */}
                <div className="relative bg-[#03C879] rounded-[2.5rem] overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center">
                        
                        {/* Left Side: Text and Button */}
                        <div className="w-full lg:w-1/2 p-10 md:p-16 text-left">
                            <h2 className="text-3xl md:text-7xl lg:text-5xl font-medium text-white leading-[1.1] mb-10">
                                Track Your Lead Campaigns With <span className="text-black px-2 py-1 rounded-lg">98% Data Accuracy</span> And Scale Your Marketing Effortlessly.
                            </h2>
                            
                            <a href="https://leadjourney.io/request-demo/" className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl group hover:text-[#03C879]">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <rect x="4.31281" y="15.1265" width="16" height="1.5" rx="0.75" transform="rotate(-45 4.31281 15.1265)" fill="white"></rect>
                                    <path d="M9.08582 4.34314H16.1569V11.4142" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                Book free demo now
                            </a>
                        </div>

                        {/* Right Side: Dashboard Image */}
                        <div className="w-full lg:w-1/2 relative flex items-end justify-center lg:justify-end pr-0 lg:pr-10 pt-10 lg:pt-20">
                            {/* Desktop/Tablet Image */}
                            <img 
                                src="https://leadjourney.io/wp-content/uploads/2024/10/Group-52821-2-1.png" 
                                alt="LeadJourney Dashboard" 
                                className="hidden sm:block w-full h-auto object-contain max-w-[600px] lg:max-w-none transform translate-y-4"
                            />
                            {/* Mobile Image */}
                            <img 
                                src="https://leadjourney.io/wp-content/uploads/2024/10/Group-52821-3-1.png" 
                                alt="LeadJourney Mobile Dashboard" 
                                className="block sm:hidden w-[85%] h-auto object-contain transform translate-y-4"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}