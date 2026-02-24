import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'ZT411-RFID',
        category: 'printer',
        name: 'ZT411 RFID',
        title: '프리미엄 산업용 RFID 프린터',
        description: '강력한 UHF RFID 인쇄 및 인코딩 기능을 갖춘 ZT411은 금속 자산 태깅을 포함한 다양한 애플리케이션에 적합합니다.',
        features: ['4인치 (104mm)', '14 ips', '600 dpi', 'RFID 인코딩'],
        image: '/images/ZT411.JPG', // Reusing ZT411 image for now
        bannerImage: '/images/zt411-rfid-banner.jpg',
        detailImages: [
            '/images/ZT411.JPG',
            '/images/ZT411_detail.JPG'
        ]
    },
    {
        id: 'ZC-CARD-PRINTER',
        category: 'printer',
        name: 'ZC300 카드프린터',
        title: '차세대 스마트 기술이 적용된 프리미엄 카드 인쇄 솔루션',
        description: 'ZC300 카드프린터는 복잡한 카드 인쇄 과정을 획기적으로 단순화한 모델입니다. 슬림한 디자인에 강력한 기능을 담아 신분증, 출입증, 멤버십 카드 등 다양한 카드를 최고의 품질로 빠르게 발행할 수 있습니다.',
        features: [
            '300 dpi (11.8 dots/mm) 해상도',
            '단면/양면 컬러 및 흑백 인쇄 가능',
            '초당 200매(컬러) / 900매(흑백) 고속 인쇄',
            '자동 보정 리본 카트리지 시스템',
            '100매 용량 자동 조절식 입력 호퍼',
            'USB 2.0 및 이더넷 연결 기본 지원',
            '스마트 카드 및 RFID 인코딩 옵션'
        ],
        image: '/images/zc_card_printer.jpg'
    },
    {
        id: 'AT388',
        category: 'reader',
        name: 'AT388',
        title: '산업용 고성능 UHF RFID 핸드헬드 리더기',
        description: 'Impinj R2000 모듈을 탑재하여 압도적인 인식률을 자랑하며, IP65 등급의 내구성을 갖춘 안드로이드/iOS 호환 리더기입니다.',
        features: [
            'UHF RFID EPC Gen2, ISO/IEC 18000-6C,6B,AEI (Optional)',
            '1D & 2D 바코드 스캐닝',
            '블루투스 V2.1 + EDR / BLE V4.1',
            '윈도우즈, 안드로이드, iOS 기기 연결 지원',
            '인체 공학적 디자인',
            '접이식 안테나',
            '낙하 1.5m (5ft)',
            '방진 / 방수 IP65'
        ],
        image: '/images/AT388.jpg'
    },
    {
        id: 'AT909',
        category: 'reader',
        name: 'AT909',
        title: 'ATID 고성능 핸드헬드 RFID 리더기',
        description: '강력한 RFID 인식 성능과 바코드 스캐닝을 지원하는 산업용 스마트 모바일 리더기입니다.',
        features: [
            '안드로이드 13',
            'Octo-Core 2.0 GHz',
            '5.5 인치 HD 디스플레이, 듀얼 카메라 (5M/13M)',
            '메모리 4GB 램 / 64GB 롬',
            '4.5 dBi High Gain UHF 안테나',
            'UHF RFID EPC GEN2, ISO/IEC 18000-6C',
            'impinj E710 UHF RFID 모듈',
            '1D / 2D 바코드 스캐너',
            '4G LTE, WLAN, BLE V5.0, GPS',
            '7,200 mAh 대용량 배터리',
            '낙하 1.5 m',
            '방진 / 방수 IP65'
        ],
        image: '/images/AT909.JPG'
    },
    {
        id: 'PROXIMITY-READER',
        category: 'reader',
        name: '근접인식 리더기',
        title: '다양한 주파수 지원 고성능 리더기',
        description: '125KHz, 13.56MHz, 900MHz 등 다양한 주파수 대역의 태그를 인식하고 데이터를 읽고 쓸 수 있는 고성능 근접인식 리더기 솔루션입니다.',
        features: ['125KHz (읽기/쓰기)', '13.56MHz (읽기/쓰기)', '900MHz (읽기/쓰기)', '컴팩트 디자인', '간편한 설치'],
        image: '/images/proximity_reader.jpg'
    },
    {
        id: 'RF-ID-CARD',
        category: 'tag',
        name: 'RF 사원증',
        title: '커스텀 디자인 고성능 RF ID 카드',
        description: '기업 및 기관의 보안과 출입 통제를 위한 고성능 RF 사원증입니다. 고해상도 인쇄와 내구성이 뛰어난 재질로 제작되어 장기간 사용이 가능합니다.',
        features: ['125KHz', '13.56MHz', '커스텀 인쇄', '고내구성 PVC'],
        image: '/images/rf_id_card.png'
    },
    {
        id: 'KEYCHAIN-TAG',
        category: 'tag',
        name: '열쇠고리태그',
        title: '에폭시 가공이 가능한 고성능 RFID 열쇠고리태그',
        description: '다양한 색상과 디자인으로 제작 가능한 RFID 열쇠고리태그입니다. 내구성이 뛰어난 에폭시 코팅 옵션을 지원하며, 출입 통제 및 자산 관리 등 다양한 용도로 활용됩니다.',
        features: ['125KHz', '13.56MHz', '에폭시 가능', '다양한 디자인'],
        image: '/images/keychain_tag.png'
    },
    {
        id: 'RFID-LABEL-TAG',
        category: 'tag',
        name: 'RFID 라벨태그',
        title: '고성능 지능형 RFID 라벨 및 인레이 솔루션',
        description: '다양한 산업 현장에서 자산 관리와 물류 추적을 위해 최적화된 RFID 라벨태그입니다. 종이, 필름, 금속 등 다양한 부착 환경에 맞는 최적의 인레이 디자인을 제공합니다.',
        features: ['13.56MHz', '900MHz (UHF)', '강력한 접착력', '다양한 사이즈'],
        image: '/images/rfid_label_tag.png'
    }
];

