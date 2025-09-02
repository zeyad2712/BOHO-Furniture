import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function About() {
    const heroRef = useRef(null);
    const storyRef = useRef(null);
    const valuesRef = useRef(null);
    const statsRef = useRef(null);
    const teamRef = useRef(null);

    const [heroInView, setHeroInView] = useState(false);
    const [storyInView, setStoryInView] = useState(false);
    const [valuesInView, setValuesInView] = useState(false);
    const [statsInView, setStatsInView] = useState(false);
    const [teamInView, setTeamInView] = useState(false);

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
                { threshold: 0.2 }
            );
            observer.observe(ref.current);
            return observer;
        };

        const observers = [
            createObserver(heroRef, setHeroInView),
            createObserver(storyRef, setStoryInView),
            createObserver(valuesRef, setValuesInView),
            createObserver(statsRef, setStatsInView),
            createObserver(teamRef, setTeamInView)
        ];

        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    return (
        <div className="min-h-screen bg-transparent">
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes slideInUp {
                    0% { opacity: 0; transform: translateY(60px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes numberCount {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fadeInUp { opacity: 0; }
                .animate-fadeInUp.in-view { animation: fadeInUp 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-fadeInLeft { opacity: 0; }
                .animate-fadeInLeft.in-view { animation: fadeInLeft 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-fadeInRight { opacity: 0; }
                .animate-fadeInRight.in-view { animation: fadeInRight 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-scaleIn { opacity: 0; }
                .animate-scaleIn.in-view { animation: scaleIn 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-slideInUp { opacity: 0; }
                .animate-slideInUp.in-view { animation: slideInUp 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
                .animate-numberCount { opacity: 0; }
                .animate-numberCount.in-view { animation: numberCount 0.8s cubic-bezier(.23,1.01,.32,1) forwards; }
                
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
                            About BOHO Furniture
                        </h1>
                        <p className={`text-xl text-gray-600 mb-8 animate-fadeInUp delay-200${heroInView ? ' in-view' : ''}`}>
                            Crafting beautiful, sustainable furniture that transforms your living spaces into havens of comfort and style.
                        </p>
                        <div className={`w-24 h-1 bg-green-500 mx-auto animate-fadeInUp delay-400${heroInView ? ' in-view' : ''}`}></div>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section ref={storyRef} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={`animate-fadeInLeft${storyInView ? ' in-view' : ''}`}>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Founded in 2018, BOHO Furniture began with a simple vision: to create furniture that doesn't just fill a space, but transforms it.
                                We believe that every home deserves pieces that are both beautiful and built to last.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                What started as a small workshop has grown into a beloved brand, serving thousands of happy customers who share our passion for
                                quality craftsmanship and timeless design.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-green-600 font-semibold">5+ Years of Excellence</span>
                            </div>
                        </div>
                        <div className={`animate-fadeInRight delay-200${storyInView ? ' in-view' : ''}`}>
                            <div className="relative">
                                <div className="w-full h-96 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl shadow-2xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500 rounded-full opacity-20"></div>
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-400 rounded-full opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section ref={valuesRef} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold text-gray-800 mb-6 animate-fadeInUp${valuesInView ? ' in-view' : ''}`}>
                            Our Core Values
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200${valuesInView ? ' in-view' : ''}`}>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🌱",
                                title: "Sustainability",
                                description: "We source eco-friendly materials and use responsible manufacturing practices to protect our planet."
                            },
                            {
                                icon: "✨",
                                title: "Quality",
                                description: "Every piece is crafted with attention to detail, ensuring it meets our high standards of excellence."
                            },
                            {
                                icon: "💝",
                                title: "Customer First",
                                description: "Your satisfaction is our priority. We're here to help you create the home of your dreams."
                            }
                        ].map((value, index) => (
                            <div key={index} className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scaleIn delay-${(index + 1) * 200}${valuesInView ? ' in-view' : ''}`}>
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section ref={statsRef} className="py-20 bg-green-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "10,000+", label: "Happy Customers" },
                            { number: "50,000+", label: "Furniture Pieces Sold" },
                            { number: "98%", label: "Customer Satisfaction" },
                            { number: "25+", label: "Design Awards" }
                        ].map((stat, index) => (
                            <div key={index} className={`animate-numberCount delay-${index * 200}${statsInView ? ' in-view' : ''}`}>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-green-100 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold text-gray-800 mb-6 animate-fadeInUp${teamInView ? ' in-view' : ''}`}>
                            Meet Our Team
                        </h2>
                        <p className={`text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp delay-200${teamInView ? ' in-view' : ''}`}>
                            The passionate people behind BOHO Furniture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Founder & CEO",
                                description: "Visionary leader with 15+ years in furniture design and sustainable business practices."
                            },
                            {
                                name: "Michael Chen",
                                role: "Head of Design",
                                description: "Award-winning designer passionate about creating pieces that stand the test of time."
                            },
                            {
                                name: "Emma Rodriguez",
                                role: "Customer Experience",
                                description: "Dedicated to ensuring every customer interaction exceeds expectations."
                            }
                        ].map((member, index) => (
                            <div key={index} className={`text-center p-6 animate-slideInUp delay-${(index + 1) * 300}${teamInView ? ' in-view' : ''}`}>
                                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-transparent text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-xl mb-8 text-black">
                        Discover our collection of beautiful, sustainable furniture pieces
                    </p>
                    <Link to="/Products" className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Explore Our Collection
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About