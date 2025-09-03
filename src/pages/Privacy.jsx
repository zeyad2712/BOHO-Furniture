import React, { useRef, useEffect, useState } from 'react';

function Privacy() {
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
                            Privacy Policy
                        </h1>
                        <p className={`text-xl text-gray-600 mb-8 animate-fadeInUp delay-200${heroInView ? ' in-view' : ''}`}>
                            Your privacy is important to us. Learn how we collect, use, and protect your information.
                        </p>
                        <div className={`w-24 h-1 bg-green-500 mx-auto animate-fadeInUp delay-400${heroInView ? ' in-view' : ''}`}></div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section ref={sectionsRef} className="py-4">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {/* Introduction */}
                        <div className={`animate-slideInLeft delay-100${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">1</span>
                                </span>
                                Introduction
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                This Privacy Policy describes how BOHO Furniture ("we", "us", or "our") collects, uses, and protects your personal information when you visit or make a purchase from our website.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className={`animate-slideInRight delay-200${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">2</span>
                                </span>
                                Information We Collect
                            </h2>
                            <ul className="list-disc pl-8 text-gray-600 mb-4">
                                <li>
                                    <span className="font-semibold">Personal Information:</span> Name, email address, phone number, shipping address, billing address, and payment details.
                                </li>
                                <li>
                                    <span className="font-semibold">Order Information:</span> Details about products you purchase, order history, and preferences.
                                </li>
                                <li>
                                    <span className="font-semibold">Device Information:</span> IP address, browser type, device type, and cookies.
                                </li>
                                <li>
                                    <span className="font-semibold">Usage Data:</span> Pages visited, time spent on site, and referring URLs.
                                </li>
                            </ul>
                        </div>

                        {/* How We Use Your Information */}
                        <div className={`animate-slideInLeft delay-300${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">3</span>
                                </span>
                                How We Use Your Information
                            </h2>
                            <ul className="list-disc pl-8 text-gray-600 mb-4">
                                <li>To process and fulfill your orders.</li>
                                <li>To communicate with you about your order, products, or promotions.</li>
                                <li>To improve our website, products, and services.</li>
                                <li>To detect and prevent fraud or misuse of our services.</li>
                                <li>To comply with legal obligations.</li>
                            </ul>
                        </div>

                        {/* Sharing Your Information */}
                        <div className={`animate-slideInRight delay-400${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">4</span>
                                </span>
                                Sharing Your Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information with trusted third parties to:
                            </p>
                            <ul className="list-disc pl-8 text-gray-600 mb-4">
                                <li>Process payments and deliver orders (e.g., payment processors, shipping companies).</li>
                                <li>Comply with legal requirements or protect our rights.</li>
                                <li>Provide marketing or analytics services (with your consent, where required).</li>
                            </ul>
                        </div>

                        {/* Cookies and Tracking */}
                        <div className={`animate-slideInLeft delay-500${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">5</span>
                                </span>
                                Cookies & Tracking Technologies
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.
                            </p>
                        </div>

                        {/* Data Security */}
                        <div className={`animate-slideInRight delay-600${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">6</span>
                                </span>
                                Data Security
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className={`animate-slideInLeft delay-700${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">7</span>
                                </span>
                                Your Rights & Choices
                            </h2>
                            <ul className="list-disc pl-8 text-gray-600 mb-4">
                                <li>You may access, update, or delete your personal information by contacting us.</li>
                                <li>You may opt out of marketing communications at any time.</li>
                                <li>You may disable cookies in your browser settings.</li>
                            </ul>
                        </div>

                        {/* Changes to Policy */}
                        <div className={`animate-slideInRight delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">8</span>
                                </span>
                                Changes to This Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                            </p>
                        </div>

                        {/* Contact Us */}
                        <div className={`animate-slideInLeft delay-800${sectionsInView ? ' in-view' : ''}`}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                    <span className="text-green-600 font-bold text-sm">9</span>
                                </span>
                                Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy or your personal information, please contact us:
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
                    <h2 className="text-3xl font-bold mb-4">Have Questions About Your Privacy?</h2>
                    <p className="text-xl mb-8 text-black">
                        Our team is here to help you with any privacy-related concerns or requests.
                    </p>
                    <a
                        href="mailto:info@bohofurniture.com"
                        className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Privacy Support
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Privacy;