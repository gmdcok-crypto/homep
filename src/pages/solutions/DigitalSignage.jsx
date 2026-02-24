import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const DigitalSignage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
                    <img
                        src="/images/solutions/signage-hero.jpg"
                        alt="Digital Signage Solution"
                        className="w-full h-full object-cover scale-105 animate-pulse-slow"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1 bg-white text-black text-sm font-black rounded-sm mb-6 uppercase tracking-tighter">
                            BLUE SOLUTION 03
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            공간을 깨우는 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                디지털 광고
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
                            DID, 멀티비전, 그리고 지능형 콘텐츠 관리 시스템(CMS). <br />
                            단순한 홍보를 넘어 브랜드의 가치를 시각적으로 압도합니다.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button
                                onClick={openModal}
                                className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
                            >
                                상담 신청하기
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Wall-mount DID Section */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-blue-500 font-bold mb-4 tracking-widest uppercase">Wall-mount DID</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
                                공간과 하나되는 <br />
                                초슬림 벽걸이형 DID
                            </h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                인테리어의 품격을 높이는 초슬림 베젤과 밀착형 설계로 벽면과 하나되는 시각적 경험을 제공합니다.
                                가로와 세로 어떤 방향으로도 자유로운 설치가 가능하며, 강력한 내구성으로 상업 공간의 필수 홍보 매체로 자리매김합니다.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-white mb-2">Slim Bezel</div>
                                    <p className="text-zinc-500 text-sm">몰입감을 극대화하는 극초슬림 테두리 디자인</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-2">Versatile</div>
                                    <p className="text-zinc-500 text-sm">가로, 세로 자유로운 레이아웃 연출 지원</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/solutions/wall-mount-did.jpg"
                                    alt="Modern Wall-mount DID display"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stand DID Section (NEW - Reversed Layout) */}
            <section className="py-32 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/solutions/did-korean.jpg"
                                    alt="Woman looking at Stand-type DID in department store"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-purple-500 font-bold mb-4 tracking-widest uppercase">Stand-type DID</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
                                어느 곳에서도 빛나는 <br />
                                독보적 존재감, 스탠드 DID
                            </h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                                이동과 배치가 자유로운 스탠드형 DID는 쇼핑몰 입구, 전시장, 호텔 로비 등 고객과 처음 만나는 모든 공간에서
                                가장 효과적인 홍보 수단이 됩니다. 강화 유리 설계로 외부 충격으로부터 패널을 완벽하게 보호합니다.
                            </p>
                            <div className="space-y-6">
                                {[
                                    '터치스크린 옵션으로 양방향 고객 소통 지원',
                                    '하단 이동식 바퀴 탑재로 자유로운 위치 변경',
                                    '세련된 메탈 바디 디자인과 높은 내구성',
                                    '슬림형 베젤로 콘텐츠 몰입도 극대화'
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-6 h-px bg-purple-500"></div>
                                        <span className="text-zinc-300 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multi-Vision Section (Updated Layout) */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-purple-500 font-bold mb-4 tracking-widest uppercase">Multi-Vision System</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
                                베젤리스로 구현하는 <br />
                                압도적 스케일의 멀티비전
                            </h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                0.88mm의 초슬림 베젤 기술로 패널 간 경계를 최소화하여 하나의 거대한 캔버스를 구현합니다.
                                2x2, 3x3 등 공간에 맞춘 자유로운 확장성과 자동 색상 보정 시스템으로 완벽한 대형 화면을 선사합니다.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-white mb-2">Extreme Slim</div>
                                    <p className="text-zinc-500 text-sm">0.88mm 베젤로 끊김 없는 시각 경험</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-2">Calibration</div>
                                    <p className="text-zinc-500 text-sm">균일한 밝기와 색상을 유지하는 자동보정</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/solutions/multivision-detail.jpg"
                                    alt="Large scale multivision installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CMS Section */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-blue-500 font-bold mb-4 tracking-widest uppercase">Smart CMS</h2>
                            <h3 className="text-4xl font-extrabold mb-8">한 번의 클릭으로 전국 지점을 통합 관리</h3>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                웹 기반 CMS 솔루션을 통해 사무실 앉아서 전국의 사이니지 콘텐츠를 실시간으로 제어합니다.
                                스케줄링, 장애 모니터링, 이벤트 긴급 전송까지 모든 프로세스가 자동화됩니다.
                            </p>
                            <div className="space-y-4">
                                {['실시간 원격 콘텐츠 업로드', '장애 시 자동 알림 및 원격 복구', '다중 사용자 권한 관리 시스템', '재난 방송 시 긴급 콘텐츠 즉시 송출'].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-zinc-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-zinc-800 p-2 sm:p-4">
                            <img
                                src="/images/solutions/cms-interface.jpg"
                                alt="CMS Control system interface"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-8">당신의 공간은 시선을 끌고 있습니까?</h2>
                    <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto font-light">
                        최적의 하드웨어 선정부터 임팩트 있는 콘텐츠 기획까지, <br />
                        BLUE 디지털 사이니지가 토탈 솔루션을 제공합니다.
                    </p>
                    <button
                        onClick={openModal}
                        className="px-12 py-5 bg-white text-blue-900 font-black rounded-full hover:bg-gray-100 transition-all text-lg shadow-2xl inline-block"
                    >
                        사이니지 도입 컨설팅 받기
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px] animate-pulse-slow"></div>
                </div>
            </section>
            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="디지털 광고(사이니지) 솔루션"
            />
        </div>
    );
};

export default DigitalSignage;
