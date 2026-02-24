import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const ItInfrastructure = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const services = [
        {
            title: "네트워크 인프라 구축",
            desc: "기업 환경에 최적화된 유/무선 네트워크 환경을 설계하고 구축합니다. 보안성과 속도를 동시에 보장합니다.",
            icon: "🌐"
        },
        {
            title: "PC 및 OA 유지보수",
            desc: "사무 환경의 핵심인 PC, 복합기, 제반 장비들의 정기 점검과 장애 시 즉각적인 대응을 지원합니다.",
            icon: "💻"
        },
        {
            title: "서버 및 스토리지 관리",
            desc: "데이터의 안전한 보관과 효율적인 공유를 위한 최적의 서버 시스템 및 백업 솔루션을 제안합니다.",
            icon: "🗄️"
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                    <img
                        src="/images/solutions/it-infra-hero.jpg"
                        alt="IT Infrastructure"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1 bg-zinc-800 text-blue-400 text-xs font-bold rounded-sm mb-6 uppercase tracking-widest border border-blue-900/50">
                            BLUE INFRA SOLUTION
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            비즈니스의 <br />
                            <span className="text-white">뿌리</span>를 견고하게.
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
                            단단한 IT 인프라는 모든 혁신의 출발점입니다. <br />
                            블루컴의 전문 엔지니어링이 귀사의 업무 연속성을 완벽하게 서포트합니다.
                        </p>
                        <button
                            onClick={openModal}
                            className="px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all inline-block shadow-2xl"
                        >
                            IT 진단 서비스 신청하기
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 1: PC Support (Woman image) */}
            <section className="py-32 bg-zinc-950 text-white overflow-hidden border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-blue-500 font-bold uppercase tracking-widest mb-4 block">PC & OA Maintenance</span>
                            <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight tracking-tighter">체계적인 하드웨어 <br />관리 및 유지보수</h2>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                                사무 환경의 핵심인 PC와 OA 기기들이 최상의 성능을 유지하도록 정기적인 점검과 신속한 장애 대응 서비스를 제공합니다.
                                전문 엔지니어가 직접 방문하여 하드웨어부터 소프트웨어 트러블슈팅까지 원스톱으로 해결합니다.
                            </p>
                            <ul className="space-y-4 font-medium text-zinc-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center text-xs">✓</div>
                                    <span>정기 방문 예방 점검 및 긴급 장애 복구</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center text-xs">✓</div>
                                    <span>전문적인 하드웨어 업그레이드 및 최적화</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[600px] border border-white/10">
                                <img
                                    src="/images/solutions/pc-maintenance-korean.jpg"
                                    alt="Expert PC Maintenance"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Network Support (Man image) */}
            <section className="py-32 bg-zinc-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[600px] border border-white/10">
                                <img
                                    src="/images/solutions/network-rack-korean.jpg"
                                    alt="Expert Network Maintenance"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="text-blue-500 font-bold uppercase tracking-widest mb-4 block">Network Infrastructure</span>
                            <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight tracking-tighter">안정적인 기업 전용 <br />네트워크 시스템 구축</h2>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                                끊김 없는 비즈니스를 위한 최적의 유/무선 네트워크 환경을 설계합니다.
                                고성능 서버 랙 관리부터 보안 스위칭, 강력한 방화벽 설정까지 기업 규모에 맞는 최상의 안정성을 제공합니다.
                            </p>
                            <ul className="space-y-4 font-medium text-zinc-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center text-xs">✓</div>
                                    <span>24/7 실시간 네트워크 트래픽 및 보안 모니터링</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center text-xs">✓</div>
                                    <span>보안성과 속도를 모두 잡은 전사적 인프라 설계</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Grid Section (IT 아웃소싱의 기준) */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-blue-500 font-bold mb-4 tracking-widest uppercase italic">One-Stop Support</h2>
                        <h3 className="text-5xl font-black mb-8 tracking-tighter text-white">IT 아웃소싱의 기준</h3>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="group p-12 bg-zinc-900/50 border border-white/5 rounded-3xl hover:bg-zinc-900 transition-all duration-500 hover:border-blue-500/30">
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                                <h4 className="text-2xl font-bold mb-6 text-white">{service.title}</h4>
                                <p className="text-zinc-400 leading-relaxed font-light">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-zinc-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 text-white tracking-tight">네트워크의 시작부터 <br />체계적인 PC 관리까지.</h2>
                    <button
                        onClick={openModal}
                        className="px-12 py-6 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 hover:scale-105 transition-all text-xl inline-block shadow-2xl"
                    >
                        아웃소싱 제안서 요청
                    </button>
                </div>
            </section>

            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="IT 인프라 & 유지보수 솔루션"
            />
        </div>
    );
};

export default ItInfrastructure;
