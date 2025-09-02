import React, { useRef, useEffect, useState } from 'react'

function Terms() {
    const heroRef = useRef(null);
    const sectionsRef = useRef(null);
    const [heroInView, setHeroInView] = useState(false);
    const [sectionsInView, setSectionsInView] = useState(false);

    useEffect(() => {
        const createObserver = (ref, setState) => {
            if (!ref.current) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setState(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(ref.current);
            return observer;
        };

        const observers = [
            createObserver(heroRef, setHeroInView),
            createObserver(sectionsRef, setSectionsInView)
        ];

        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    return (
        <div className="min-h-screen">
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInLeft {
                    0% { opacity: 0; transform: translateX(-30px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    0% { opacity: 0; transform: translateX(30px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                
                .animate-fadeInUp { opacity: 0; }
                .animate-fadeInUp.in-view { animation: fadeInUp 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-slideInLeft { opacity: 0; }
                .animate-slideInLeft.in-view { animation: slideInLeft 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-slideInRight { opacity: 0; }
                .animate-slideInRight.in-view { animation: slideInRight 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-800 { animation-delay: 0.8s; }
                `}
            </style>

            {/* Hero Section */}
            <section ref={heroRef} className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-green-100 opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className={`text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fadeInUp${heroInView ? ' in-view' : ''}`}>
                            Terms of Service
                        </h1>
                        <p className={`text-xl text-gray-600 mb-8 animate-fadeInUp delay-200${heroInView ? ' in-view' : ''}`}>
                            Please read these terms carefully before using our services
                        </p>
                        <div className={`w-24 h-1 bg-green-500 mx-auto animate-fadeInUp delay-400${heroInView ? ' in-view' : ''}`}></div>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section ref={sectionsRef} className="py-4">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        {/* Last Updated */}
                        <div className={`text-left animate-fadeInUp delay-100${sectionsInView ? ' in-view' : ''}`}>
                            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>

                        {/* Acceptance of Terms */}
                        <div className={`animate-slideInLeft delay-200${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">1</span>
                                </span>
                                Acceptance of Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                By accessing and using BOHO Furniture's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                                If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>

                        {/* Description of Service */}
                        <div className={`animate-slideInRight delay-300${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">2</span>
                                </span>
                                Description of Service
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                BOHO Furniture provides an online platform for browsing, purchasing, and learning about furniture and home decor products.
                                Our service includes product information, customer support, and secure payment processing.
                            </p>
                        </div>

                        {/* User Account */}
                        <div className={`animate-slideInLeft delay-400${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">3</span>
                                </span>
                                User Account
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality
                                of your account information and for all activities that occur under your account.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2">
                                <li>You must provide accurate and complete information when creating your account</li>
                                <li>You are responsible for safeguarding your password and account access</li>
                                <li>You must notify us immediately of any unauthorized use of your account</li>
                            </ul>
                        </div>

                        {/* Privacy Policy */}
                        <div className={`animate-slideInRight delay-500${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">4</span>
                                </span>
                                Privacy Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service,
                                to understand our practices regarding the collection and use of your personal information.
                            </p>
                        </div>

                        {/* Product Information */}
                        <div className={`animate-slideInLeft delay-600${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">5</span>
                                </span>
                                Product Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We strive to provide accurate product descriptions, images, and pricing information. However, we do not warrant that product
                                descriptions or other content is accurate, complete, reliable, current, or error-free.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2">
                                <li>Product images are for illustrative purposes only</li>
                                <li>Actual colors may vary due to monitor settings and lighting</li>
                                <li>Product dimensions and specifications are approximate</li>
                            </ul>
                        </div>

                        {/* Ordering and Payment */}
                        <div className={`animate-slideInRight delay-700${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">6</span>
                                </span>
                                Ordering and Payment
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                By placing an order, you offer to purchase the product at the price listed. We reserve the right to accept or decline your order
                                for any reason, including but not limited to product availability, errors in pricing or product information.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2">
                                <li>All prices are in USD unless otherwise stated</li>
                                <li>Payment must be made at the time of ordering</li>
                                <li>We accept major credit cards and secure payment methods</li>
                            </ul>
                        </div>

                        {/* Shipping and Delivery */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">7</span>
                                </span>
                                Shipping and Delivery
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Delivery times are estimates and may vary based on product availability and shipping location.
                                Risk of loss and title for items pass to you upon delivery of the items to the carrier.
                            </p>
                        </div>

                        {/* Returns and Refunds */}
                        <div className={`animate-slideInRight delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">8</span>
                                </span>
                                Returns and Refunds
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We want you to be completely satisfied with your purchase. Please review our return policy for detailed information
                                about returning items and receiving refunds.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">9</span>
                                </span>
                                Intellectual Property
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The service and its original content, features, and functionality are and will remain the exclusive property of BOHO Furniture
                                and its licensors. The service is protected by copyright, trademark, and other laws.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className={`animate-slideInRight delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">10</span>
                                </span>
                                Limitation of Liability
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                In no event shall BOHO Furniture, nor its directors, employees, partners, agents, suppliers, or affiliates,
                                be liable for any indirect, incidental, special, consequential, or punitive damages.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">11</span>
                                </span>
                                Changes to Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We reserve the right to modify or replace these terms at any time. If a revision is material,
                                we will try to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className={`animate-slideInRight delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">12</span>
                                </span>
                                Contact Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 font-medium">BOHO Furniture</p>
                                <p className="text-gray-600">Email: info@bohofurniture.com</p>
                                <p className="text-gray-600">Phone: +20 10 80434434</p>
                                <p className="text-gray-600">Address: Armed Forces Buildings, Tower 6, Dajla, Maadi, Cairo, Egypt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-white text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
                    <p className="text-xl mb-8 text-black">
                        Our customer service team is here to help clarify any questions you may have
                    </p>
                    <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Contact Support
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Terms