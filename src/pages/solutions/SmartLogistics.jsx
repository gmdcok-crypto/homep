import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const SmartLogistics = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const features = [
        {
            title: "UHF RFID 초고속 인식",
            desc: "수 백개의 자산을 리더기 한 번의 스핀으로 순식간에 파악합니다. 수동 바코드 스캔 대비 10배 이상의 효율을 보장합니다.",
            icon: "⚡"
        },
        {
            title: "맞춤형 ERP/WMS 연동",
            desc: "기존 시스템을 바꾸실 필요 없습니다. 고객사의 비즈니스 로직에 맞춘 전용 S/W로 부드러운 데이터 연동을 지원합니다.",
            icon: "⚙️"
        },
        {
            title: "특수 가혹환경 라벨",
            desc: "고온, 저온, 화학물질 노출 등 극한의 환경에서도 훼손되지 않는 특수 라벨 솔루션을 제공합니다.",
            icon: "🏷️"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                    <img
                        src="/images/solutions/logistics-hero.jpg"
                        alt="Logistics Solution"
                        className="w-full h-full object-cover animate-scale-slow"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                            BLUE SOLUTION 01
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                            비즈니스의 가치를 높이는 <br />
                            <span className="text-blue-500">라벨 & RFID 솔루션</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
                            바코드, QR, 그리고 하이엔드 RFID 기술까지. <br />
                            블루컴의 스마트 라벨 솔루션이 자산 관리의 패러다임을 바꿉니다.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={openModal}
                                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-xl"
                            >
                                도입 문의하기
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-blue-500 font-bold mb-4 tracking-widest uppercase">Core Technology</h2>
                        <h3 className="text-4xl md:text-5xl font-black mb-6">스마트한 자산 관리의 핵심</h3>
                        <p className="text-zinc-500 text-lg max-w-2xl mx-auto">블루컴은 단순 장비 납품을 넘어, 현장에 최적화된 프로세스 설계와 전용 소프트웨어 개발을 함께 제공합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((f, i) => (
                            <div key={i} className="group p-10 bg-zinc-900 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
                                <h4 className="text-2xl font-bold mb-5">{f.title}</h4>
                                <p className="text-zinc-400 leading-relaxed font-light">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Storytelling */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/solutions/rfid-tracking-korean.jpg"
                                alt="UHF RFID Scan with Korean worker"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">UHF RFID 기술로 <br />현장 생산성을 극대화 하십시오.</h2>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                기존의 바코드 스캔은 개별 하나하나를 직접 찍어야 하는 번거로움이 있었습니다. UHF RFID 솔루션은 비가시(Non-Line-of-Sight) 인식을 통해 상자 안의 물품까지 한 번에 인식하여 전수 조사의 속도를 획기적으로 개선합니다.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                                    <div className="text-blue-500 text-3xl font-black mb-2">99.9%</div>
                                    <p className="text-sm text-zinc-400 font-bold">인식 정확도</p>
                                </div>
                                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                                    <div className="text-blue-500 text-3xl font-black mb-2">10x</div>
                                    <p className="text-sm text-zinc-400 font-bold">입출고 속도 개선</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* S/W Development Section */}
            <section className="py-32 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-blue-500 font-bold mb-4 tracking-widest uppercase">Software Development</h2>
                            <h3 className="text-4xl font-extrabold mb-8 italic">WE BUILD YOUR LOGIC.</h3>
                            <p className="text-lg text-zinc-300 mb-10 leading-relaxed font-light">
                                장비만으로는 부족합니다. 블루컴은 고객사의 창고 배치, 물류 흐름, 기존 ERP와의 연동을 완벽히 이해하고 이를 실현할 수 있는 **전용 소프트웨어를 직접 개발**합니다.
                                <br /><br />
                                단순한 재고 관리를 넘어 AI 분석을 통한 적정 재고 유지, 최적 이동 경로 가이드 등 고도화된 물류 지능을 제공합니다.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                            <img
                                src="/images/solutions/sw-dev-korean.jpg"
                                alt="S/W Developer with modern UI"
                                className="relative z-10 rounded-3xl shadow-3xl border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Printing Experience */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-6">라벨은 비즈니스의 첫 인상입니다.</h2>
                        <p className="text-zinc-500 text-lg italic font-light">고해상도 프린팅과 수천 장의 가변 데이터 처리 능력.</p>
                    </div>
                    <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden mb-16 shadow-[0_0_80px_rgba(37,99,235,0.15)]">
                        <img
                            src="/images/solutions/label-printer-action.jpg"
                            alt="High-end label printing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {['고속 출력 지원', '선명한 600DPI', '리본 절약 기능', 'RFID 엔코더 내장'].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-6 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-all">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mb-4"></div>
                                <span className="font-bold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-blue-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-32" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-10">귀사의 물류를 업그레이드할 <br />준비가 되셨습니까?</h2>
                    <button
                        onClick={openModal}
                        className="px-12 py-6 bg-black text-white font-black rounded-full hover:bg-zinc-800 transition-all text-xl shadow-2xl inline-block"
                    >
                        무료 컨설팅 예약하기
                    </button>
                </div>
            </section>
            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="라벨 & RFID 솔루션"
            />
        </div>
    );
};

export default SmartLogistics;
