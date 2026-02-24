import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'MH261T',
        category: 'label',
        name: 'MH261T',
        title: '6인치 열전사 산업용 라벨 프린터',
        description: 'MH261T는 프리미엄 프린트 헤드 기술과 빠른 프로세서, 넉넉한 메모리 용량을 갖추고 있어 고품질 라벨을 빠른 속도로 인쇄할 수 있는 6인치 산업용 라벨 프린터입니다.',
        features: ['6인치 (168mm)', '12 ips', '터치 LCD', '열전사/감열'],
        image: '/images/MH261T.JPG',
        detailImages: [
            '/images/MH261T.JPG',        // Main Image
            '/images/MH261T_detail.JPG'  // New Detail Image (Inner View)
        ]
    },
    {
        id: 'MB241T',
        category: 'label',
        name: 'MB241T',
        title: '4인치 열전사 산업용 라벨 프린터',
        description: 'MB 시리즈는 견고한 전 금속 메커니즘으로 대량 인쇄 시에도 뛰어난 내구성을 보장하며, 두꺼운 행택 등 특수 용지도 완벽하게 처리합니다. 라이너리스, 필오프, 리와인더, 커터 등 다양한 옵션을 지원하여 비즈니스 환경에 최적화할 수 있으며, 특히 MB241 시리즈는 혁신적인 디자인으로 "Red Dot Award: Product Design 2025"를 수상했습니다.',
        features: ['4인치 (108mm)', '8 ips', '터치 LCD', '열전사/감열'],
        image: '/images/MB241T.JPG',
        detailImages: [
            '/images/MB241T_1.JPG',
            '/images/MB241T_2.JPG',
            '/images/MB241T_3.JPG'
        ]
    },
    {
        id: 'LABEL-SUPPLIES',
        category: 'receipt',
        name: '라벨용지',
        title: '고품질 라벨 및 리본 소모품',
        description: '감열방식부터 열전사방식까지 다양한 인쇄 환경에 최적화된 라벨 솔루션을 제공합니다. 선명한 인쇄 품질과 강력한 접착력으로 물류, 제조, 소매 등 다양한 산업 현장에서 믿고 사용할 수 있습니다.',
        features: ['아트지', '감열지', '유포지', '유포감열지', 'RFID태그용지'],
        image: '/images/label-supplies.jpg'
    },
    {
        id: 'RIBBON-SUPPLIES',
        category: 'receipt',
        name: '리본',
        title: '고품질 열전사 리본',
        description: '고품질 레진 및 왁스 성분을 함유하여 가혹한 환경에서도 뛰어난 인쇄 내구성을 보장합니다. 다양한 라벨 재질과 완벽하게 호환되어 귀사의 비즈니스에 최상의 결과물을 제공합니다.',
        features: ['왁스', '왁스레진', '레진'],
        image: '/images/ribbon.jpg'
    },
    {
        id: 'LABEL-REWINDER',
        category: 'receipt',
        name: '라벨리와인더',
        title: '자동 라벨 리와인더 (되감기 장치)',
        description: '대량 인쇄 시 출력되는 라벨을 자동으로 깔끔하게 되감아주는 장치입니다. 조절 가능한 텐션 제어와 고속 모터를 탑재하여 작업 효율을 극대화하며 모든 바코드 프린터와 호환됩니다.',
        features: ['라벨되감는 기계'],
        image: '/images/label-rewinder.jpg'
    },
    {
        id: 'ML241P',
        category: 'label',
        name: 'ML241P',
        title: '소형 산업용 라벨 프린터',
        description: '공간 절약형 디자인과 강력한 성능을 겸비한 ML241P는 제한된 작업 공간에서도 고속 인쇄가 가능하며, 내구성이 뛰어나 다양한 산업 환경에 적합합니다.',
        features: ['4인치 (108mm)', '5 ips', '203 dpi', '컴팩트 디자인'],
        image: '/images/ML241P.JPG',
        detailImages: [
            '/images/ML241P.JPG',        // Main Image
            '/images/ML241P_detail.JPG'  // New Detail Image (Inner View)
        ]
    },
    {
        id: 'TTP-247',
        category: 'label',
        name: 'TTP-247',
        title: '고성능 데스크탑 라벨 프린터',
        description: '동급 최강의 성능과 내구성을 자랑하는 TTP-247은 초당 7인치의 빠른 인쇄 속도와 견고한 듀얼 모터 디자인을 갖추고 있어 다양한 라벨링 작업에 최적화되어 있습니다.',
        features: ['4인치 (108mm)', '7 ips', '203 dpi', '듀얼 모터'],
        image: '/images/TTP247.JPG',
        detailImages: [
            '/images/TTP247.JPG',        // Main Image
            '/images/TTP247_detail.JPG'  // New Detail Image (Open View)
        ]
    },
    {
        id: 'ZT411',
        category: 'label',
        name: 'ZT411',
        title: 'Zebra 고성능 산업용 라벨 프린터',
        description: '견고한 금속 프레임과 직관적인 터치 디스플레이를 갖춘 ZT411은 다양한 산업 환경에서 안정적인 인쇄 성능을 제공합니다.',
        features: ['4인치 (104mm)', '14 ips', '203/300/600 dpi', '컬러 터치 LCD'],
        image: '/images/ZT411.JPG',
        detailImages: [
            '/images/ZT411.JPG',        // Main Image
            '/images/ZT411_detail.JPG'  // New Detail Image (Inner View)
        ]
    },
    {
        id: 'ZD421',
        category: 'label',
        name: 'ZD421',
        title: 'Zebra 고성능 데스크탑 라벨 프린터',
        description: '직관적인 인터페이스와 유연한 기능을 갖춘 ZD421은 헬스케어, 소매, 제조 등 다양한 환경에 적합한 4인치 데스크탑 프린터입니다.',
        features: ['4인치 (104mm)', '6 ips', '203/300 dpi', '이동식 센서'],
        image: '/images/ZD421.JPG'
    }
];

