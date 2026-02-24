import React, { useState, useEffect } from 'react';

const Hero = () => {
    const slides = [
        {
            id: 1,
            type: "image",
            image: "/images/hero_it_solution_clean.png",
            title: "블루컴 (BLUECOM)",
            description: "IT TOTAL SOLUTION · ONESTOP SOLUTION PROVIDER\n통합 서비스로 귀하의 미래를 앞당기십시오.",
            cta: "솔루션 보기",
            hideButtons: true,
            duration: 4000
        },
        {
            id: 2,
            type: "image",
            image: "/images/hospital_bg.jpg",
            title: "지능형 순번 대기 시스템",
            description: "접수, 수납, 입퇴원 창구의 통합 모니터링 및 스마트 안내 시스템.",
            cta: "솔루션 보기"
        },
        {
            id: 3,
            type: "image",
            image: "/images/factory_bg.jpg",
            title: "라벨, RFID 솔루션",
            description: "생산 라인에서 즉시 출력하고 적용하는 고성능 바코드 프린팅.",
            cta: "제품 보기"
        },
        {
            id: 4,
            type: "image",
            image: "/images/server_room_bg.jpg",
            title: "IT 인프라 및 네트워크 유지보수",
            description: "서버, 네트워크, 컴퓨터 시스템의 안정적인 운영을 위한 통합 유지보수.",
            cta: "서비스 문의"
        },
        {
            id: 5,
            type: "image",
            image: "/images/digital_signage_bg.jpg",
            title: "디지털 홍보 시스템",
            description: "생생한 디스플레이를 통한 효과적인 정보 전달 및 브랜드 홍보.",
            cta: "솔루션 보기"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideDuration = slides[currentSlide].duration || 5000;
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, slideDuration);

        return () => clearTimeout(timer);
    }, [currentSlide, slides]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative bg-gray-900 text-white h-[600px] overflow-hidden group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background */}
                    <div className="absolute inset-0">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover opacity-100"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                        <div className="max-w-3xl transform transition-transform duration-1000 translate-y-0">
                            {/* Add simple animation capability here if needed, generic CSS transition works */}
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-2xl mb-8 text-gray-200 leading-relaxed whitespace-pre-line">
                                {slide.description}
                            </p>
                            {!slide.hideButtons && (
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
                                        {slide.cta}
                                    </a>
                                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                        자세히 알아보기
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white bg-opacity-50 hover:bg-opacity-100'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Navigation Arrows (Optional, clean look might prefer just dots, but let's add for usability) */}
            <button
                onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full hidden group-hover:block transition-all"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
                onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full hidden group-hover:block transition-all"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
    );
};

export default Hero;
