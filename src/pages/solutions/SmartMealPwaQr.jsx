import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const SmartMealPwaQr = () => {
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
                        src="/images/solutions/bluemeal-qr-scan.png"
                        alt="PWA QR 인증"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        to="/solutions/smartmeal"
                        className="inline-flex items-center gap-2 text-white text-sm font-bold mb-8 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        스마트급식으로 돌아가기
                    </Link>
                    <span className="inline-block px-4 py-1 bg-white text-blue-900 text-xs font-black rounded-sm mb-6 uppercase tracking-tighter">
                        CORE INNOVATION
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        PWA 기반 QR 인증
                    </h1>
                    <p className="text-xl text-white max-w-2xl font-light leading-relaxed mb-10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                        별도의 앱 설치 없이 모바일 웹 브라우저에서 즉시 QR 코드를 생성하여 식사 인증을 완료합니다. 사용자 접근성이 극대화됩니다.
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
                        앱 없이 웹만으로 완결되는 식사 인증
                    </h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-zinc-100">
                            <img src="/images/solutions/bluemeal-qr.png" alt="PWA QR" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-6 text-zinc-600 leading-relaxed">
                            <p>
                                스마트밀은 <strong className="text-zinc-900">PWA(Progressive Web App)</strong> 기술을 적용하여, 사용자가 앱 스토어에서 별도 앱을 설치하지 않아도 모바일 브라우저에서 바로 QR 코드를 생성하고 식사 인증을 할 수 있도록 합니다.
                            </p>
                            <p>
                                식당의 QR 코드를 스캔하거나, 사용자 전용 QR 코드를 화면에 띄워 인증하는 방식으로 동작하며, 기존 NFC·RFID·지문 인식 등 전용 하드웨어 없이 스마트폰만으로 시스템을 구성할 수 있습니다.
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
                        PWA QR 인증이 주는 장점
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
                        {[
                            { title: "앱 설치 불필요", desc: "웹 브라우저만 있으면 즉시 이용 가능해 배포와 관리가 간편합니다." },
                            { title: "즉시 QR 생성·스캔", desc: "로그인 후 전용 QR 코드 생성 및 식당 QR 스캔으로 빠른 식사 인증이 가능합니다." },
                            { title: "접근성 극대화", desc: "다양한 기기와 환경에서 동일한 경험을 제공해 사용자 만족도를 높입니다." }
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
                            PWA 기반 QR 인증이 궁금하시다면
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
                productName="스마트밀 - PWA 기반 QR 인증"
            />
        </div>
    );
};

export default SmartMealPwaQr;