const RfidTag = () => {
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
                        src="/images/rfid_banner_warehouse.png"
                        alt="RFID Page Background"
                        className="w-full h-full object-cover object-[15%_center] md:object-center"
                    />
                    <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for better text contrast */}
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-12 pb-12">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-black/50 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">RFID & TAG</h1>
                    <p className="text-xl text-white max-w-3xl font-medium drop-shadow-md">
                        스마트 팩토리와 사물인터넷(IoT)의 핵심.<br />
                        혁신적인 RFID 솔루션으로 자산 관리의 효율성을 높이세요.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto">
                        <button
                            onClick={() => setFilter('all')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'all'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('printer')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'printer'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            RFID 프린터
                        </button>
                        <button
                            onClick={() => setFilter('reader')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'reader'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            RFID 리더기
                        </button>
                        <button
                            onClick={() => setFilter('tag')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'tag'
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            RFID 태그 & 카드
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/rfid-tag/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
                            {/* Product Image Area */}
                            <div className={`h-80 w-full flex items-center justify-center p-4 group-hover:bg-gray-50 transition-colors relative ${['RF-ID-CARD', 'KEYCHAIN-TAG', 'RFID-LABEL-TAG', 'ZC-CARD-PRINTER', 'PROXIMITY-READER'].includes(product.id) ? 'bg-white' : 'bg-gray-50'}`}>
                                {/* Manufacturer Logo Overlay - Example logic */}
                                {product.category === 'printer' && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <img
                                            src="/images/zebra_logo.jpg"
                                            alt="Zebra Logo"
                                            className="w-20 h-auto object-contain opacity-80"
                                        />
                                    </div>
                                )}
                                {product.image ? (
                                    <>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`w-full h-full object-contain transition-transform duration-500 ${['RF-ID-CARD', 'KEYCHAIN-TAG', 'RFID-LABEL-TAG', 'ZC-CARD-PRINTER', 'PROXIMITY-READER'].includes(product.id) ? 'scale-125 group-hover:scale-[1.35]' : 'mix-blend-multiply group-hover:scale-110'}`}
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
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-gray-400 group-hover:text-indigo-500 transition-colors duration-500 transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
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

export default RfidTag;
