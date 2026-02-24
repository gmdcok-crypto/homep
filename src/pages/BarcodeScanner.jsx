import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'LI3608-ER',
        category: 'scanner',
        name: 'LI3608-ER',
        title: '울트라 러기드 1D 바코드 스캐너',
        description: '가장 험난한 환경에서도 압도적인 성능을 발휘하는 산업용 스캐너입니다. 확장된 작업 범위와 탁월한 내구성을 제공합니다.',
        features: ['1D 리니어 임저', '초장거리 스캔', 'IP67 등급', '냉동창고 사용 가능'],
        image: '/images/hospital_bg.jpg', // Placeholder
        detailImages: ['/images/hospital_bg.jpg']
    },
    {
        id: 'DS2208',
        category: 'scanner',
        name: 'DS2208',
        title: '범용 2D 이미지 스캐너',
        description: '합리적인 가격과 뛰어난 성능을 결합한 유선 2D 스캐너입니다. 별도의 설정 없이 바로 사용 가능한 간편함을 제공합니다.',
        features: ['1D/2D 스캔', '포인트 앤 슛 방식', '손쉬운 배포', '직관적 조준'],
        image: '/images/hospital_bg.jpg',
        detailImages: ['/images/hospital_bg.jpg']
    },
    {
        id: 'DS8178',
        category: 'scanner',
        name: 'DS8178',
        title: '프리미엄 무선 2D 이미지 스캐너',
        description: '최상의 스캔 성능과 무선의 자유로움을 선사합니다. 고해상도 센서와 지능형 이미징 기술로 손상된 바코드도 완벽하게 읽어냅니다.',
        features: ['무선 Bluetooth', '고해상도 메가픽셀 센서', '스마트 배터리 관리', '손상 바코드 특화'],
        image: '/images/hospital_bg.jpg',
        detailImages: ['/images/hospital_bg.jpg']
    }
];

const BarcodeScanner = () => {
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
                        src="/images/digital_signage_bg.jpg" // Temporarily use existing
                        alt="Scanner Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-black/50 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">바코드 스캐너</h1>
                    <p className="text-xl text-white/90 max-w-3xl font-medium leading-relaxed">
                        신속하고 정확한 데이터 캡처를 위한 최상의 선택.<br />
                        어떠한 바코드도 놓치지 않는 정밀한 스캐닝 솔루션을 만나보세요.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto">
                        <button
                            onClick={() => setFilter('all')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'all' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('all')} // Scanner remains one category for now but logic unified
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'scanner' ? 'border-cyan-600 text-cyan-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            바코드 스캐너
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/barcode-scanner/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
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
                                        <span className="font-semibold text-lg uppercase">상세보기</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors uppercase">
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

export default BarcodeScanner;
