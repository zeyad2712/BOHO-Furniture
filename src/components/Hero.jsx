import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
// Counter animation hook
function useCounter(to, duration = 4000) { // Slowed down: duration doubled from 6000ms to 12000ms
    const [count, setCount] = useState(0);
    const ref = useRef();
    useEffect(() => {
        let start = 0;
        let startTime = null;
        function animateCounter(ts) {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * (to - start) + start));
            if (progress < 1) {
                ref.current = requestAnimationFrame(animateCounter);
            } else {
                setCount(to);
            }
        }
        ref.current = requestAnimationFrame(animateCounter);
        return () => cancelAnimationFrame(ref.current);
    }, [to, duration]);
    return count;
}

function Stat({ value, label, color, suffix = '' }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color }}>
                {value}
                {suffix}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{label}</div>
        </div>
    );
}

function Hero() {
    const happyCustomers = useCounter(500, 4000);
    const uniqueDesigns = useCounter(50, 4000);
    const sustainable = useCounter(100, 4000);

    return (
        <section
            className="hero-section"
            style={{
                width: '100%',
                minHeight: '90vh',
                backgroundColor: '#fefae0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
                position: 'relative',
                overflow: 'hidden',
                padding: '0 2rem',
                marginBottom: '10px',
                '@media (max-width: 768px)': {
                    minHeight: '100vh',
                },
            }}
        >
            {/* Background decorative elements */}
            <div
                className="bg-decoration-1"
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite',
                    zIndex: 0,
                }}
            />
            <div
                className="bg-decoration-2"
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '8%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(139, 69, 19, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse',
                    zIndex: 0,
                }}
            />

            {/* Decorative elements with improved positioning and styling */}
            <svg
                className="bg-decoration-3"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '12%',
                    zIndex: 0,
                    opacity: 0.18,
                    pointerEvents: 'none',
                    animation: 'spin 18s linear infinite',
                    willChange: 'transform',
                }}
                tabIndex={-1}
                aria-hidden="true"
            >
                <circle cx="60" cy="60" r="55" stroke="#22c55e" strokeWidth="6" />
            </svg>
            <svg
                className="bg-decoration-4"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    zIndex: 0,
                    opacity: 0.13,
                    pointerEvents: 'none',
                    animation: 'floatY 7s ease-in-out infinite',
                    willChange: 'transform',
                }}
                tabIndex={-1}
                aria-hidden="true"
            >
                <rect x="10" y="10" width="60" height="60" rx="18" stroke="#8b4513" strokeWidth="5" />
            </svg>

            {/* Hero content */}
            <div
                className="hero-content"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: 1200,
                    width: '100%',
                    gap: 64,
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Left: Text Content */}
                <div
                    className="hero-text"
                    style={{
                        flex: 1,
                        minWidth: 320,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 32,
                        padding: '2rem 0',
                        opacity: 0,
                        transform: 'translateY(40px)',
                        animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                    }}
                >
                    <div
                        className="hero-badge"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: 20,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            width: 'fit-content',
                            opacity: 0,
                            transform: 'translateY(20px)',
                            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
                            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.25)',
                        }}
                    >
                        <span style={{ fontSize: '1.2em' }}>✨</span>
                        Handcrafted with Love
                    </div>

                    <h1
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            color: '#1f2937',
                            margin: 0,
                            lineHeight: 1.1,
                            fontFamily: `'Inter', 'Segoe UI', Arial, sans-serif`,
                            opacity: 0,
                            transform: 'translateY(40px)',
                            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards',
                        }}
                    >
                        <span
                            className="gradient-text"
                            style={{
                                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #8b4513 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                                backgroundSize: '200% auto',
                                animation: 'gradientShift 4s ease-in-out infinite',
                            }}
                        >
                            Timeless
                        </span>{' '}
                        Furniture for{' '}
                        <span style={{
                            color: '#8b4513',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            Modern Living
                            <span style={{
                                content: '""',
                                position: 'absolute',
                                bottom: '-4px',
                                left: 0,
                                width: '100%',
                                height: '3px',
                                background: 'linear-gradient(90deg, #8b4513, #22c55e)',
                                borderRadius: '2px',
                                transform: 'scaleX(0)',
                                transformOrigin: 'left',
                                animation: 'underlineGrow 1.2s ease-out 1.8s forwards'
                            }} />
                        </span>
                    </h1>

                    <p
                        className="hero-desc"
                        style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            color: '#6b7280',
                            margin: 0,
                            maxWidth: 480,
                            fontWeight: 400,
                            lineHeight: 1.7,
                            opacity: 0,
                            transform: 'translateY(40px)',
                            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards',
                        }}
                    >
                        Discover our collection of premium furniture that combines natural beauty with contemporary design.
                        Each piece tells a story of craftsmanship and sustainability.
                    </p>

                    <div
                        className="hero-stats"
                        style={{
                            display: 'flex',
                            gap: 32,
                            opacity: 0,
                            transform: 'translateY(40px)',
                            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Stat value={`${happyCustomers}+`} label="Happy Customers" color="#22c55e" />
                        <Stat value={`${uniqueDesigns}+`} label="Unique Designs" color="#8b4513" />
                        <Stat value={`${sustainable}%`} label="Sustainable" color="#22c55e" />
                    </div>

                    <div
                        className="hero-buttons"
                        style={{
                            display: 'flex',
                            gap: 16,
                            opacity: 0,
                            transform: 'translateY(40px)',
                            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Link
                            to="/products"
                            className="btn-primary"
                            style={{
                                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '1rem',
                                padding: '16px 32px',
                                borderRadius: 12,
                                textDecoration: 'none',
                                border: 'none',
                                boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.4)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';
                            }}
                        >
                            <span>Shop Collection</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>

                        {/* <Link
                            to="/gallery"
                            className="btn-outline"
                            style={{
                                background: 'transparent',
                                color: '#8b4513',
                                fontWeight: 600,
                                fontSize: '1rem',
                                padding: '16px 32px',
                                borderRadius: 12,
                                textDecoration: 'none',
                                border: '2px solid #8b4513',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.background = '#8b4513';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#8b4513';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <span>View Gallery</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg>
                        </Link> */}
                    </div>
                </div>

                {/* Right: Hero Image */}
                <div
                    className="hero-image-container"
                    style={{
                        flex: 1,
                        minWidth: 320,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <div
                        className="hero-image-wrapper"
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: 480,
                            height: 480,
                            borderRadius: 24,
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(139, 69, 19, 0.15)',
                            opacity: 0,
                            transform: 'scale(0.9) translateY(40px)',
                            animation: 'fadeInZoom 1s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards',
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                            alt="Elegant Furniture Collection"
                            className="hero-image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 24,
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />

                        {/* Decorative overlay */}
                        <div
                            className="hero-overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)',
                                borderRadius: 24,
                                pointerEvents: 'none',
                            }}
                        />
                    </div>

                    {/* Floating elements */}
                    <div
                        className="floating-card"
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '-20px',
                            background: 'white',
                            padding: '16px',
                            borderRadius: 12,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            opacity: 0,
                            transform: 'translateX(40px)',
                            animation: 'slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    background: '#22c55e',
                                    borderRadius: '50%',
                                }}
                            />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937' }}>
                                Eco-Friendly
                            </span>
                        </div>
                    </div>

                    <div
                        className="floating-card"
                        style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '-30px',
                            background: 'white',
                            padding: '16px',
                            borderRadius: 12,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(139, 69, 19, 0.2)',
                            opacity: 0,
                            transform: 'translateX(-40px)',
                            animation: 'slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) 2.2s forwards',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    background: '#8b4513',
                                    borderRadius: '50%',
                                }}
                            />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937' }}>
                                Handcrafted
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll down indicator */}
            <div className="scroll-down" style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                opacity: 0,
                animation: 'fadeIn 1s ease-out 2.5s forwards',
            }}>
                <div style={{
                    width: '30px',
                    height: '50px',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '15px',
                    border: '2px solid #22c55e',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '8px'
                }}>
                    <div style={{
                        width: '4px',
                        height: '10px',
                        borderRadius: '2px',
                        backgroundColor: '#22c55e',
                        animation: 'scrollBounce 2s infinite'
                    }}></div>
                </div>
                <p style={{
                    marginTop: '8px',
                    fontSize: '0.875rem',
                    color: '#4b5563',
                    textAlign: 'center'
                }}>Scroll to explore</p>
            </div>

            {/* Animations */}
            <style>
                {`
        @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInZoom {
            0% { opacity: 0; transform: scale(0.9) translateY(40px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes underlineGrow {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
        }
        @keyframes scrollBounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(5px); }
            60% { transform: translateY(3px); }
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        @media (max-width: 1024px) {
            .hero-content {
            flex-direction: column !important;
            gap: 48px !important;
            text-align: center !important;
            }
            .hero-title {
            font-size: 2.5rem !important;
            }
            .hero-image-wrapper {
            width: 100% !important;
            max-width: 400px !important;
            height: 400px !important;
            }
            .hero-stats {
            justify-content: center !important;
            }
            .hero-buttons {
            justify-content: center !important;
            flex-wrap: wrap !important;
            }
            .hero-badge {
                margin: 0 auto;
            }
            .scroll-down {
            display: none !important;
            }
        }

        @media (max-width: 768px) {
            .hero-section {
            padding: 0 1rem !important;
            min-height: 80vh !important;
            }
            .hero-title {
            font-size: 2rem !important;
            }
            .hero-desc {
            font-size: 1.1rem !important;
            }
            .hero-image-wrapper {
            height: 300px !important;
            }
            .floating-card {
            display: none !important;
            }
            .bg-decoration-3,
            .bg-decoration-4,
            .bg-decoration-5,
            .bg-decoration-6,
            .bg-decoration-7 {
            display: none !important;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
            font-size: 1.75rem !important;
            }
            .hero-desc {
            font-size: 1rem !important;
            }
            .hero-stats {
            gap: 20px !important;
            }
            .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
            }
            .btn-primary, .btn-outline {
            width: 100% !important;
            justify-content: center !important;
            }
        }
        `}
            </style>
        </section>
    );
}

export default Hero;