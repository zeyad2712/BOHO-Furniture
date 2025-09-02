import React, { useRef, useEffect, useState } from 'react'
import { productsData } from '../data/ProductsData'
import ProductCard from './ProductCard'

const sampleProducts = productsData.slice(0, 4);

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

function NewArrivals() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <>
            <div id='new-arrivals' className='py-6'></div>
            <section
                className="new-arrivals-section"
                id="new-arrivals"
                ref={sectionRef}
                style={{
                    minHeight: 100,
                    transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
                }}
            >
                <div className="container mx-auto px-2">
                    <div
                        className="text-center px-3 d-flex justify-between align-items-center lg:flex-row flex-col"
                        style={{
                            transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                        }}
                    >
                        <h2
                            className="font-bold text-saddlebrown-600 mb-4 text-center"
                            style={{
                                color: '#8b4513',
                                fontSize: '2.3rem',
                                transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                            }}
                        >
                            New Arrivals
                        </h2>
                        {/* View All Button */}
                        <a
                            href="/products"
                            className="btn"
                            style={{
                                background: '#16a34a',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '17px',
                                fontWeight: '700',
                                color: '#fff',
                                padding: '10px 15px',
                                textDecoration: 'none',
                                transition: 'opacity 0.7s 0.3s, transform 0.7s 0.3s',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                            }}
                        >
                            View All
                        </a>
                    </div>
                    {/* <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
                    Discover our latest arrivals, handpicked for their quality, style, and customer satisfaction.
                </p> */}
                    <div
                        className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
                        style={{
                            transition: 'opacity 0.8s 0.25s, transform 0.8s 0.25s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(40px)',
                        }}
                    >
                        {sampleProducts.map((product, idx) => (
                            <div
                                key={product.id}
                                style={{
                                    transition: `opacity 0.7s ${0.3 + idx * 0.1}s, transform 0.7s ${0.3 + idx * 0.1}s`,
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
                                }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrivals