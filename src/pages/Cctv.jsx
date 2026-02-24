import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 'DS-2CD1021G0-I',
        category: 'camera',
        name: 'DS-2CD1021G0-I',
        title: '2MP 고정 불렛 네트워크 카메라',
        description: 'Hikvision의 200만 화소 고화질 영상과 IP67 방수/방진 기능을 갖춘 안정적인 실외용 보안 카메라입니다. H.265+ 압축 기술로 저장 효율을 극대화하여 경제적인 고화질 모니터링이 가능합니다.',
        features: ['2MP 해상도 (1920x1080)', '최대 30m IR 야간 감시', 'IP67 방수/방진 등급', 'H.265+ 압축 기술', 'PoE 전원 공급 지원', 'DWDR 및 3D DNR 지원'],
        image: '/images/DS-2CD1021G0-I.jpg', // 사용자 제공 이미지 경로
        detailImages: ['/images/DS-2CD1021G0-I.jpg']
    },
    {
        id: 'DS-2CD1043G2-I',
        category: 'camera',
        name: 'DS-2CD1043G2-I',
        title: '4MP 고정 불렛 네트워크 카메라',
        description: 'Hikvision의 AcuSense 기술이 적용된 400만 화소 고해상도 카메라입니다. 딥러닝 알고리즘을 통해 사람과 차량을 정밀하게 분류하여 허위 알람을 최소화하며, 120dB WDR 기술로 역광 환경에서도 선명한 영상을 제공합니다.',
        features: ['4MP 해상도 (2688x1520)', 'AcuSense (사람/차량 정밀 분류)', '최대 40m IR 야간 감시', '120dB WDR 역광 보정', 'IP67 방수/방진', 'PoE 전원 공급 지원'],
        image: '/images/DS-2CD1043G2-I.jpg',
        detailImages: ['/images/DS-2CD1043G2-I.jpg']
    },
    {
        id: 'DS-2CD1121-I',
        category: 'camera',
        name: 'DS-2CD1121-I',
        title: '2MP 고정 돔 네트워크 카메라',
        description: 'Hikvision의 200만 화소 고화질 영상과 IP67 방수/방진, IK10 충격 보호 등급을 갖춘 견고한 실내외 겸용 돔 카메라입니다. EXIR 2.0 기술로 야간에도 최대 30m의 선명한 시야를 확보합니다.',
        features: ['2MP 해상도 (1920x1080)', '최대 30m EXIR 2.0 야간 감시', 'IP67 방수 및 IK10 충격 방지', 'DWDR 역광 보정 지원', 'PoE 전원 공급 지원'],
        image: '/images/DS-2CD1121-I.jpg',
        detailImages: ['/images/DS-2CD1121-I.jpg']
    },
    {
        id: 'DS-2CD1143G0-I',
        category: 'camera',
        name: 'DS-2CD1143G0-I',
        title: '4MP 고정 돔 네트워크 카메라',
        description: 'Hikvision의 400만 화소 고해상도 영상을 제공하는 고정 돔 네트워크 카메라입니다. WDR 기술과 IP67 방수 및 IK10 충격 방지 등급을 갖추어 실외 및 거친 환경에서도 안정적인 모니터링이 가능합니다.',
        features: ['4MP 해상도 (2688x1520)', '최대 30m IR 야간 감시', '120dB WDR 역광 보정', 'IP67 방수 및 IK10 충격 방지', 'PoE 전원 공급 지원', 'H.265+ 압축 기술'],
        image: '/images/DS-2CD1143G0-I.jpg',
        detailImages: ['/images/DS-2CD1143G0-I.jpg']
    },
    {
        id: 'DS-7604NI-K1',
        category: 'nvr',
        name: 'DS-7604NI-K1',
        title: '4채널 임베디드 네트워크 비디오 녹화기',
        description: '최대 4채널의 4K 고해상도 영상을 지원하는 컴팩트 NVR입니다. 스마트 검색 및 재생 기능으로 효율적인 영상 관리가 가능하며, 소규모 매장이나 오피스에 최적화된 경제적인 솔루션입니다.',
        features: ['최대 4채널 IP 입력', '4K UHD 디스플레이 지원', 'SATA 인터페이스 (최대 8TB)', 'H.265+ 압축 기술', '양방향 오디오 지원'],
        image: '/images/DS-7604NI-K1.png',
        detailImages: ['/images/DS-7604NI-K1.png']
    },
    {
        id: 'DS-7608NI-K2',
        category: 'nvr',
        name: 'DS-7608NI-K2',
        title: '8채널 2-SATA 네트워크 비디오 녹화기',
        description: '최대 8채널의 고화질 영상을 안정적으로 기록하는 표준형 NVR입니다. 2개의 SATA 하드디스크 베이를 탑재하여 넉넉한 저장 공간을 확보할 수 있으며, 지능형 분석 시스템과 연동되어 정밀한 보안 감시를 지원합니다.',
        features: ['최대 8채널 IP 입력', '4K 출력 및 디코딩 성능', '2-SATA 베이 지원', '강력한 네트워크 대역폭', '신뢰성 높은 연중무휴 구동'],
        image: '/images/DS-7608NI-K2.png',
        detailImages: ['/images/DS-7608NI-K2.png']
    },
    {
        id: 'DS-7616NI-K2',
        category: 'nvr',
        name: 'DS-7616NI-K2',
        title: '16채널 프로페셔널 네트워크 비디오 녹화기',
        description: '최대 16채널의 광범위한 카메라 연결을 지원하는 고성능 NVR입니다. 듀얼 OS 설계로 시스템 안정성을 극대화하였으며, 다양한 지능형 하이엔드 카메라와 완벽하게 호환되어 체계적인 대규모 통합 보안 관리를 가능하게 합니다.',
        features: ['최대 16채널 동시 연결', '4K 초고화질 영상 지원', '2-SATA 인터페이스', '듀얼 OS (신뢰성 보장)', '차선 이탈/얼굴 인식 연동 지원'],
        image: '/images/DS-7616NI-K2.png',
        detailImages: ['/images/DS-7616NI-K2.png']
    }
];

const Cctv = () => {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    const categories = [
        { id: 'all', name: '전체' },
        { id: 'camera', name: '카메라' },
        { id: 'nvr', name: 'NVR(녹화기)' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/cctv-banner.jpg"
                        alt="CCTV Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>
                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center px-4 py-2 bg-black/40 border border-white/20 text-white rounded-full hover:bg-black/60 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">메인으로 돌아가기</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">CCTV 솔루션</h1>
                    <p className="text-xl text-white/90 max-w-3xl font-medium leading-relaxed">
                        최첨단 지능형 보안 시스템으로 24시간 안전하게.<br />
                        고해상도 영상과 스마트 감지 기술로 당신의 자산을 보호하세요.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto">
                        <button
                            onClick={() => setFilter('all')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'all' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={() => setFilter('camera')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'camera' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            CAMERA
                        </button>
                        <button
                            onClick={() => setFilter('nvr')}
                            className={`py-4 text-lg font-bold border-b-4 transition-colors whitespace-nowrap ${filter === 'nvr' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            NVR (녹화기)
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <Link to={`/products/cctv/${product.id}`} key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white">
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
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>
                                </div>
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

export default Cctv;
