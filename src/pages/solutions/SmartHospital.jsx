import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const SmartHospital = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const medicalSolutions = [
        {
            title: "지능형 순번 대기 시스템",
            desc: "환자의 대기 시간을 획기적으로 관리하고, 카카오 알림톡 연동을 통해 원내 혼잡도를 최소화합니다.",
            image: "/images/solutions/hospital-kiosk-korean.jpg"
        },
        {
            title: "외래 환자 통합 관리",
            desc: "진료실 앞 디스플레이를 통해 환자 호출과 진료 현황을 실시간 중계하여 안내 업무를 자동화합니다.",
            image: "/images/solutions/outpatient-korean.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-blue-900/40 z-10" />
                    <img
                        src="/images/solutions/hospital-hero.jpg"
                        alt="Smart Hospital Lobby"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 bg-white text-blue-900 text-xs font-black rounded-sm mb-6 uppercase tracking-tighter">
                            BLUE MEDICAL SOLUTION
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            기다림을 <span className="text-blue-300">즐거움</span>으로, <br />
                            <span className="text-blue-300">지능형 순번대기</span> 솔루션
                        </h1>
                        <p className="text-xl text-blue-50/70 mb-10 max-w-xl font-light">
                            지능형 호출표시기부터 원격 알림 인프라까지. <br />
                            블루컴이 제안하는 효율적인 대기 공간의 미래입니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-blue-600 font-bold mb-4 tracking-widest uppercase">Smart Management</h2>
                        <h3 className="text-4xl font-extrabold mb-6 tracking-tight">끊김 없는 의료 행정의 실현</h3>
                        <p className="text-zinc-500 text-lg max-w-2xl mx-auto">더 이상 줄 서서 기다릴 필요가 없습니다. 디지털 기술이 접수부터 수납까지 모든 과정을 부드럽게 연결합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {medicalSolutions.map((sol, i) => (
                            <div key={i} className="group overflow-hidden rounded-[40px] bg-zinc-50 border border-zinc-100 hover:shadow-2xl transition-all duration-700">
                                <div className="h-[400px] overflow-hidden">
                                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                </div>
                                <div className="p-12">
                                    <h4 className="text-3xl font-black mb-6">{sol.title}</h4>
                                    <p className="text-zinc-600 text-lg leading-relaxed font-light">{sol.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Remote Care / Telemedicine */}
            <section className="py-32 bg-zinc-950 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-blue-400 font-bold mb-4 uppercase tracking-widest">Next Generation</h2>
                            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">미래형 비대면 원격 진료 솔루션</h3>
                            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                                물리적 거리를 넘어서는 고품질 영상 전송 기술과 철저한 데이터 보안을 통해 도서산간 지역 및 만성질환 환자를 위한
                                혁신적인 비대면 의료 인프라를 구축합니다.
                            </p>
                            <div className="space-y-6">
                                {['실시간 고화질 영상 연동', '종단간 암호화 보안 기술', '환자 바이탈 데이터 통합 조회', 'EHR 시스템 완벽 호환'].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-6 h-px bg-blue-500"></div>
                                        <span className="text-zinc-300 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 rounded-[40px] overflow-hidden shadow-2xl relative group">
                            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000" />
                            <img
                                src="/images/solutions/telemedicine-detail.jpg"
                                alt="Telemedicine solution"
                                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-black mb-12">스마트한 병원, 지금 상담하세요.</h2>
                    <button
                        onClick={openModal}
                        className="px-12 py-6 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all text-xl shadow-xl inline-block"
                    >
                        의료 솔루션 상담 신청
                    </button>
                </div>
            </section>
            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName="지능형 순번대기 & 원격진료 솔루션"
            />
        </div>
    );
};

export default SmartHospital;
