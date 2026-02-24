import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'ZC300',
        category: 'card',
        name: 'ZC300',
        title: '차세대 카드 프린터',
        description: '가장 얇은 디자인과 혁신적인 카드 공급 방식을 제공합니다. 복잡한 설정 없이 누구나 고품질 카드를 즉시 발행할 수 있습니다.',
        features: ['단면/양면 인쇄', '컬러/흑백', '초슬림 디자인', '플러그 앤 플레이'],
        image: '/images/hospital_bg.jpg', // Placeholder
        detailImages: ['/images/hospital_bg.jpg']
    },
    {
        id: 'ZXP-Series-7',
        category: 'card',
        name: 'ZXP Series 7',
        title: '대량 발행용 고성능 카드 프린터',
        description: '대규모 조직의 요구를 충족시키는 고속 고화질 카드 프린터입니다. 탁월한 보안 기능과 강력한 내구성을 자랑합니다.',
        features: ['고속 인쇄', '사진 수준의 화질', '대용량 호퍼', '다양한 인코딩 옵션'],
        image: '/images/hospital_bg.jpg',
        detailImages: ['/images/hospital_bg.jpg']
    },
    {
        id: 'ZC10L',
        category: 'card',
        name: 'ZC10L',
        title: '대형 이벤트 카드 프린터',
        description: '풀 컬러, 엣지 투 엣지 대형 카드를 한 번에 인쇄합니다. 콘서트, 스포츠 경기 등 대형 이벤트용 출입증 발행에 최적인 솔루션입니다.',
        features: ['대형 카드 전용', '현장 즉시 발행', '고해상도 컬러', '내구성 있는 재질'],
        image: '/images/hospital_bg.jpg',
        detailImages: ['/images/hospital_bg.jpg']
    }
];

const CardPrinter = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/digital_signage_bg.jpg" // Temporarily use existing
                        alt="Card Printer Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-violet-600/20 backdrop-blur-md border border-violet-400/30 text-white rounded-full hover:bg-violet-600/40 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">카드 프린터</h1>
                    <p className="text-xl text-white/90 max-w-3xl font-medium leading-relaxed">
                        신분증부터 멤버십 카드까지, 완벽한 카드 발행 시스템.<br />
                        블루컴의 솔루션으로 보안과 편의성을 동시에 확보하세요.
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link to={`/products/card-printer/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
                            <div className="h-80 w-full bg-gray-50 flex items-center justify-center p-8 group-hover:bg-gray-100 transition-colors relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex flex-col items-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 3h6v6" />
                                            <path d="M10 14 21 3" />
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        <span className="font-semibold text-lg">상세보기</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors uppercase">
                                    {product.name}
                                </h3>
                                <p className="text-sm font-semibold text-gray-600 mb-3">
                                    {product.title}
                                </p>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                                    {product.description}
                                </p>

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

export default CardPrinter;
