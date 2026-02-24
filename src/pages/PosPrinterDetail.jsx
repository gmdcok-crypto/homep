import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from './PosPrinter';
import QuoteModal from '../components/QuoteModal';

const PosPrinterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!product) {
            navigate('/products/pos-printer');
            return;
        }
        window.scrollTo(0, 0);

        const interval = setInterval(() => {
            if (product.detailImages && product.detailImages.length > 1) {
                setCurrentImageIndex((prev) => (prev + 1) % product.detailImages.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [product, navigate]);

    if (!product) return null;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-white min-h-screen">
            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName={product.name}
            />
            {/* Hero Section */}
            <div className="bg-gray-900 text-white relative overflow-hidden h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hospital_bg.jpg"
                        alt="Intelligent Queue Detail Background"
                        className="w-full h-full object-cover object-right opacity-100"
                    />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/products/pos-printer" className="inline-flex items-center px-4 py-2 bg-indigo-900/40 border border-indigo-400/20 text-white rounded-full hover:bg-indigo-900/60 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">목록으로 돌아가기</span>
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{product.name}</h1>
                        <p className="text-lg md:text-xl text-white font-medium drop-shadow-md leading-relaxed">
                            {product.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Gallery */}
                    <div className="bg-white rounded-3xl p-4 md:p-8 flex items-center justify-center border border-gray-100 shadow-sm relative group overflow-hidden h-[500px]">
                        <img
                            src={product.detailImages[currentImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                        {product.detailImages.length > 1 && (
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                                {product.detailImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Specs / Features */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">제품 주요특징</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                            <h3 className="bg-indigo-50/50 px-8 py-5 border-b border-gray-100 font-bold text-gray-900 text-xl">
                                제품 핵심 사양
                            </h3>
                            <div className="px-8 py-8">
                                <ul className="space-y-5">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="mt-1.5 mr-4 flex-shrink-0">
                                                <div className="bg-indigo-600 rounded-full p-1">
                                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-gray-700 text-lg font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={openModal}
                                className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full md:w-auto text-xl uppercase tracking-wider"
                            >
                                견적 및 문의
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosPrinterDetail;
