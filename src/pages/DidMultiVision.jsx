import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'DID-STAND',
        category: 'did',
        name: '스탠드형 DID',
        title: '신뢰성 있는 홍보 및 정보 전달 솔루션',
        description: '세련된 디자인과 고해상도 디스플레이를 갖춘 스탠드형 DID로 매장 홍보부터 안내 시스템까지 다양한 환경에서 활용 가능합니다.',
        features: ['4K UHD', '슬림 디자인', 'USB플레이지원', '고휘도 패널'],
        image: '/images/did_stand_new.jpg',
        detailImages: ['/images/did_stand_new.jpg']
    },
    {
        id: 'MULTI-VISION',
        category: 'multi',
        name: '초슬림 베젤 멀티비전',
        title: '대형 화면의 압도적인 몰입감',
        description: '세계 최고 수준의 초슬림 베젤을 적용하여 경계 없는 대형 화면을 구현합니다. 상황실, 로비, 대형 매장에 최적화된 시각적 경험을 제공합니다.',
        features: ['0.88mm 베젤', '정밀 캘리브레이션', '데이지 체인 지원', '내구성 설계'],
        image: '/images/multivision_new.jpg',
        detailImages: ['/images/multivision_new.jpg']
    },
    {
        id: 'DID-MONITOR',
        category: 'monitor',
        name: 'DID 모니터',
        title: '선명한 화질의 고성능 산업용 DID 모니터',
        description: '다양한 실내 환경에서 광고, 정보 전달, 상황 모니터링에 최적화된 고해상도 DID 모니터입니다. 고휘도 패널과 넓은 시야각으로 명확한 메시지 전달이 가능합니다.',
        features: ['4K UHD 해상도', '연중무휴 24/7 구동', '슬림 베젤 디자인', '광시야각 패널', '내장 스피커'],
        image: '/images/did_monitor.jpg',
        detailImages: ['/images/did_monitor.jpg', '/images/did_monitor_2.jpg']
    }
];

const DidMultiVision = () => {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/digital_signage_bg.jpg"
                        alt="DID & MultiVision Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">DID & 멀티비젼</h1>
                    <p className="text-xl text-white/90 max-w-3xl font-medium drop-shadow-md leading-relaxed">
                        공간의 가치를 높이는 스마트 디스플레이 솔루션.<br />
                        혁신적인 시각 시스템으로 귀하의 메시지를 완벽하게 전달하세요.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="border-b border-gray-200 sticky top-0 bg-white z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto">
                        <button
                            onClick={() => setFilter('all')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'all'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('did')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'did'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            스탠드 DID
                        </button>
                        <button
                            onClick={() => setFilter('multi')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'multi'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            멀티비젼
                        </button>
                        <button
                            onClick={() => setFilter('monitor')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'monitor'
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            DID 모니터
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/did-multivision/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
                            <div className="h-80 w-full bg-gray-50 flex items-center justify-center p-0 group-hover:bg-gray-100 transition-colors relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${product.id === 'DID-MONITOR' ? 'object-cover scale-90' : 'object-contain'}`}
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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

export default DidMultiVision;
