import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Added Navigation

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TestimonialSection({ testimonials = [] }) {
    // If testimonials is empty, don't render the slider
    if (!testimonials.length) return null;
    return (
        <div className="mt-40 relative">
            {/* Header omitted for brevity - same as before */}

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                // Link to the custom class names below
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                }}
                className="pb-16"
            >
                {testimonials.map((t, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                        <div className="bg-[#151518] border border-white/5 p-8 rounded-3xl h-[300px] flex flex-col">
                            {/* Top Section Header */}
                            <div className="flex flex-col gap-6 mb-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#03C879]" />
                                        <div className="text-left">
                                            <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                                            <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">{t.role}</p>
                                            <img src="https://leadjourney.io/wp-content/uploads/2024/09/stars.svg" alt="Stars" className="h-3" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <img src={t.companyLogo} alt="Company" className="h-5 w-auto opacity-70 object-contain" />
                                        <span className="text-[9px] font-medium text-[#03C879] bg-[#03C879]/10 px-2 py-1 rounded-md uppercase tracking-widest">
                                            Verified Review
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/5" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <p className="text-lg italic text-gray-300 leading-relaxed line-clamp-6">
                                    “{t.content}”
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons Container */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <div className="custom-prev cursor-pointer hover:bg-white/10 p-3 rounded-full border border-white/10 transition-all active:scale-95" role="button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.5 15.8346L7.5 10.0013L12.5 4.16797" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="custom-next cursor-pointer hover:bg-white/10 p-3 rounded-full border border-white/10 transition-all active:scale-95" role="button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15.8346L12.5 10.0013L7.5 4.16797" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Call to Action Button */}
            <div className="text-center mt-12">
                <a href="https://leadjourney.io/request-demo/" className="inline-flex items-center gap-3 bg-[#03C879] hover:bg-[#02a865] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-[#03C879]/20">
                    <span className="flex items-center gap-2">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <rect x="4.31281" y="15.1265" width="16" height="1.5" rx="0.75" transform="rotate(-45 4.31281 15.1265)" fill="white"></rect>
                            <path d="M9.08582 4.34314H16.1569V11.4142" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Book a free demo now
                    </span>
                </a>
            </div>
        </div>
    );
}