import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialSection from './TestimonialSection';

const stepsData = [
    {
        id: 1,
        title: "Connect all your traffic channels seamlessly.",
        description: "Start by connecting your traffic channels like Google Ads and Facebook Ads. This quick setup allows LeadJourney to automatically gather data from all sources, giving you a unified view of your campaigns right from the start, without manual input.",
        image: "https://leadjourney.io/wp-content/uploads/2024/10/Connent-LJ-Traffic-Channels.png"
    },
    {
        id: 2,
        title: "Define offline conversion actions for more precise insights.",
        description: "Set up offline conversion actions like Qualified Lead, Reachable Lead, or Booking Closing Call to track key milestones. This helps LeadJourney capture both online and offline interactions, giving you more complete insights for optimizing performance.",
        image: "https://leadjourney.io/wp-content/uploads/2024/10/Define-offline-conversions.png"
    },
    {
        id: 3,
        title: "Set up CRM webhooks to send data to LeadJourney in real-time.",
        description: "Integrate your CRM with LeadJourney by setting up webhooks for real-time data transfer. This ensures instant updates, such as status changes or conversions, keeping your data accurate and up-to-date for faster, more informed decision-making.",
        image: "https://leadjourney.io/wp-content/uploads/2024/09/img-2024-09-11T105329.425-1.jpg"
    },
    {
        id: 4,
        title: "Add the LeadJourney tracking script to your website to monitor all clicks.",
        description: "Install the LeadJourney tracking script on your website to track every click in real-time. This ensures that all user interactions are captured, giving you complete visibility into your leads' online activity.",
        image: "https://leadjourney.io/wp-content/uploads/2024/10/Graphic-9-1.png"
    },
    {
        id: 5,
        title: "Capture LeadJourney Click ID using hidden fields in every contact form.",
        description: "Add hidden fields in all your contact forms to capture the LeadJourney Click ID. This allows you to match clicks with leads, ensuring seamless data tracking and a complete view of your leads' journey from first click to conversion.",
        image: "https://leadjourney.io/wp-content/uploads/2024/10/Graphic-8-1.png"
    },
    {
        id: 6,
        title: "Track and Optimize Your Lead Generation Ads for Better Marketing ROI.",
        description: "With the setup complete, you can start collecting data immediately. LeadJourney provides real-time insights, allowing you to quickly optimize campaigns and improve performance, ensuring better ROI for your lead generation efforts.",
        image: "https://leadjourney.io/wp-content/uploads/2024/09/img-2024-09-11T105329.425-1.jpg"
    }
];

const integrationLogos = [
    "https://leadjourney.io/wp-content/uploads/2024/09/item-36.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-37.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-46.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-47.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-48.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/item-49.svg",
    "https://leadjourney.io/wp-content/uploads/2024/09/logo-43.svg"
];

const testimonials = [
    {
        name: "Steffen Siesing",
        role: "CEO Bilanzmanufaktur GmbH",
        companyLogo: "https://leadjourney.io/wp-content/uploads/2024/09/logo-44.svg",
        image: "https://leadjourney.io/wp-content/uploads/2024/09/img-34.png",
        content: "With LeadJourney, we have finally found a tool that provides us with the data we need to scale our performance marketing campaigns. The most important KPI is no longer lead price but cost per qualified lead."
    },
    {
        name: "Nikita Yatsun",
        role: "CEO RLV Media GmbH",
        companyLogo: "https://leadjourney.io/wp-content/uploads/2024/09/logo-45.svg",
        image: "https://leadjourney.io/wp-content/uploads/2024/09/img-35.png",
        content: "LeadJourney has transformed the way we track and optimize our marketing efforts. The ability to seamlessly integrate data from multiple channels and see real-time insights has significantly improved our campaign results."
    },
    {
        name: "Andre Witzel",
        role: "Founder Trading.de",
        companyLogo: "https://leadjourney.io/wp-content/uploads/2024/09/svgg.png",
        image: "https://leadjourney.io/wp-content/uploads/2024/09/Andre-Witzel.png-1.webp",
        content: "The ability to track both online and offline conversions in one unified dashboard has given us insights we never had before. It's so easy to use, and our ROI has improved dramatically."
    }
];

export default function SixSteps() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section id="six-steps-section" className="bg-[#0a0a0c] py-24 text-white font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Header Section */}
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-[#03C879]">Lead</span>Journey Is Ready To Use In Just 6 Simple Steps.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Incredibly easy to set up, no programming skills needed, with comprehensive documentation.
                    </p>
                </div>

                {/* 2. Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-white/10">
                    {stepsData.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveTab(step.id)}
                            className={`px-6 md:px-8 py-4 text-sm font-bold transition-all border-b-2 -mb-[2px] ${
                                activeTab === step.id 
                                ? "border-[#03C879] text-[#03C879]" 
                                : "border-transparent text-gray-500 hover:text-gray-300"
                            }`}
                        >
                            Step {step.id}
                        </button>
                    ))}
                </div>

                {/* 3. Steps Content (Vertical Layout) */}
                <div className="mb-32">
                    {stepsData.map((step) => (
                        activeTab === step.id && (
                            <div key={step.id} className="flex flex-col items-center text-center space-y-10 animate-fadeIn">
                                <div className="max-w-4xl">
                                    <h3 className="text-2xl md:text-4xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{step.description}</p>
                                </div>
                                <div className="w-full max-w-5xl p-2 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <img src={step.image} alt={step.title} className="w-full rounded-[1.5rem] shadow-2xl" />
                                </div>
                            </div>
                        )
                    ))}
                </div>

                {/* 4. Integrations Section (From your Elementor Code) */}
                <div className="mt-32 pt-24 border-t border-white/5 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Over 25 Integrations Are Supported By <span className="text-[#03C879]">Lead</span>Journey
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-10">
                        With <strong className="text-white">LeadJourney</strong>, you can connect a variety of traffic channels and seamlessly integrate data from your CRM, whether it's HubSpot, Salesforce, or a custom-built system.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-8 items-center mb-12 opacity-80">
                        {integrationLogos.map((logo, idx) => (
                            <img key={idx} src={logo} alt="Integration" className="h-10 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer" />
                        ))}
                    </div>

                    <a href="https://leadjourney.io/request-demo/" className="inline-flex items-center gap-3 bg-[#03C879] hover:bg-[#02a865] text-white px-8 py-4 rounded-full font-bold transition-all group">
                        Book a free demo now
                        <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <rect x="4.3" y="15.1" width="16" height="1.5" rx="0.75" transform="rotate(-45 4.3 15.1)" fill="currentColor" />
                            <path d="M9.08 4.34H16.15V11.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* 5. Testimonials Section (From your Elementor Code) */}
                <div className="mt-40">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Over 100 Businesses Trust <span className="text-[#03C879]">Lead</span>Journey For Success.
                        </h2>
                        <p className="text-gray-400">LeadJourney is the #1 performance marketing tracking solution for lead generation businesses worldwide.</p>
                    </div>
                        <TestimonialSection testimonials={testimonials} />
                    
                </div>

            </div>

            <style jsx>{`
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}