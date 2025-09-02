import React, { useRef, useEffect, useState } from 'react'

function ServicesSection() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let observer;
        if ('IntersectionObserver' in window) {
            observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.2,
                }
            );
            observer.observe(section);
        } else {
            // Fallback for browsers without IntersectionObserver
            setInView(true);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return (
        <section className="py-2 bg-transparent relative" ref={sectionRef}>
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                @keyframes iconPop {
                    0% { transform: scale(0.7);}
                    60% { transform: scale(1.15);}
                    100% { transform: scale(1);}
                }
                .service-animate {
                    opacity: 0;
                }
                .service-animate.in-view {
                    animation: fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) forwards;
                }
                .service-animate-0.in-view { animation-delay: 0.1s; }
                .service-animate-1.in-view { animation-delay: 0.35s; }
                .service-animate-2.in-view { animation-delay: 0.6s; }
                .icon-animate {
                    opacity: 1;
                }
                .icon-animate.in-view {
                    animation: iconPop 0.7s cubic-bezier(.23,1.01,.32,1) forwards;
                }
                `}
            </style>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Free Shipping Block */}
                    <div className={`text-center service-animate service-animate-0${inView ? ' in-view' : ''}`}>
                        <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                            <svg
                                className={`w-12 h-12 text-green-600 icon-animate${inView ? ' in-view' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ animationDelay: inView ? '0.2s' : undefined }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-14 0h14"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-500">Free Shipping</h3>
                        <p className="text-gray-600 transition-all duration-500">On orders over $50</p>
                    </div>

                    {/* Easy Returns Block */}
                    <div className={`text-center service-animate service-animate-1${inView ? ' in-view' : ''}`}>
                        <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                            <svg
                                className={`w-12 h-12 text-green-600 icon-animate${inView ? ' in-view' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ animationDelay: inView ? '0.45s' : undefined }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-500">Easy Returns</h3>
                        <p className="text-gray-600 transition-all duration-500">30-day policy</p>
                    </div>

                    {/* Quality Guarantee Block */}
                    <div className={`text-center service-animate service-animate-2${inView ? ' in-view' : ''}`}>
                        <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                            <svg
                                className={`w-12 h-12 text-green-600 icon-animate${inView ? ' in-view' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ animationDelay: inView ? '0.7s' : undefined }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-500">Quality Guarantee</h3>
                        <p className="text-gray-600 transition-all duration-500">Premium materials</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection