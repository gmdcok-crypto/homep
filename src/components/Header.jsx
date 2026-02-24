import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        {
            name: '제품소개',
            href: '/#products',
            subLinks: [
                { name: '라벨 프린터', href: '/products/barcode-printer' },
                { name: 'RFID & TAG', href: '/products/rfid-tag' },
                { name: 'DID & 멀티비젼', href: '/products/did-multivision' },
                { name: '컴퓨터 & 주변기기', href: '/products/computer-peripherals' },
                { name: 'CCTV', href: '/products/cctv' },
                { name: '지능형 순번기기', href: '/products/pos-printer' },
                { name: '바코드 스캐너', href: '/products/barcode-scanner' },
                { name: '카드 프린터', href: '/products/card-printer' },
            ]
        },
        { name: '솔루션', href: '/#solutions' },
        { name: '고객지원', href: '/#support' },
        { name: '회사소개', href: '/about' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-end text-3xl font-bold tracking-tight group">
                            <span className="text-[#002060] dark:text-blue-400">BLUE</span>
                            <div className="relative">
                                <span className="text-[#002060] dark:text-blue-400">COM</span>
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
                            </div>
                        </a>
                    </div>

                    <div className="hidden md:block h-full">
                        <div className="ml-10 flex items-center space-x-4 h-full">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group h-full flex items-center">
                                    <a
                                        href={link.href}
                                        className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-lg font-bold transition-colors duration-200 uppercase tracking-wide flex items-center"
                                    >
                                        {link.name}
                                        {link.subLinks && (
                                            <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </a>

                                    {link.subLinks && (
                                        <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                                            <div className="py-1">
                                                {link.subLinks.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors border-b last:border-0 border-gray-50 font-medium"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-white dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-blue-400 block px-3 py-2 rounded-md text-xl font-medium"
                                >
                                    {link.name}
                                </a>
                                {link.subLinks && (
                                    <div className="pl-6 space-y-1 pb-2">
                                        {link.subLinks.map((sub) => (
                                            <a
                                                key={sub.name}
                                                href={sub.href}
                                                className="text-gray-500 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium"
                                            >
                                                • {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
