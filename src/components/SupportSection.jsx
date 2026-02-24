import React from 'react';

const SupportSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

                    {/* Support */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 font-display">고객지원 & 다운로드</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                제품 드라이버, 매뉴얼, 소프트웨어를 쉽고 빠르게 찾아보세요.<br />
                                블루컴의 전문가들이 최상의 기술 지원을 약속합니다.
                            </p>
                            <div className="space-y-5">
                                <div className="flex items-center group cursor-pointer">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                                        <svg className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </div>
                                    <a href="#" className="text-gray-700 group-hover:text-blue-600 font-semibold text-lg transition-colors">드라이버 다운로드</a>
                                </div>
                                <div className="flex items-center group cursor-pointer">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                                        <svg className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <a href="#" className="text-gray-700 group-hover:text-blue-600 font-semibold text-lg transition-colors">사용자 매뉴얼</a>
                                </div>
                                <div className="flex items-center group cursor-pointer">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                                        <svg className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <a href="#" className="text-gray-700 group-hover:text-blue-600 font-semibold text-lg transition-colors">고객 지원 센터</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