const BarcodePrinter = () => {
    const [filter, setFilter] = useState('label'); // Default to 'label' (Label Printer)

    const filteredProducts = filter === 'all'
        ? [...products].sort((a, b) => {
            // Priority: 'label' first, then 'receipt' (or others)
            if (a.category === 'label' && b.category !== 'label') return -1;
            if (a.category !== 'label' && b.category === 'label') return 1;
            return 0; // Keep original order within the same category
        })
        : products.filter(product => product.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/label-printer-banner.jpg"
                        alt="Label Printer Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-black/50 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">라벨 프린터 솔루션</h1>
                    <p className="text-xl text-white/90 max-w-3xl font-medium leading-relaxed">
                        최고의 인쇄 품질과 내구성을 자랑하는 산업용 및 데스크탑 라벨 프린터.<br />
                        정확한 출력으로 귀사의 업무 효율을 극대화하세요.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto">
                        <button
                            onClick={() => setFilter('all')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'all' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('industrial')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'industrial' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            산업용 프린터
                        </button>
                        <button
                            onClick={() => setFilter('desktop')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'desktop' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            데스크탑 프린터
                        </button>
                        <button
                            onClick={() => setFilter('consumables')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'consumables' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            라벨 & 리본
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/barcode-printer/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
                            {/* Product Image Area */}
                            <div className="h-80 w-full bg-gray-50 flex items-center justify-center p-8 group-hover:bg-gray-100 transition-colors relative">
                                {/* Manufacturer Logo Overlay (Only for Label Printers) */}
                                {product.category === 'label' && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <img
                                            src={['ZT411', 'ZD421'].includes(product.id) ? "/images/zebra_logo.jpg" : "/images/tsc_logo.JPG"}
                                            alt={['ZT411', 'ZD421'].includes(product.id) ? "Zebra Logo" : "TSC Logo"}
                                            className="w-20 h-auto object-contain opacity-80"
                                        />
                                    </div>
                                )}
                                {product.image ? (
                                    <>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* View Detail Overlay */}
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex flex-col items-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M15 3h6v6" />
                                                    <path d="M10 14 21 3" />
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                </svg>
                                                <span className="font-semibold text-lg">상세보기</span>
                                                <span className="text-xs opacity-80 mt-1 md:hidden">(Touch)</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-gray-400 group-hover:text-orange-500 transition-colors duration-500 transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
                                        <path d="M8 4v-2h8v2" strokeWidth="1.5" />
                                        <path d="M8 20v2h8v-2" strokeWidth="1.5" />
                                        <line x1="7" y1="12" x2="17" y2="12" strokeDasharray="2 2" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm font-semibold text-gray-600 mb-3">
                                    {product.title}
                                </p>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                                    {product.description}
                                </p>

                                {/* Features Tags */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <p className="text-gray-500 text-[13px] font-medium truncate whitespace-nowrap">
                                        {product.features.join(' · ')}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BarcodePrinter;
