import React, { useState } from 'react';

// Emoji icon replacements
const StarIcon = ({ filled, half }) => {
    if (half) {
        // Half star: left side yellow, right side gray
        return (
            <span style={{ position: 'relative', display: 'inline-block', width: '1em' }}>
                <span style={{ color: '#facc15', position: 'absolute', left: 0, width: '50%', overflow: 'hidden' }}>★</span>
                {/* <span style={{ color: '#d1d5db', position: 'absolute', right: 0, width: '50%', overflow: 'hidden', textAlign: 'right' }}>★</span> */}
                <span style={{ opacity: 0 }}>★</span>
            </span>
        );
    }
    return (
        <span className={filled ? "text-yellow-400" : "text-gray-300"}>
            {filled ? '★' : '☆'}
        </span>
    );
};

const HeartIcon = ({ filled, className }) => (
    <span className={className} role="img" aria-label="wishlist" style={{ fontSize: '1.1em', transition: 'color 0.2s' }}>
        {filled ? '❤️' : '🤍'}
    </span>
);

const CartIcon = ({ className }) => (
    <span className={className} role="img" aria-label="cart" style={{ fontSize: '1.1em' }}>
        🛒
    </span>
);

const EyeIcon = ({ className }) => (
    <span className={className} role="img" aria-label="quick view" style={{ fontSize: '1.1em' }}>
        👁️
    </span>
);

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const {
        id,
        name,
        price,
        originalPrice,
        image,
        rating,
        reviews,
        inStock,
        category
    } = product;

    const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
    const hasDiscount = originalPrice && originalPrice > price;

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={i} filled={true} />);
        }

        if (hasHalfStar) {
            stars.push(
                <StarIcon key="half" half={true} />
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} filled={false} />);
        }

        return stars;
    };

    return (
        <div
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Discount Badge */}
            {hasDiscount && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    -{discountPercentage}%
                </div>
            )}

            {/* Out of Stock Badge */}
            {!inStock && (
                <div className="absolute top-3 left-3 z-10 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Out of Stock
                </div>
            )}

            {/* Wishlist Button */}
            <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-300 ${
                    isWishlisted
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                }`}
            >
                <HeartIcon filled={isWishlisted} className={`text-sm ${isWishlisted ? 'animate-pulse' : ''}`} />
            </button>

            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300/f5f5f5/999999?text=Product+Image';
                    }}
                />
                
                {/* Quick View Overlay */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                        <EyeIcon className="text-sm" />
                        Quick View
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Category */}
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
                    {category}
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors duration-200">
                    {name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center gap-1">
                        {renderStars(rating)}
                    </div>
                    <span className="text-sm text-gray-600">({reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-800">
                        ${price.toFixed(2)}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-gray-500 line-through">
                            ${originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    disabled={!inStock}
                    className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        inStock
                            ? 'bg-green-600 text-white hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    <CartIcon className="text-sm" />
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 border-2 border-green-600 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
        </div>
    );
};

export default ProductCard;
