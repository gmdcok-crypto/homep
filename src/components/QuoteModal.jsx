import React, { useState } from 'react';
import { toast } from 'react-toastify';

const QuoteModal = ({ isOpen, onClose, productName }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data payload
        const payload = {
            ...formData,
            message: `[Product: ${productName}] ${formData.message || ''}` // Prepend product name since backend schema might not have it yet
        };

        try {
            const response = await fetch('http://localhost:8000/quotes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success('견적 문의가 성공적으로 접수되었습니다!');
                onClose();
                setFormData({ name: '', company: '', phone: '', email: '', message: '' });
            } else {
                toast.error('문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Error submitting quote:', error);
            toast.error('서버 연결에 실패했습니다. 백엔드 상태를 확인해주세요.');
        } finally {
            setIsSubmitted(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity" onClick={onClose}></div>

            {/* Modal Container */}
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all z-50"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Header */}
                <div className="bg-blue-950 text-white px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">견적 문의</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-4">
                            <span className="text-sm text-gray-500 block">문의 제품</span>
                            <span className="font-bold text-gray-800">{productName}</span>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">성함 / 담당자명 <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all"
                                placeholder="홍길동"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                회사명 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all"
                                placeholder="블루컴"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">연락처 <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all"
                                placeholder="010-1234-5678"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                이메일 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all"
                                placeholder="email@company.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                문의 내용
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="필요하신 수량, 납기일, 기타 요청사항 등을 자유롭게 적어주세요."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-300"
                        >
                            견적 및 문의
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
