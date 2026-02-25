import React from 'react';
const supportContactImg = "/images/support_contact.png";

const SupportSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {/* News */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 font-display">최신 뉴스</h2>
                        <ul className="space-y-6">
                            <li className="flex flex-col">
                                <span className="text-sm text-gray-500 italic">2026. 02. 15</span>
                                <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    [신제품] 산업용 무선 바코드 스캐너 LI3608-ER 출시
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-sm text-gray-500 italic">2026. 01. 22</span>
                                <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    블루컴, 2026 스마트 물류 산업전 참가 안내
                                </a>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-sm text-gray-500 italic">2025. 12. 10</span>
                                <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                    블루컴, 프리미엄 DID 멀티비젼 설치 사례 (강남 지식산업센터)
                                </a>
                            </li>
                        </ul>
                        <a href="#" className="inline-block mt-8 text-blue-600 font-bold hover:underline group">
                            전체 뉴스 보기 <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                    </div>

                    {/* Support & Contact */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 font-display">고객지원 및 CONTACT</h2>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row items-stretch gap-0 overflow-hidden">
                            <div className="flex-1 p-8 space-y-6 w-full">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-5 text-blue-600 flex-shrink-0">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-0.5">SALES</p>
                                        <a href="mailto:bluecs@bluecs.co.kr" className="text-lg sm:text-xl font-bold text-gray-900 hover:text-primary transition-colors">bluecs@bluecs.co.kr</a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-5 text-blue-600 flex-shrink-0">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.736 14.5a3.5 3.5 0 117.028 0 3.5 3.5 0 01-7.028 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-0.5">TECH</p>
                                        <a href="mailto:bluecs@bluecs.co.kr" className="text-lg sm:text-xl font-bold text-gray-900 hover:text-primary transition-colors">bluecs@bluecs.co.kr</a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-5 text-blue-600 flex-shrink-0">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-0.5">TEL</p>
                                        <a href="tel:070-7760-6271" className="text-xl sm:text-2xl font-black text-gray-900 hover:text-primary transition-colors">070-7760-6271</a>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Asset */}
                            <div className="w-full lg:w-48 xl:w-64 flex-shrink-0 relative overflow-hidden hidden sm:block">
                                <img
                                    src={supportContactImg}
                                    alt="Technical Support"
                                    className="w-full h-full object-cover object-center absolute inset-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
