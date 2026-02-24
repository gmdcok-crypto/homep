import { Link } from 'react-router-dom';

const ProductSection = () => {
    const products = [
        {
            title: "바코드프린터 & 라벨,리본",
            description: "각 산업부분에 적합한 다양한 프린터 및 라벨용지",
            link: "/products/barcode-printer",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Main Chassis */}
                    <rect x="2" y="3" width="20" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />

                    {/* Side Panel Divider */}
                    <line x1="16" y1="3" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" />

                    {/* Large Media Window (Characteristic of ZT series) */}
                    <rect x="4.5" y="6" width="9" height="10" rx="1" stroke="currentColor" strokeWidth="1" />

                    {/* Media Roll hint */}
                    <circle cx="9" cy="11" r="3" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Control Panel Screen */}
                    <rect x="17" y="5" width="4" height="5" rx="0.5" fill="currentColor" className="text-gray-300" />

                    {/* Control Buttons (Vertical layout) */}
                    <rect x="17.5" y="12" width="3" height="1" rx="0.5" fill="currentColor" />
                    <rect x="17.5" y="14" width="3" height="1" rx="0.5" fill="currentColor" />
                    <rect x="17.5" y="16" width="3" height="1" rx="0.5" fill="currentColor" />

                    {/* Label Exit Slot */}
                    <path d="M5 20v3h10v-3" stroke="currentColor" strokeWidth="1" />
                    <line x1="7" y1="22" x2="13" y2="22" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            )
        },
        {
            title: "RFID & TAG",
            description: (
                <>
                    RFID 프린터, 리더기, 태그, 안테나,
                    <br />
                    다양한 RFID 솔루션 및 시스템 구축
                </>
            ),
            link: "/products/rfid-tag",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Device Body - Slim Vertical Reader */}
                    <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" />

                    {/* Top Sensor/Screen Area - Dark/Glossy feel */}
                    <path d="M7 6h10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <rect x="9" y="5" width="6" height="4" rx="1" fill="currentColor" className="text-gray-300" stroke="none" />

                    {/* Status LED Bar / Center divider */}
                    <line x1="7" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="1" />

                    {/* Fingerprint / Card Sense Area */}
                    <rect x="9.5" y="14" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11 15v2" stroke="currentColor" strokeWidth="1" />
                    <path d="M13 15v2" stroke="currentColor" strokeWidth="1" />

                    {/* Side Wave Hints (Subtle Activity) */}
                    <path d="M19 10c1 1 1 3 0 4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 10c-1 1 -1 3 0 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            )
        },
        {
            title: "DID, 멀티비젼",
            description: "정보 전달을 위한 디지털 디스플레이 솔루션",
            link: "/products/did-multivision",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Screen / Display Body */}
                    <rect x="6" y="2" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="7.5" y="3.5" width="9" height="13" rx="0.5" stroke="currentColor" strokeWidth="1" />

                    {/* Play Button Icon on Screen */}
                    <path d="M11 8.5l3 1.5-3 1.5v-3z" fill="currentColor" stroke="none" className="text-gray-400" />

                    {/* Stand Neck */}
                    <path d="M10 18v3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M14 18v3" stroke="currentColor" strokeWidth="1.5" />

                    {/* Stand Base */}
                    <path d="M7 21h10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 22h14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            )
        },
        {
            title: "컴퓨터 & 주변기기",
            description: (
                <>
                    서버, 네트워크 장비, 컴퓨터, 주변기기,
                    <br />
                    기업용 솔루션 및 다양한 IT 인프라 장비
                </>
            ),
            link: "/products/computer-peripherals",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Monitor */}
                    <rect x="2" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="9" y1="17" x2="9" y2="13" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="5" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.5" />

                    {/* Tower/Server Case */}
                    <rect x="17" y="3" width="5" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="19.5" y1="5" x2="19.5" y2="5.01" stroke="currentColor" strokeWidth="2" />
                    <line x1="18" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="1" />
                    <line x1="18" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="1" />

                    {/* Keyboard / Network device hint */}
                    <rect x="2" y="19" width="20" height="2" rx="0.5" fill="currentColor" className="text-gray-400" stroke="none" />
                </svg>
            )
        },
        {
            title: "지능형 순번기기",
            description: "효율적인 고객 관리를 위한 스마트 순번 대기 솔루션",
            link: "/products/pos-printer",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Totem/Kiosk Body */}
                    <rect x="6" y="2" width="12" height="18" rx="2" stroke="currentColor" />
                    {/* Screen Area */}
                    <rect x="8" y="4" width="8" height="6" rx="1" fill="currentColor" opacity="0.2" />
                    {/* Screen Content hint */}
                    <line x1="10" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1" />
                    <line x1="10" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="1" />
                    {/* Interaction Button */}
                    <circle cx="12" cy="13" r="1.5" stroke="currentColor" />
                    {/* Ticket Exit Slot */}
                    <rect x="9" y="16" width="6" height="1" rx="0.5" fill="currentColor" />
                    {/* Ticket coming out */}
                    <path d="M10 17v2h4v-2" opacity="0.5" />
                    {/* Base */}
                    <path d="M4 22h16" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: "CCTV",
            description: "고해상도 실시간 모니터링 및 보안 솔루션",
            link: "/products/cctv",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Camera Body */}
                    <rect x="3" y="10" width="12" height="8" rx="1" />
                    <path d="M15 12l5-3v10l-5-3" />
                    {/* Lens area */}
                    <circle cx="9" cy="14" r="2" />
                    <circle cx="9" cy="14" r="0.5" fill="currentColor" />
                    {/* Stand/Mount */}
                    <path d="M7 18l-2 3h8l-2-3" />
                    {/* Signal/Power LED */}
                    <circle cx="5" cy="12" r="0.5" fill="#EF4444" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">제품소개</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        블루컴이 제공하는 혁신적인 비즈니스 솔루션을 한눈에 확인해 보세요.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {products.map((product, index) => (
                        <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2">
                            <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">{product.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed h-12 flex items-center justify-center text-sm">{product.description}</p>
                            <Link to={product.link || "#"} className="mt-auto px-6 py-2.5 bg-gray-50 text-gray-900 font-bold rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:border-transparent text-sm">
                                자세히 보기 &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
