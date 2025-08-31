import React, { useRef, useEffect, useState } from 'react'

/**
 * Animation hook: returns true when the ref is in view (like in NewArrivals.jsx)
 */
function useInView(ref, options = {}) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2, ...options }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options]);

    return inView;
}

function AboutUs() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <>
            <div id='about' className='py-6'></div>
            <section
                className="about-us-section"
                ref={sectionRef}
                style={{
                    padding: '20px 0 36px 0',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: 100,
                    transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
                }}
            >
                <div className="container mx-auto px-4" style={{ maxWidth: 1100 }}>
                    <h2
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            color: '#8b4513',
                            marginBottom: 18,
                            textAlign: 'center',
                            paddingBottom: '20px',
                            transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                        }}
                    >
                        About BOHO
                    </h2>
                    <div
                        className="about-content"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 40,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                        }}
                    >
                        <div
                            className="about-image"
                            style={{
                                flex: '1 1 400px',
                                minWidth: 260,
                                maxWidth: 500,
                                textAlign: 'center',
                                transition: 'opacity 0.7s 0.25s, transform 0.7s 0.25s',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(40px)',
                            }}
                        >
                            {/* The Store Image */}
                            <img
                                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=400&fit=crop"
                                alt="Boho Furniture Store"
                                style={{
                                    width: '100%',
                                    maxWidth: 500,
                                    height: '450px',
                                    borderRadius: 22,
                                    boxShadow: '0 8px 32px rgba(34,197,94,0.10), 0 2px 8px rgba(139,69,19,0.10)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div
                            className="about-text"
                            style={{
                                flex: '2 1 400px',
                                minWidth: 260,
                                maxWidth: 600,
                                background: 'rgba(255,255,255,0.85)',
                                borderRadius: 18,
                                padding: '28px 24px',
                                boxShadow: '0 2px 12px rgba(139,69,19,0.07)',
                                transition: 'opacity 0.7s 0.35s, transform 0.7s 0.35s',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(40px)',
                            }}
                        >
                            <p style={{
                                fontSize: '1.18rem',
                                color: '#374151',
                                marginBottom: 18,
                                lineHeight: 1.7,
                                fontWeight: 500
                            }}>
                                <span style={{ color: '#16a34a', fontWeight: 700 }}>BOHO</span> is your destination for unique, handcrafted furniture and decor that brings warmth, comfort, and a touch of nature into your home. Founded by passionate artisans, we blend modern bohemian style with sustainable materials to create pieces that tell a story.
                            </p>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                fontSize: '1.05rem',
                                color: '#166534',
                                fontWeight: 500,
                                lineHeight: 1.6
                            }}>
                                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span role="img" aria-label="leaf" style={{ fontSize: '1.3em' }}>🌱</span>
                                    <span>Eco-friendly & sustainable materials</span>
                                </li>
                                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span role="img" aria-label="handmade" style={{ fontSize: '1.3em' }}>👐</span>
                                    <span>Handcrafted by skilled artisans</span>
                                </li>
                                <li style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span role="img" aria-label="star" style={{ fontSize: '1.3em' }}>⭐</span>
                                    <span>Quality, comfort, and style guaranteed</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span role="img" aria-label="globe" style={{ fontSize: '1.3em' }}>🌍</span>
                                    <span>Ethically sourced, globally inspired</span>
                                </li>
                            </ul>
                            {/* <p style={{
                            marginTop: 22,
                            color: '#374151',
                            fontSize: '1.08rem',
                            fontWeight: 400
                            }}>
                            Whether you're looking to refresh your living room, bedroom, or outdoor space, our curated collections are designed to inspire and delight. Thank you for supporting small business and sustainable living!
                            </p> */}

                            {/* Learn More Button */}
                            <a
                                href="/about"
                                className="btn mt-3 float-right"
                                style={{
                                    background: '#16a34a',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '17px',
                                    fontWeight: '700',
                                    color: '#fff',
                                    padding: '10px 15px',
                                    textDecoration: 'none',
                                    transition: 'opacity 0.7s 0.4s, transform 0.7s 0.4s',
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                                }}
                            >Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs