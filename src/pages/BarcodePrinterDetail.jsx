import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from './BarcodePrinter';
import QuoteModal from '../components/QuoteModal';

const BarcodePrinterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const detailSectionRef = React.useRef(null);

    useEffect(() => {
        if (!product) {
            navigate('/products/barcode-printer');
            return;
        }

        // Scroll to the product detail section on mobile, otherwise just scroll to top
        if (window.innerWidth < 768 && detailSectionRef.current) {
            // Add a small delay to ensure rendering is complete before scrolling
            setTimeout(() => {
                detailSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }

        const interval = setInterval(() => {
            if (product.detailImages && product.detailImages.length > 0) {
                setCurrentImageIndex((prev) => (prev + 1) % product.detailImages.length);
            }
        }, 2000); // 2 seconds interval as requested

        return () => clearInterval(interval);
    }, [product, navigate]);

    if (!product) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
                <p>Requested ID: {id}</p>
                <Link to="/products/barcode-printer" className="text-blue-500 hover:underline">Return to List</Link>
            </div>
        );
    }

    const nextImage = () => {
        if (product.detailImages && product.detailImages.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % product.detailImages.length);
        }
    };

    const prevImage = () => {
        if (product.detailImages && product.detailImages.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + product.detailImages.length) % product.detailImages.length);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-white min-h-screen">
            <QuoteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                productName={product.name}
            />
            {/* Top Hero Section */}
            <div className="bg-gray-900 text-white relative overflow-hidden h-[400px] flex items-center">
                {/* Placeholder for Hero Image - In a real app, this would be dynamic based on product or a generic category image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/label-printer-detail-banner.jpg"
                        alt="Label Printer Background (Detail)"
                        className="w-full h-full object-cover object-[90%_center] sm:object-center opacity-60"
                    />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/products/barcode-printer" className="inline-flex items-center px-4 py-2 bg-indigo-900/40 border border-indigo-400/20 text-white rounded-full hover:bg-indigo-900/60 transition-all mb-8 group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="font-medium">목록으로 돌아가기</span>
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{product.name}</h1>
                        <p className="text-lg md:text-xl text-white font-medium leading-relaxed drop-shadow-md">
                            {product.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Detail Section */}
            <div ref={detailSectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Detail Image Area */}
                    <div className="bg-white rounded-3xl p-4 md:p-8 flex items-center justify-center border border-gray-100 shadow-sm relative group overflow-hidden h-[500px]">
                        {product.detailImages && product.detailImages.length > 0 ? (
                            <>
                                <div className="relative w-full h-[500px]">
                                    <img
                                        src={product.detailImages[currentImageIndex]}
                                        alt={`${product.name} detail ${currentImageIndex + 1}`}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-r-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                        aria-label="Previous Image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-l-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                        aria-label="Next Image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Dots */}
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                                        {product.detailImages.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                                                    }`}
                                                aria-label={`Go to image ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto max-h-[500px] object-contain mix-blend-multiply"
                            />
                        ) : (
                            /* Placeholder for Detail Image */
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-64 h-64 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <path d="M8 4v-2h8v2" />
                                    <path d="M8 20v2h8v-2" />
                                    <line x1="7" y1="12" x2="17" y2="12" strokeDasharray="2 2" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                                <p className="text-gray-400 text-sm font-medium mt-8">Product Detail Image</p>
                            </div>
                        )}
                    </div>

                    {/* Product Info / Specs */}
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

export default BarcodePrinterDetail;
