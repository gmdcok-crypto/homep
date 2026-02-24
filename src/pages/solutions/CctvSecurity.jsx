import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const CctvSecurity = () => {
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
                    <img
                        src="/images/solutions/cctv-hero.jpg"
                        alt="AI Security Solution"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-sm mb-6 uppercase tracking-widest">
                            BLUE SECURITY SOLUTION
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            사고를 감지하는 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                지능형 보안
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
                            단순 녹화를 넘어선 AI 기반 실시간 분석 솔루션. <br />
                            비명이 들리거나, 쓰러짐이 감지되는 즉시 BLUE가 대응합니다.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button
                                onClick={openModal}
                                className="px-10 py-5 bg-red-600 text-white font-black rounded-full hover:bg-red-700 transition-all shadow-2xl"
                            >
                                무료 보안 진단 신청
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Features */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-red-600/10 rounded-3xl blur-2xl group-hover:bg-red-600/20 transition duration-1000"></div>
                            <img
                                src="/images/solutions/cctv-ai-korean.jpg"
                                alt="AI CCTV Analysis"
                                className="relative z-10 rounded-2xl border border-white/5 shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-red-500 font-bold mb-4 tracking-widest uppercase">Advanced Intelligence</h2>
                            <h3 className="text-4xl font-extrabold mb-8 tracking-tight">AI가 24시간 당신의 곁을 지킵니다.</h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                                사람과 차량을 정확히 구분하는 것은 기본입니다. 배회, 침입, 쓰러짐 등 특정 패턴을 학습한 AI가
                                관제 요원의 피로도를 혁신적으로 줄이고 즉각적인 초동 대처를 가능하게 합니다.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-bold mb-3">객체 추적 분석</h4>
                                    <p className="text-zinc-500 text-sm font-light">이동 경로 및 체류 시간 분석을 통한 이상 징후 포착</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3">개인정보 비식별화</h4>
                                    <p className="text-zinc-500 text-sm font-light">얼굴 자동 마스킹 및 암호화로 사생활 보호 규제 완벽 대응</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Night Vision Section */}
            <section className="py-32 bg-black overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-orange-500 font-bold mb-4 uppercase tracking-widest">Night Color Vision</h2>
                            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">어둠 속에서도 <br />색상을 잃지 않습니다.</h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                                칠흑 같은 어둠 속에서도 흑백이 아닌 선명한 컬러 영상을 구현합니다.
                                가장 취약한 야간 시간대의 범죄 수사 및 상황 파악 능력을 비약적으로 향상시킵니다.
                            </p>
                        </div>
                        <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.15)]">
                            <img src="/images/solutions/night-vision-korean.jpg" alt="Night Vision Capability" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12">빈틈없는 보안, BLUE가 약속합니다.</h2>
                    <button
                        onClick={openModal}
                        className="px-12 py-6 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all text-xl inline-block"
                    >
                        보안 솔루션 상담하기
                    </button>
                </div>
            </section>
            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="지능형 영상 보안 (CCTV) 솔루션"
            />
        </div>
    );
};

export default CctvSecurity;
