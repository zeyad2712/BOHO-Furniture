import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../data/ProductsData';
import { useCart } from '../context/CartContext';
// import { useParams } from 'react-router-dom';

// Simple star rating component
const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
        stars.push(<span key="half" className="text-yellow-400">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }

    return <div className="flex gap-0.5">{stars}</div>;
};

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addToCart } = useCart();
    const {
        id,
        name,
        price,
        originalPrice,
        image,
        rating,
        reviews,
        inStock,
        category,
    } = product;

    const hasDiscount = originalPrice && originalPrice > price;
    const discountPercentage = hasDiscount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (inStock) {
            addToCart(product, 1);
            // Show success message
            const button = e.target;
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.background = '#22c55e';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#16a34a';
            }, 1500);
        }
    };

    return (
        <div
            className="card h-100 shadow-lg position-relative border-0"
            style={{
                transform: 'scale(1)',
                transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #fff 100%)',
                boxShadow: '0 6px 32px rgba(34,197,94,0.10), 0 1.5px 6px rgba(0,0,0,0.04)'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.035)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(34,197,94,0.18), 0 2px 8px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 32px rgba(34,197,94,0.10), 0 1.5px 6px rgba(0,0,0,0.04)';
            }}
        >
            {/* Image Container - Clickable for navigation */}
            <Link to={`/product/${id}`} className="text-decoration-none">
                <div className="position-relative" style={{ borderRadius: '18px 18px 0 0', overflow: 'hidden' }}>
                    <img
                        src={image}
                        alt={name}
                        className="card-img-top"
                        style={{
                            height: '14rem',
                            objectFit: 'cover',
                            filter: 'brightness(0.82) saturate(1.08)',
                            transition: 'filter 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s',
                            border: 'none',
                            borderRadius: '18px 18px 0 0',
                            boxShadow: '0 2px 12px rgba(34,197,94,0.08)'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.filter = 'brightness(1.04) saturate(1.12)';
                            e.currentTarget.style.transform = 'scale(1.03)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.filter = 'brightness(0.82) saturate(1.08)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />

                    {/* Discount Badge */}
                    {hasDiscount && (
                        <span
                            className="badge position-absolute top-0 start-0 m-2 fs-6"
                            style={{
                                background: 'linear-gradient(90deg, #dc2626 0%, #f87171 100%)',
                                color: '#fff',
                                fontWeight: 700,
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(220,38,38,0.12)'
                            }}
                        >
                            -{discountPercentage}%
                        </span>
                    )}
                    

                    {/* Out of Stock Overlay */}
                    {!inStock && (
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{
                                background: 'rgba(0,0,0,0.32)',
                                zIndex: 3,
                                borderRadius: '18px 18px 0 0'
                            }}
                        >
                            <span
                                className="badge fs-6 py-2 px-3 rounded-pill"
                                style={{
                                    background: 'linear-gradient(90deg, #222 0%, #444 100%)',
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: '1.01rem',
                                    letterSpacing: '0.01em'
                                }}
                            >
                                Out of Stock
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Product Info - Clickable for navigation */}
            <Link to={`/product/${id}`} className="text-decoration-none">
                <div className="card-body d-flex flex-column px-4 py-3" style={{ background: 'transparent', borderRadius: '0 0 18px 18px' }}>
                    {/* Category */}
                    <div
                        className="text-uppercase small fw-semibold mb-2"
                        style={{
                            color: '#16a34a',
                            letterSpacing: '0.08em',
                            fontWeight: 700,
                            fontSize: '0.85rem'
                        }}
                    >
                        {category}
                    </div>

                    {/* Product Name */}
                    <h5
                        className="card-title fw-bold mb-1"
                        style={{
                            minHeight: '2.5em',
                            lineHeight: '1.25em',
                            overflow: 'hidden',
                            color: '#22292f',
                            fontSize: '1.18rem',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        {name}
                    </h5>

                    {/* Rating */}
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <StarRating rating={rating} />
                        <span className="small text-muted" style={{ fontWeight: 500, fontSize: '0.97em' }}>({reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-3 d-flex align-items-end gap-2">
                        <span
                            className="fs-5 fw-bold"
                            style={{
                                color: '#16a34a',
                                fontSize: '1.22rem',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            ${price.toFixed(2)}
                        </span>
                        {hasDiscount && (
                            <span
                                className="text-muted text-decoration-line-through"
                                style={{
                                    fontSize: '1.01rem',
                                    color: '#b0b0b0'
                                }}
                            >
                                ${originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Add to Cart Button - Separate from navigation */}
            <div className="px-4 pb-4">
                <button
                    type="button"
                    disabled={!inStock}
                    onClick={handleAddToCart}
                    className={`btn mt-auto w-100 py-2 shadow-sm ${inStock ? '' : 'btn-secondary disabled'}`}
                    style={{
                        background: inStock
                            ? '#16a34a'
                            : '#cbd5e1',
                        color: inStock ? '#fff' : '#64748b',
                        fontWeight: 700,
                        border: 'none',
                        borderRadius: '9px',
                        fontSize: '1.08rem',
                        letterSpacing: '0.01em',
                        boxShadow: inStock
                            ? '0 2px 8px rgba(34,197,94,0.10)'
                            : '0 1px 4px rgba(0,0,0,0.06)',
                        transition: 'background 0.2s, color 0.2s, scale 0.2s'
                    }}
                    onMouseEnter={e => {
                        if (inStock) e.currentTarget.style.scale = '1.03';
                    }}
                    onMouseLeave={e => {
                        if (inStock) e.currentTarget.style.scale = '1';
                    }}
                >
                    {inStock ? (
                        <>
                            <i className="fa-solid fa-cart-plus me-2" style={{ color: "#fef08a" }}></i>
                            Add to Cart
                        </>
                    ) : (
                        <>
                            <i className="fa-solid fa-ban me-2"></i>
                            Out of Stock
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
