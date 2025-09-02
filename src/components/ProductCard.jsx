import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../data/ProductsData';
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
        // Add to cart functionality would go here
        alert(`Added ${name} to cart!`);
    };

    return (
        <div className="card h-100 shadow-sm position-relative border-none"
            style={{ transform: 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', borderRadius: '10px' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {/* Image Container - Clickable for navigation */}
            <Link to={`/product/${id}`} className="text-decoration-none">
                <div className="position-relative">
                    <img
                        src={image}
                        alt={name}
                        className="card-img-top"
                        style={{ height: '13rem', objectFit: 'cover', filter: 'brightness(0.6)', transition: 'filter 0.5s cubic-bezier(0.4,0,0.2,1)', border: 'none !important', borderRadius: '10px 10px 0 0' }}
                        // onError={(e) => {
                        //     e.target.src = 'https://via.placeholder.com/300x200/f5f5f5/999999?text=Product+Image';
                        // }}
                        onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.03)'}
                        onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0.6)'}
                    />

                    {/* Discount Badge */}
                    {hasDiscount && (
                        <span className="badge bg-danger position-absolute top-0 start-0 m-2 fs-6">
                            -{discountPercentage}%
                        </span>
                    )}

                    {/* Wishlist Button */}
                    {/* <button
                        type="button"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className={`btn btn-sm rounded-circle position-absolute top-0 end-0 m-2 ${isWishlisted
                            ? 'btn-danger text-white'
                            : 'btn-light text-secondary'
                            }`}
                        style={{ zIndex: 2 }}
                    >
                        <span className="fs-5">{isWishlisted ? '❤️' : '🤍'}</span>
                    </button> */}

                    {/* Out of Stock Overlay */}
                    {!inStock && (
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.3)', zIndex: 3 }}>
                            <span className="badge bg-dark fs-6 py-2 px-3 rounded-pill">
                                Out of Stock
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Product Info - Clickable for navigation */}
            <Link to={`/product/${id}`} className="text-decoration-none">
                <div className="card-body d-flex flex-column">
                    {/* Category */}
                    <div className="text-uppercase text-secondary small fw-semibold mb-2">
                        {category}
                    </div>

                    {/* Product Name */}
                    <h5 className="card-title fw-semibold mb-0" style={{ minHeight: '2.5em', lineHeight: '1.25em', overflow: 'hidden' }}>
                        {name}
                    </h5>

                    {/* Rating */}
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <StarRating rating={rating} />
                        <span className="small text-muted">({reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                        <span className="fs-5 fw-bold text-dark me-2">
                            ${price.toFixed(2)}
                        </span>
                        {hasDiscount && (
                            <span className="text-muted text-decoration-line-through">
                                ${originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Add to Cart Button - Separate from navigation */}
            <div className="px-3 pb-3">
                <button
                    type="button"
                    disabled={!inStock}
                    onClick={handleAddToCart}
                    className={`btn mt-auto w-100 py-2 ${inStock
                        ? 'btn-dark'
                        : 'btn-secondary disabled'
                        }`}
                    style={{
                        background: '#16a34a',
                        transition: 'scale 0.3s cubic-bezier(0.4,0,0.2,1)',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '17px',
                        fontWeight: '700',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.scale = '1.02';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.scale = '1';
                    }}
                >
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
