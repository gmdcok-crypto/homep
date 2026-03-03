import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const SmartMealZeroHardware = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_bluemeal_main.jpg"
                        alt="Zero Hardware 시스템"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-blue-900/50" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        to="/solutions/smartmeal"
                        className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-bold mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        스마트급식으로 돌아가기
                    </Link>
                    <span className="inline-block px-4 py-1 bg-white text-blue-900 text-xs font-black rounded-sm mb-6 uppercase tracking-tighter">
                        CORE INNOVATION
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Zero Hardware 시스템
                    </h1>
                    <p className="text-xl text-blue-50/90 max-w-2xl font-light leading-relaxed mb-10">
                        고가의 전용 리더기 대신 기존에 보유한 태블릿이나 스마트폰을 스캐너로 활용하여 초기 구축 비용을 제로에 가깝게 절감합니다.
                    </p>
                    <button
                        onClick={openModal}
                        className="px-8 py-4 bg-white text-blue-900 font-black rounded-full hover:bg-blue-50 transition-all shadow-xl"
                    >
                        무료 도입 상담 신청
                    </button>
                </div>
            </section>

            {/* 개요 */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.2em]">Overview</h2>
                    <h3 className="text-3xl md:text-4xl font-black mb-10 tracking-tight">
                        별도의 하드웨어 비용 없이 구축
                    </h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-zinc-100">
                            <img src="/images/hero_bluemeal_main.jpg" alt="Zero Hardware" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-6 text-zinc-600 leading-relaxed">
                            <p>
                                스마트밀 <strong className="text-zinc-900">Zero Hardware</strong> 방식은 별도의 RFID 리더기, 지문 인식기, 키오스크 등을 도입하지 않고, 이미 보유한 태블릿·스마트폰만으로 식수 인증과 관리가 가능하도록 설계되었습니다.
                            </p>
                            <p>
                                PWA 기반 QR 인증과 연동하여 직원·이용자 스마트폰 화면의 QR 코드를 식당 측 태블릿으로 스캔하는 방식으로 동작하며, 초기 투자 비용과 소모품·유지보수 부담을 크게 줄일 수 있습니다.
                            </p>
                            <p>
                                데이터베이스 서버는 안정적인 클라우드에 두며, 업무용 PC에는 식수조회, 사원정보관리, 실시간 대시보드 등이 포함된 PC용 앱만 설치하면 됩니다.
                            </p>
                            <p className="text-sm text-zinc-500 italic">
                                *단 추가인증장비(경광등, 식권프린터) 도입 요청 시 소정의 하드웨어 비용이 추가될 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 주요 기능 */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.2em]">주요 기능</h2>
                    <h3 className="text-3xl md:text-4xl font-black mb-12 tracking-tight">
                        Zero Hardware가 주는 장점
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
                        {[
                            { title: "초기 비용 최소화", desc: "전용 리더기·키오스크 구축 비용이 들지 않아 초기 투자를 거의 제로에 가깝게 낮출 수 있습니다." },
                            { title: "기존 기기 100% 활용", desc: "태블릿, 스마트폰만 있으면 바로 도입 가능해 기존 인프라를 그대로 활용합니다." },
                            { title: "유지보수·소모품 절감", desc: "전용 하드웨어 고장·교체·소모품 비용이 없어 운영 부담이 적습니다." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-zinc-900">{item.title}</h4>
                                <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-8 leading-tight">
                            Zero Hardware 시스템이 궁금하시다면
                        </h3>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button
                                onClick={openModal}
                                className="px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all text-lg"
                            >
                                무료 상담 및 견적 신청
                            </button>
                            <Link
                                to="/solutions/smartmeal"
                                className="px-10 py-5 bg-zinc-100 text-zinc-900 font-black rounded-full hover:bg-zinc-200 transition-all text-lg inline-block"
                            >
                                스마트급식 전체 보기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="스마트밀 - Zero Hardware 시스템"
            />
        </div>
    );
};

export default SmartMealZeroHardware;
