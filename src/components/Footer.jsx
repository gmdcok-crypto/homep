import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-white tracking-tight">
                            <span>BLUE</span>
                            <span>COM</span>
                            <span className="w-2 h-2 bg-blue-400 rounded-full ml-0.5 mb-3"></span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            IT Total Service Solution Provider
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><NavLink to="/products/barcode-printer" className="hover:text-white transition-colors">라벨 프린터</NavLink></li>
                            <li><NavLink to="/products/rfid-tag" className="hover:text-white transition-colors">RFID & TAG</NavLink></li>
                            <li><NavLink to="/products/pos-printer" className="hover:text-white transition-colors">지능형 순번기기</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><NavLink to="/about" className="hover:text-white transition-colors">회사소개</NavLink></li>
                            <li><HashLink smooth to="/#support" className="hover:text-white transition-colors">고객지원 및 Contact</HashLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-sm text-gray-400">
                            Email: bluecs@bluecs.co.kr<br />
                            Tel: 070-7760-6271
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} BLUECOM Co., Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
