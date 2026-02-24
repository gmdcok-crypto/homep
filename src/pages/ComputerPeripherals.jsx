import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'INDUSTRIAL-PC',
        category: 'pc',
        name: '컴퓨터&주변기기',
        title: '신뢰할 수 있는 비즈니스 컴퓨팅 솔루션',
        description: '사무용 PC부터 고성능 노트북, 기업용 서버까지 비즈니스 환경에 최적화된 토탈 컴퓨팅 솔루션을 제공합니다.',
        features: ['컴퓨터', '노트북', '서버', 'CPU: Intel Core i5/i7 (최신)', '코어: 10코어 이상', '메모리: 16GB DDR5', '최대확장: 64GB'],
        image: '/images/computer_peripherals_standard.jpg',
        detailImages: ['/images/computer_peripherals_standard.jpg']
    },
    {
        id: 'NAS-DS225-PLUS',
        category: 'nas',
        name: 'DS225+',
        title: '데이터 효율성과 컴팩트함의 조화',
        description: '강력한 파일 관리, 사진 공유, 데이터 보호 기능을 갖춘 2베이 컴팩트 NAS 솔루션으로 소규모 사무실 및 개인 사용자에게 최적입니다.',
        features: ['2베이 시스템', '데이터 실시간 백업', 'CPU: Intel Celeron J4125', '코어: 4코어', '메모리: 2GB DDR4', '최대확장: 6GB'],
        image: '/images/nas_ds225p.jpg',
        detailImages: ['/images/nas_ds225p.jpg', '/images/nas_ds225p_2.jpg']
    },
    {
        id: 'NAS-DS725-PLUS',
        category: 'nas',
        name: 'DS725+',
        title: '비즈니스를 위한 고성능 2베이 확장형 NAS',
        description: '강력한 성능과 유연한 확장성을 제공하는 비즈니스급 NAS 솔루션입니다. 데이터 관리 효율성을 극대화하고 팀 협업을 가속화합니다.',
        features: ['고성능 쿼드코어', '확장 유닛 지원', 'CPU: AMD Ryzen R1600', '코어: 2코어 / 4스레드', '메모리: 4GB DDR4 ECC', '최대확장: 32GB'],
        image: '/images/nas_ds725p.jpg',
        detailImages: ['/images/nas_ds725p.jpg', '/images/nas_ds725p_2.jpg']
    },
    {
        id: 'NAS-DS425-PLUS',
        category: 'nas',
        name: 'DS425+',
        title: '강력한 4베이 비즈니스 스토리지 솔루션',
        description: '더 넓은 저장 공간과 성능을 요구하는 중소기업 및 크리에이터를 위한 4베이 NAS입니다. 효율적인 데이터 중앙 집중화와 공유를 지원합니다.',
        features: ['4베이 대용량 시스템', '확장 가능한 스토리지', 'CPU: Intel Celeron J4125', '코어: 4코어', '메모리: 2GB DDR4', '최대확장: 6GB'],
        image: '/images/nas_ds425p.jpg',
        detailImages: ['/images/nas_ds425p.jpg', '/images/nas_ds425p_2.jpg']
    },
    {
        id: 'NAS-DS923-PLUS',
        category: 'nas',
        name: 'DS925+',
        title: '강력하고 유연한 비즈니스 데이터 관리 센터',
        description: '강력한 컴퓨팅 성능과 빠른 데이터 전송 속도를 제공하는 프리미엄 4베이 NAS입니다. 가상화, 백업, 비디오 편집 등 고사양 작업에 최적화되어 있습니다.',
        features: ['최대 9베이 확장 지원', 'NVMe SSD 캐시 슬롯', 'CPU: AMD Ryzen V1500B', '코어: 4코어', '메모리: 4GB DDR4 ECC', '최대확장: 32GB'],
        image: '/images/nas_ds925p.jpg',
        detailImages: ['/images/nas_ds925p.jpg', '/images/nas_ds925p_2.jpg']
    },
    {
        id: 'NETWORK-SWITCH',
        category: 'network',
        name: 'Network 장비',
        title: '신속하고 안정적인 기업용 통신 솔루션',
        description: '강력한 성능의 스위칭 허브와 와이파이 6를 지원하는 공유기, 그리고 넓은 범위를 지원하는 AP까지 고품질 네트워크 환경을 구축합니다.',
        features: ['스위치 허브', '공유기', '엑세스포인트(AP)', 'POE허브'],
        image: '/images/network_equipment_standard.jpg',
        detailImages: ['/images/network_equipment_standard.jpg']
    }
];

const ComputerPeripherals = () => {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative h-[400px] flex items-center shadow-inner">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/computer_peripherals_banner.png"
                        alt="Computer & Peripherals Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-indigo-600/20 backdrop-blur-md border border-indigo-400/30 text-white rounded-full hover:bg-indigo-600/40 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-semibold">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">컴퓨터 & 주변기기</h1>
                    <p className="text-xl text-white/90 max-w-2xl font-light leading-relaxed">
                        블루컴의 검증된 산업용 컴퓨팅 솔루션.<br />
                        안정적인 하드웨어 인프라로 비즈니스의 연속성을 보장합니다.
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
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('pc')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'pc'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            컴퓨터&주변기기
                        </button>
                        <button
                            onClick={() => setFilter('nas')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'nas'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            Synology NAS
                        </button>
                        <button
                            onClick={() => setFilter('network')}
                            className={`py-4 text-lg font-medium border-b-4 transition-colors whitespace-nowrap ${filter === 'network'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            네트웍장비
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/computer-peripherals/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
                            <div className="h-80 w-full bg-white flex items-center justify-center p-0 transition-colors relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${['INDUSTRIAL-PC', 'NETWORK-SWITCH'].includes(product.id) ? 'object-cover p-0' : 'object-contain p-6'}`}
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
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

export default ComputerPeripherals;
