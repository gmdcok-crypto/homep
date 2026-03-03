import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const SmartMeal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const features = [
        {
            title: "PWA 기반 QR 인증",
            desc: "별도의 앱 설치 없이 모바일 웹 브라우저에서 즉시 QR 코드를 생성하여 식사 인증을 완료합니다. 사용자 접근성이 극대화됩니다.",
            image: "/images/solutions/bluemeal-qr.png",
            detailPath: "/solutions/smartmeal/pwa-qr"
        },
        {
            title: "Zero Hardware 시스템",
            desc: "고가의 전용 리더기 대신 기존에 보유한 태블릿이나 스마트폰을 스캐너로 활용하여 초기 구축 비용을 제로에 가깝게 절감합니다.",
            image: "/images/solutions/bluemeal-zero-hardware.png",
            detailPath: "/solutions/smartmeal/zero-hardware"
        },
        {
            title: "실시간 클라우드 정산",
            desc: "FastAPI와 MariaDB 기반의 강력한 클라우드 백엔드를 통해 실시간 식수 통계와 부서별 정산 데이터를 즉시 확인하고 다운로드할 수 있습니다.",
            image: "/images/solutions/bluemeal-dashboard.png",
            detailPath: "/solutions/smartmeal/cloud-settlement"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_bluemeal_main.jpg"
                        alt="SmartMeal Smart Cafeteria"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1 bg-white text-blue-900 text-xs font-black rounded-sm mb-6 uppercase tracking-tighter">
                            SMART MEAL SOLUTION
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
                            비용은 <span className="text-blue-400">최소</span>, <br />
                            효율은 <span className="text-blue-400">MAX!</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl font-light leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                            스마트밀은 별도의 하드웨어 도입 없이 기존 기기를 활용하는 <br className="hidden md:block" />
                            클라우드 기반 PWA 스마트 식수 관리 솔루션입니다.
                        </p>
                        <button
                            onClick={openModal}
                            className="px-10 py-5 bg-white text-blue-900 font-black rounded-full hover:bg-blue-50 transition-all text-lg shadow-2xl"
                        >
                            무료 도입 상담 신청
                        </button>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-32 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.2em]">Pain Points</h2>
                            <h3 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight">
                                아직도 전용장비와 <br />
                                복잡한 시설공사를 고민하시나요?
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { title: "초기투자 비용 부담", text: "비싸고 청결 이미지에 맞지않는 하드웨어 도입비용" },
                                    { title: "높은 유지보수 비용", text: "기기 노후화 및 잦은 고장으로 인한 지속적인 지출" },
                                    { title: "낮은 확장성", text: "특정 기기에 종속되어 기능 추가나 변경이 어려운 한계" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 font-bold text-xl">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-zinc-500 leading-relaxed font-light">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12">
                                <Link
                                    to="/solutions/smartmeal/flow"
                                    className="inline-flex items-center justify-center gap-2 max-w-sm w-full py-5 px-6 bg-blue-600 text-white text-lg md:text-xl font-black rounded-xl hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all border-2 border-blue-800 cursor-pointer shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                                >
                                    인증 흐름보기(사용법)
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-64 bg-zinc-200 rounded-3xl overflow-hidden shadow-inner">
                                    <img src="/images/solutions/bluemeal-qr-scan.png" className="w-full h-full object-cover" alt="QR 스캔" />
                                </div>
                                <div className="h-56 bg-blue-600 rounded-3xl p-6 text-white flex flex-col justify-start">
                                    <div>
                                        <span className="text-3xl font-black block mb-1">0원</span>
                                        <p className="text-xs opacity-90 uppercase tracking-widest font-bold">Hardware Cost</p>
                                    </div>
                                    <ul className="text-xs leading-relaxed space-y-1 opacity-95 mt-4">
                                        <li>• ONLY QR 코드와 스마트폰으로만 시스템구성</li>
                                        <li>• 지문인식기 다중사용자로 인한 위생문제 해결</li>
                                        <li>• RFID 태그등, 소모품 비용 절감</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 rounded-3xl overflow-hidden relative">
                                    <img src="/images/solutions/bluemeal-setup-time.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                        <span className="text-3xl font-black mb-1">아주 짧은 도입기간</span>
                                    </div>
                                </div>
                                <div className="h-64 rounded-3xl overflow-hidden shadow-inner">
                                    <img src="/images/solutions/bluemeal-innovation.png" alt="Innovation" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-blue-600 font-bold mb-4 tracking-[0.3em] uppercase">Core Innovation</h2>
                        <h3 className="text-5xl font-black mb-8 tracking-tighter">스마트밀만의 압도적인 기술력</h3>
                        <p className="text-zinc-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                            PWA 기술과 클라우드 아키텍처를 결합하여 가장 현대적이고 합리적인 <br className="hidden md:block" /> 급식 관리 프로세스를 제공합니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[4/3] rounded-[48px] overflow-hidden mb-8 shadow-xl bg-zinc-100">
                                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                </div>
                                <h4 className="text-2xl font-bold mb-4 px-4">{feature.title}</h4>
                                <p className="text-zinc-500 text-lg leading-relaxed font-light px-4 mb-6">{feature.desc}</p>
                                <div className="px-4">
                                    {feature.detailPath ? (
                                        <Link
                                            to={feature.detailPath}
                                            className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors"
                                        >
                                            자세히 알아보기
                                        </Link>
                                    ) : (
                                        <button
                                            type="button"
                                            className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors"
                                        >
                                            자세히 알아보기
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Value */}
            <section className="py-32 bg-blue-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h3 className="text-4xl md:text-6xl font-black mb-16 tracking-tight leading-tight">
                            기존 인프라를 그대로 활용하여 <br />
                            <span className="text-blue-300 underline decoration-blue-500/50 underline-offset-8">1주일 만에</span> 도입 가능합니다.
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10">
                                <span className="text-blue-400 font-black text-4xl block mb-6">Cost</span>
                                <h5 className="text-xl font-bold mb-4">투자 비용 90% 이상 절감</h5>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    전용 리더기, 키오스크 구축 비용이 들지 않습니다. 기존에 사용하던 태블릿과 직원들의 스마트폰만 있으면 충분합니다.
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10">
                                <span className="text-blue-400 font-black text-4xl block mb-6">Service</span>
                                <h5 className="text-xl font-bold mb-4">클라우드 통합 채널 관리</h5>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    사용자 화면, 현장 관리자, 본사 통합 대시보드까지 하나의 클라우드 환경에서 완벽하게 동기화됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-5xl font-black mb-12 tracking-tighter italic uppercase text-blue-900">Next Generation Cafeteria</h2>
                        <h3 className="text-3xl font-bold mb-16 leading-tight">
                            지금 바로 블루콤의 <br className="md:hidden" />
                            스마트 급식 솔루션을 만나보세요.
                        </h3>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <button
                                onClick={openModal}
                                className="px-12 py-6 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all text-xl shadow-2xl"
                            >
                                무료 상담 및 견적 신청
                            </button>
                            <a
                                href="/solutions/medical"
                                className="px-12 py-6 bg-zinc-100 text-zinc-900 font-black rounded-full hover:bg-zinc-200 transition-all text-xl text-center"
                            >
                                다른 솔루션 보기
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="스마트밀 스마트 급식/식수 관리 솔루션"
            />
        </div>
    );
};

export default SmartMeal;
