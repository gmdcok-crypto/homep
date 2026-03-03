import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const SmartMealCloudSettlement = () => {
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
                        src="/images/solutions/bluemeal-dashboard.png"
                        alt="실시간 클라우드 정산"
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
                        실시간 클라우드 정산
                    </h1>
                    <p className="text-xl text-blue-50/90 max-w-2xl font-light leading-relaxed mb-10">
                        FastAPI와 MariaDB 기반의 강력한 클라우드 백엔드를 통해 실시간 식수 통계와 부서별 정산 데이터를 즉시 확인하고 다운로드할 수 있습니다.
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
                        실시간으로 모이는 식수·정산 데이터
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,20rem)] gap-12 items-start max-w-6xl">
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { src: "/images/solutions/bluemeal-screen-1.png", alt: "실시간 대시보드", label: "실시간 대시보드" },
                                { src: "/images/solutions/bluemeal-screen-2.png", alt: "RAW 데이터 조회", label: "RAW 데이터 조회" },
                                { src: "/images/solutions/bluemeal-screen-3.png", alt: "식사시간,가격설정", label: "식사시간, 가격설정" },
                                { src: "/images/solutions/bluemeal-screen-4.png", alt: "부서별, 개인별 조회", label: "부서별, 개인별 조회" }
                            ].map((item, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-zinc-50">
                                    <div className="aspect-video bg-zinc-200">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <p className="p-4 text-center text-zinc-600 font-medium text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6 text-zinc-600 leading-relaxed">
                            <p>
                                스마트밀 <strong className="text-zinc-900">실시간 클라우드 정산</strong>은 FastAPI와 MariaDB 기반의 클라우드 백엔드로, 현장에서 발생하는 식사 인증 데이터가 즉시 반영되어 식수 통계와 부서별 정산을 한 화면에서 확인할 수 있도록 합니다.
                            </p>
                            <p>
                                사용자 화면, 현장 관리자, 본사 통합 대시보드가 하나의 클라우드 환경에서 동기화되며, 실시간 식수·일별·부서별 데이터 조회와 엑셀 등 다운로드 기능을 제공해 급식 운영과 비용 정산을 효율적으로 관리할 수 있습니다.
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
                        실시간 클라우드 정산이 주는 장점
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
                        {[
                            { title: "실시간 식수 통계", desc: "식사 인증이 발생하는 즉시 대시보드에 반영되어 현재 식수와 추이를 바로 확인할 수 있습니다." },
                            { title: "부서별 정산 데이터", desc: "부서·팀 단위로 식수와 비용을 집계해 정산·예산 관리에 바로 활용할 수 있습니다." },
                            { title: "즉시 조회·다운로드", desc: "기간별·조건별 통계 조회와 엑셀 등 다운로드를 통해 보고와 정산 업무를 간소화합니다." }
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
                            실시간 클라우드 정산이 궁금하시다면
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
                productName="스마트밀 - 실시간 클라우드 정산"
            />
        </div>
    );
};

export default SmartMealCloudSettlement;
