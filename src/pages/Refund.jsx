import React, { useRef, useEffect, useState } from 'react';

function Refund() {
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
                            Refund Policy
                        </h1>
                        <p className={`text-xl text-gray-600 mb-8 animate-fadeInUp delay-200${heroInView ? ' in-view' : ''}`}>
                            Your satisfaction is our priority. Learn about our refund and return process.
                        </p>
                        <div className={`w-24 h-1 bg-green-500 mx-auto animate-fadeInUp delay-400${heroInView ? ' in-view' : ''}`}></div>
                    </div>
                </div>
            </section>

            {/* Refund Policy Content */}
            <section ref={sectionsRef} className="py-4">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        {/* Last Updated */}
                        <div className={`text-left animate-fadeInUp delay-100${sectionsInView ? ' in-view' : ''}`}>
                            <p className="text-gray-600">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>

                        {/* Refund Overview */}
                        <div className={`animate-slideInLeft delay-200${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">1</span>
                                </span>
                                Refund Overview
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At BOHO Furniture, we want you to be completely satisfied with your purchase. We offer a comprehensive refund and return policy to ensure your peace of mind when shopping with us.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                If you're not satisfied with your purchase, you may return most items within 30 days of delivery for a full refund or exchange.
                            </p>
                        </div>

                        {/* Eligibility for Returns */}
                        <div className={`animate-slideInRight delay-300${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">2</span>
                                </span>
                                Eligibility for Returns
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                To be eligible for a return, your item must be:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li>In its original condition and packaging</li>
                                <li>Unused and undamaged</li>
                                <li>Returned within 30 days of delivery</li>
                                <li>Accompanied by the original receipt or proof of purchase</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                Custom-made or personalized items may not be eligible for return unless there is a manufacturing defect.
                            </p>
                        </div>

                        {/* Return Process */}
                        <div className={`animate-slideInLeft delay-400${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">3</span>
                                </span>
                                How to Return an Item
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 1: Contact Us</h3>
                                    <p className="text-gray-600">
                                        Contact our customer service team at info@bohofurniture.com or call +20 10 80434434 to initiate your return. Please have your order number ready.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 2: Return Authorization</h3>
                                    <p className="text-gray-600">
                                        We will provide you with a Return Merchandise Authorization (RMA) number and detailed return instructions.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 3: Package and Ship</h3>
                                    <p className="text-gray-600">
                                        Package the item securely in its original packaging and ship it to the address provided. We recommend using a trackable shipping method.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Refund Methods */}
                        <div className={`animate-slideInRight delay-500${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">4</span>
                                </span>
                                Refund Methods & Timeline
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Once we receive and inspect your returned item, we will process your refund:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li><strong>Credit Card:</strong> Refunds will be credited to your original payment method within 5-10 business days</li>
                                <li><strong>Bank Transfer:</strong> Refunds via bank transfer may take 7-14 business days</li>
                                <li><strong>Store Credit:</strong> Store credit is available immediately upon approval</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                You will receive an email confirmation once your refund has been processed.
                            </p>
                        </div>

                        {/* Non-Refundable Items */}
                        <div className={`animate-slideInLeft delay-600${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">5</span>
                                </span>
                                Non-Refundable Items
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The following items are not eligible for return or refund:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li>Custom-made or personalized furniture</li>
                                <li>Items damaged by misuse or normal wear and tear</li>
                                <li>Items returned after 30 days from delivery</li>
                                <li>Items without original packaging or tags</li>
                                <li>Gift cards and promotional items</li>
                            </ul>
                        </div>

                        {/* Damaged or Defective Items */}
                        <div className={`animate-slideInRight delay-700${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">6</span>
                                </span>
                                Damaged or Defective Items
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you receive a damaged or defective item, please contact us immediately. We will arrange for a replacement or full refund at no cost to you. Please do not attempt to repair damaged items as this may void your warranty.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We may request photos of the damage to expedite the resolution process.
                            </p>
                        </div>

                        {/* Return Shipping Costs */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">7</span>
                                </span>
                                Return Shipping Costs
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Return shipping costs are the responsibility of the customer unless the return is due to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li>Our error (wrong item shipped)</li>
                                <li>Defective or damaged item upon arrival</li>
                                <li>Item not as described</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                In these cases, we will provide a prepaid return shipping label.
                            </p>
                        </div>

                        {/* Exchanges */}
                        <div className={`animate-slideInRight delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">8</span>
                                </span>
                                Exchanges
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We offer exchanges for items of equal or greater value. If you wish to exchange an item:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 ml-6 space-y-2 mb-4">
                                <li>Follow the same return process outlined above</li>
                                <li>Specify the item you would like to exchange for</li>
                                <li>Any price difference will be charged or refunded accordingly</li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">9</span>
                                </span>
                                Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about our refund policy or need assistance with a return, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 font-medium">BOHO Furniture</p>
                                <p className="text-gray-600">Email: info@bohofurniture.com</p>
                                <p className="text-gray-600">Phone: +20 10 80434434</p>
                                <p className="text-gray-600">Address: Armed Forces Buildings, Tower 6, Dajla, Maadi, Cairo, Egypt</p>
                                <p className="text-gray-600 mt-2">Business Hours: Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-white text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Help With a Return?</h2>
                    <p className="text-xl mb-8 text-black">
                        Our customer service team is here to help you with any questions about returns or refunds.
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

export default Refund;
