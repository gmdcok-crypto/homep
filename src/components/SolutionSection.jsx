import React from 'react';
import { Link } from 'react-router-dom';

const SolutionSection = () => {
    const solutions = [
        { title: "라벨 & RFID", image: "/images/solutions/logistics-hero.jpg", link: "/solutions/logistics" },
        { title: "지능형 순번대기\n& 원격진료", image: "/images/solutions/hospital-hero.jpg", link: "/solutions/medical" },
        { title: "디지털 광고", image: "/images/solutions/signage-hero.jpg", link: "/solutions/signage" },
        { title: "지능형 영상 보안 (CCTV)", image: "/images/solutions/cctv-hero.jpg", link: "/solutions/security" },
        { title: "IT 인프라 & 유지보수", image: "/images/solutions/it-infra-hero.jpg", link: "/solutions/it-infra" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        <span className="text-blue-900">BLUE</span> 솔루션
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        비즈니스의 시작부터 끝까지 책임지는 토털 케어 솔루션.<br />
                        상담부터 설치, 유지보수까지 블루컴의 원스톱 서비스로 완벽한 IT 환경을 구축하세요.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {solutions.map((solution, index) => (
                        <Link
                            to={solution.link}
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg h-64 block font-bold transition-transform hover:-translate-y-2 duration-300"
                        >
                            <img
                                src={solution.image}
                                alt={solution.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-opacity-60 transition duration-300">
                                <h3 className="text-white text-xl font-bold text-center px-4 whitespace-pre-line">{solution.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
