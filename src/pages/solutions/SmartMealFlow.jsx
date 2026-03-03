import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteModal';

const steps = [
    {
        step: 1,
        title: '최초등록',
        desc: '최초(1회) 기기등록 시 사번, 이름, 비밀번호(본인 선택)를 등록합니다. 비밀번호를 잊어버리거나 핸드폰 교체 시 담당자에게 비밀번호 초기화를 요청하면 새로운 비밀번호로 다시 등록 가능합니다.',
        image: '/images/solutions/flow-step-1.png'
    },
    {
        step: 2,
        title: '인증 데이터 전송',
        desc: '현장 QR 스캔하기를 터치합니다. (카메라가 켜집니다.)',
        image: '/images/solutions/flow-step-2.png'
    },
    {
        step: 3,
        title: 'QR인증하기',
        desc: '부착되어 있는 QR 코드를 스캔하여 인증을 받습니다.',
        image: '/images/solutions/flow-step-3.png'
    },
    {
        step: 4,
        title: '인증화면',
        desc: '인증화면을 보여주고 인증확인을 터치합니다. 인증화면이 사라집니다. 인증화면이 다시 필요하면 2번 사진에 있는 인증화면 다시보기를 터치하면 인증화면을 다시 불러올 수 있습니다. (5분간)',
        image: '/images/solutions/flow-step-4.png'
    }
];

const SmartMealFlow = () => {
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
                        alt="인증 흐름"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-blue-900/40" />
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
                        PROCESS
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        QR 인증부터 영양사 인증 화면까지
                    </h1>
                    <p className="text-xl text-blue-50/90 max-w-2xl font-semibold leading-relaxed mb-10">
                        스마트밀 인증이 이루어지는 순서를 한눈에 확인하세요.
                    </p>
                    <button
                        onClick={openModal}
                        className="px-8 py-4 bg-white text-blue-900 font-black rounded-full hover:bg-blue-50 transition-all shadow-xl"
                    >
                        무료 도입 상담 신청
                    </button>
                </div>
            </section>

            {/* 순서형 흐름 */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.2em]">인증 흐름</h2>
                    <h3 className="text-3xl md:text-4xl font-black mb-16 tracking-tight">
                        QR 인증 → 영양사 인증 화면 제시
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((item) => (
                            <div key={item.step} className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-lg mb-4">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-4">{item.title}</h4>
                                <div className="w-full max-w-[180px] mx-auto rounded-[2rem] overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-xl aspect-[9/19]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <p className="mt-4 text-zinc-600 text-sm leading-relaxed font-semibold">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 5분경과 후 인증여부확인 + 공지사항 등록 */}
                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black mb-16 tracking-tight">
                                5분경과 후 인증여부확인
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-lg mb-4">
                                        1
                                    </div>
                                    <h4 className="text-lg font-bold text-zinc-900 mb-4">인증여부조회(관계자)</h4>
                                    <div className="w-full max-w-[180px] mx-auto rounded-[2rem] overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-xl aspect-[9/19]">
                                        <img
                                            src="/images/solutions/flow-after5min-1.png"
                                            alt="5분경과 후 1번"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <p className="mt-4 text-zinc-600 text-sm leading-relaxed font-semibold">
                                        관계자가 사번이나 이름으로 인증여부를 조회합니다.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-lg mb-4">
                                        2
                                    </div>
                                    <h4 className="text-lg font-bold text-zinc-900 mb-4">인증확인</h4>
                                    <div className="w-full max-w-[180px] mx-auto rounded-[2rem] overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-xl aspect-[9/19]">
                                        <img
                                            src="/images/solutions/flow-after5min-2.png"
                                            alt="5분경과 후 2번"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <p className="mt-4 text-zinc-600 text-sm leading-relaxed font-semibold">
                                        인증여부 확인 후 인증 안 되어 있으면 재인증합니다. (당일 인증자료만 조회됩니다)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black mb-16 tracking-tight">
                                공지사항 등록
                            </h3>
                            <div className="flex justify-center lg:justify-start mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-lg">
                                    1
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-zinc-50 aspect-video max-w-2xl min-h-[320px]">
                                <img
                                    src="/images/solutions/flow-notice.png"
                                    alt="공지사항 등록"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <p className="mt-4 text-zinc-600 text-sm leading-relaxed font-semibold">
                                PC 프로그램에 공지사항 작성 후 저장 버튼을 누르면 핸드폰 화면에 공지사항이 표시됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 요약 + 2차 인증장비 */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="max-w-2xl text-left">
                            <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.2em]">요약</h2>
                            <h3 className="text-2xl font-black mb-8 tracking-tight">
                                한 번의 QR 인증으로 끝까지 연동됩니다
                            </h3>
                            <p className="text-zinc-600 leading-relaxed font-semibold">
                                직원이 식당에서 QR로 인증하면, 데이터는 자동으로 클라우드에 올라가고 실시간 대시보드에 반영됩니다. 영양사는 전용 화면에서 인증 내역을 확인하고 관리할 수 있어, 별도 정리 없이도 식수·정산 업무를 효율적으로 진행할 수 있습니다.
                            </p>
                        </div>
                        <div className="text-left">
                            <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.2em]">2차 인증장비</h2>
                            <p className="text-2xl font-black mb-6 tracking-tight text-zinc-900">
                                2차 인증 장비 요청시 설치 가능
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="flex-shrink-0 w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-zinc-100">
                                    <img
                                        src="/images/solutions/flow-secondary-auth.png"
                                        alt="2차 인증장비"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-zinc-600 leading-relaxed font-semibold">
                                        고객의 요청이 있을 시 2차 인증 장비 설치가 가능합니다. 식권프린터, 경광등 등 이전 제품들과 달리 다른 기기에 연결할 필요 없이 STAND ALONE 타입으로 작동합니다. 네트워크로 연결되어 작동합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-8 leading-tight">
                            인증 흐름이 궁금하시다면
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
                productName="스마트밀 - 인증 흐름"
            />
        </div>
    );
};

export default SmartMealFlow;
