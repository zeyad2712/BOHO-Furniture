import React, { useRef, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data/ProductsData';
import { Link } from 'react-router-dom';

// Sample product data for demonstration
const sampleProducts = productsData.slice(0, 4);

// Animation hook (copied from NewArrivals.jsx)
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

function BestSelling() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <>
            <div id='best-selling' className='py-6'></div>
            <section
                className="best-selling-section"
                id="best-selling"
                ref={sectionRef}
                style={{
                    minHeight: 100,
                    transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
                }}
            >
                <div className="container mx-auto px-4">
                    <div
                        className="text-center mb-12 d-flex justify-between align-items-center lg:flex-row flex-col"
                        style={{
                            transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                        }}
                    >
                        <h2
                            className="font-bold text-saddlebrown-600 mb-4 lg-text-600"
                            style={{
                                color: '#8b4513',
                                fontSize: '2.3rem',
                                transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                            }}
                        >
                            Best Selling Products
                        </h2>
                        {/* View all Button */}
                        <Link
                            to="/products"
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
                                transition: 'opacity 0.7s 0.25s, transform 0.7s 0.25s',
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                            }}
                        >
                            View All
                        </Link>
                        {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most popular boho furniture pieces, handpicked for their quality, style, and customer satisfaction.
                    </p> */}
                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        style={{
                            transition: 'opacity 0.8s 0.25s, transform 0.8s 0.25s',
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0px)' : 'translateY(20px)',
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
    );
}

export default BestSelling;