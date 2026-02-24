import React, { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('greetings');

    const historyData = [
        { year: '2025', content: '블루컴 법인 설립 및 사업 개시' },
        { year: '2025', content: '지능형 순번대기 시스템 솔루션 개발' },
        { year: '2025', content: '바코드 프린터 및 RFID 특화 라인업 구축' },
        { year: '2026', content: '산업별 통합 인쇄 매니지먼트 서비스 런칭' },
        { year: '2026', content: '글로벌 파트너십 체결 및 솔루션 고도화' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/digital_signage_bg.jpg"
                        alt="About Us Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60"></div>
                </div>
                <div className="container mx-auto relative z-10 px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">회사소개</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                        최고의 기술력과 신뢰를 바탕으로<br />
                        고객의 비즈니스 가치를 혁신하는 파트너, 블루컴입니다.
                    </p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="sticky top-16 bg-white border-b border-gray-100 z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center space-x-8 md:space-x-16">
                        {['greetings', 'history', 'location'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-6 text-xl font-bold transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab === 'greetings' && '인사말'}
                                {tab === 'history' && '연혁'}
                                {tab === 'location' && '오시는 길'}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="container mx-auto px-4 py-20">
                {activeTab === 'greetings' && (
                    <div className="max-w-4xl mx-auto animate-fadeIn">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                                    "내일의 기술을 오늘 연결합니다."
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    안녕하십니까? 블루컴 홈페이지를 방문해 주셔서 진심으로 감사드립니다.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    급변하는 비즈니스 환경 속에서 정확한 데이터 관리와 신속한 정보 처리는 기업 경쟁력의 핵심입니다. 블루컴은 바코드, RFID, DID 등 첨단 인쇄 및 영상 솔루션을 통해 고객사의 업무 효율을 극대화하고 새로운 가치를 창출하는 데 전력을 다하고 있습니다.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    단순한 제품 공급을 넘어, 고객의 현장에 최적화된 통합 솔루션을 제안하는 진정한 비즈니스 파트너가 될 것을 약속드립니다. 언제나 고객의 목소리에 귀 기울이며 함께 성장해 나가는 블루컴이 되겠습니다.
                                </p>
                                <div className="mt-12">
                                    <p className="text-2xl font-bold text-gray-900">블루컴 임직원 일동</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/hospital_bg.jpg"
                                        alt="CEO Greeting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center p-4 shadow-xl">
                                    <span className="text-white text-lg font-bold text-center">TRUST & INNOVATION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="max-w-3xl mx-auto animate-fadeIn">
                        <div className="relative border-l-4 border-blue-50 ml-6 space-y-12 pb-10">
                            {historyData.map((item, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute -left-[22px] top-0 w-10 h-10 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-md">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-3xl font-black text-blue-600 mb-2 block">{item.year}</span>
                                        <p className="text-xl text-gray-700 font-semibold">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'location' && (
                    <div className="max-w-5xl mx-auto animate-fadeIn">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
                            {/* Map Placeholder */}
                            <div className="aspect-video bg-gray-50 flex items-center justify-center relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                                    alt="Map Placeholder"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 pointer-events-none">
                                        <div className="w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
                                        <span className="text-xl font-bold text-gray-900">블루컴 본사 위치</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    주소 안내
                                </h3>
                                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                                    경기도 파주시 하우개길 109, 102동 1101호<br />
                                    (야당동, 하우개마을 사계절)
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    고객센터
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-xl text-gray-700 font-bold">대표번호: 070-7760-6271</p>
                                    <p className="text-xl text-gray-700 font-bold">이메일: bluecs@bluecs.co.kr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
