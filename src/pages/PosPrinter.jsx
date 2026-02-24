import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'ITS-22T',
        category: 'dispenser',
        name: 'ITS-22T',
        title: '하이엔드 지능형 순번 발권기',
        description: '21.5인치 대화면 터치스크린과 통합 관리 시스템이 결합된 하이엔드 발권기입니다. 직관적인 UI와 견고한 내구성으로 대형 병원 및 관공서에 최적화되었습니다.',
        features: ['21.5인치 FHD 터치', '초고속 써멀 프린터', '음성 안내 내장', '견고한 스틸 바디'],
        image: '/images/its-22t.jpg',
        detailImages: ['/images/its-22t.jpg']
    },
    {
        id: 'BGT-100P',
        category: 'dispenser',
        name: 'BGT-100P',
        title: '컴팩트 지능형 발권기',
        description: '강력한 성능의 임베디드 시스템이 탑재된 실속형 발권기입니다. 10.1인치 터치스크린을 통해 효율적인 공간 활용과 빠른 접수를 지원합니다.',
        features: ['10.1인치 터치', '초고속 인쇄', '멀티 인터페이스', '슬림 디자인'],
        image: '/images/hospital_bg.jpg', // Placeholder
        detailImages: ['/images/hospital_bg.jpg']
    },
    {
        id: 'SRP-350plusIII-Q',
        category: 'dispenser',
        name: 'SRP-350plusIII (순번형)',
        title: '컴팩트 순번 발권 기기',
        description: '신뢰성이 검증된 인쇄 엔진을 탑재한 보급형 발권 솔루션입니다. 좁은 공간에도 설치가 용이하며 유지보수가 간편합니다.',
        features: ['3인치 (80mm)', '300mm/s', '저소음 설계', '내구성 강화'],
        image: '/images/hospital_bg.jpg',
        detailImages: ['/images/hospital_bg.jpg']
    },
    {
        id: 'Q-DISPLAY-24',
        category: 'display',
        name: '창구표시기',
        title: '슬림형 창구 호출 표시기',
        description: '고해상도 디스플레이를 탑재하여 대기 번호를 선명하게 출력하는 창구 전용 표시기입니다. 세련된 슬림 베젤 디자인으로 어떠한 인테리어와도 조화를 이루며, 실시간 번호 호출과 안내 메시지 송출이 가능합니다.',
        features: ['24인치 선명한 화질', '슬림 베젤 디자인', '화면디자인 커스터 마이징', 'PC일체형'],
        image: '/images/DID4.png',
        detailImages: ['/images/DID4.png']
    },
    {
        id: 'FND-DISPLAY',
        category: 'display',
        name: 'FND 표시기',
        title: '고휘도 숫자형 대기 표시기',
        description: '시인성이 뛰어난 고휘도 FND 디스플레이를 채택하여 대기 번호를 직관적으로 안내합니다. 간단한 설치와 견고한 내구성으로 다양한 서비스 창구에서 폭넓게 사용됩니다.',
        features: ['고휘도 LED FND', '시인성 극대화', '단방향, 양방향 선택 가능', '견고한 내구성'],
        image: '/images/FND.png',
        detailImages: ['/images/FND.png']
    }
];

const PosPrinter = () => {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hospital_bg.jpg"
                        alt="Intelligent Queue Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-black/50 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">지능형 순번기기</h1>
                    <p className="text-xl text-white/90 max-w-3xl font-medium leading-relaxed">
                        접수, 수납, 창구의 통합 모니터링 및 스마트 안내 시스템.<br />
                        효율적인 대기 관리로 고객 만족도를 극대화화세요.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto">
                        <button
                            onClick={() => setFilter('all')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'all' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('dispenser')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'dispenser' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            지능형발권기
                        </button>
                        <button
                            onClick={() => setFilter('display')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'display' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            표시기
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/pos-printer/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors uppercase">
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

export default PosPrinter;
