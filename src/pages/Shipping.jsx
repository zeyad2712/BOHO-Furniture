import React, { useRef, useEffect, useState } from 'react';

function Shipping() {
    const heroRef = useRef(null);
    const sectionsRef = useRef(null);
    const [heroInView, setHeroInView] = useState(false);
    const [sectionsInView, setSectionsInView] = useState(false);

    useEffect(() => {
        const createObserver = (ref, setState) => {
            if (!ref.current) return;
            const observer = new window.IntersectionObserver(
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
            createObserver(sectionsRef, setSectionsInView),
        ];

        return () => observers.forEach((obs) => obs?.disconnect());
    }, []);

    return (
        <div className="min-h-screen bg-white">
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
                            Shipping Policy
                        </h1>
                        <p className={`text-xl text-gray-600 mb-8 animate-fadeInUp delay-200${heroInView ? ' in-view' : ''}`}>
                            Learn about our shipping process, delivery times, and more.
                        </p>
                        <div className={`w-24 h-1 bg-green-500 mx-auto animate-fadeInUp delay-400${heroInView ? ' in-view' : ''}`}></div>
                    </div>
                </div>
            </section>

            {/* Shipping Policy Content */}
            <section ref={sectionsRef} className="py-4">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        {/* Last Updated */}
                        <div className={`text-left animate-fadeInUp delay-100${sectionsInView ? ' in-view' : ''}`}>
                            <p className="text-gray-600">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>

                        {/* Shipping Overview */}
                        <div className={`animate-slideInLeft delay-200${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">1</span>
                                </span>
                                Shipping Overview
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At BOHO Furniture, we strive to deliver your orders quickly, safely, and efficiently. We offer shipping throughout Egypt and selected international destinations.
                            </p>
                        </div>

                        {/* Processing Time */}
                        <div className={`animate-slideInRight delay-300${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">2</span>
                                </span>
                                Order Processing Time
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Orders are typically processed within 1-3 business days after payment confirmation. Custom or made-to-order items may require additional processing time, which will be communicated at checkout.
                            </p>
                        </div>

                        {/* Shipping Methods & Delivery */}
                        <div className={`animate-slideInLeft delay-400${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">3</span>
                                </span>
                                Shipping Methods & Delivery
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li>Standard Delivery: 2-7 business days after dispatch, depending on your location.</li>
                                <li>Express Delivery: 1-3 business days after dispatch (available in select areas).</li>
                                <li>International Shipping: Delivery times vary by destination and customs processing.</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                You will receive a tracking number via email once your order has shipped.
                            </p>
                        </div>

                        {/* Shipping Fees */}
                        <div className={`animate-slideInRight delay-500${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">4</span>
                                </span>
                                Shipping Fees
                            </h2>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li>Shipping fees are calculated at checkout based on your location and order size.</li>
                                <li>Free shipping may be available for orders above a certain amount or during special promotions.</li>
                                <li>International orders may be subject to additional customs duties and taxes, which are the responsibility of the recipient.</li>
                            </ul>
                        </div>

                        {/* Delivery Issues */}
                        <div className={`animate-slideInLeft delay-600${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">5</span>
                                </span>
                                Delivery Issues & Delays
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                While we do our best to ensure timely delivery, delays may occur due to factors beyond our control (e.g., weather, customs, carrier delays). If your order is delayed, please contact our support team for assistance.
                            </p>
                        </div>

                        {/* Damaged or Lost Items */}
                        <div className={`animate-slideInRight delay-700${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">6</span>
                                </span>
                                Damaged or Lost Items
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Please inspect your order upon delivery. If you receive a damaged item or your order is lost in transit, notify us within 48 hours so we can resolve the issue promptly.
                            </p>
                        </div>

                        {/* Address Changes */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">7</span>
                                </span>
                                Address Changes & Incorrect Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Please ensure your shipping address is correct before placing your order. If you need to update your address, contact us as soon as possible. We are not responsible for orders shipped to incorrect addresses provided by the customer.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className={`animate-slideInRight delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">8</span>
                                </span>
                                Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about our shipping policy, please contact us:
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
                    <h2 className="text-3xl font-bold mb-4">Need Help With Your Order?</h2>
                    <p className="text-xl mb-8 text-black">
                        Our customer service team is here to assist you with any shipping questions or concerns.
                    </p>
                    <a
                        href="mailto:info@bohofurniture.com"
                        className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Shipping;