import React, { useState, useMemo, useRef, useEffect } from 'react';
import { productsData } from '../data/ProductsData';
import ProductCard from '../components/ProductCard';
import '../App.css';

// Helper for staggered animation
const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [minRating, setMinRating] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [animateKey, setAnimateKey] = useState(0);

    // Get unique categories from products data
    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(productsData.map(product => product.category))];
        return ['All', ...uniqueCategories];
    }, []);

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = productsData.filter(product => {
            // Category filter
            if (selectedCategory !== 'All' && product.category !== selectedCategory) {
                return false;
            }

            // Price range filter
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false;
            }

            // Rating filter
            if (product.rating < minRating) {
                return false;
            }

            // Search filter
            if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }

            return true;
        });

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'reviews':
                    return b.reviews - a.reviews;
                default:
                    return 0;
            }
        });

        return filtered;
    }, [selectedCategory, priceRange, minRating, searchTerm, sortBy]);

    // Animate grid on filter/sort/search change
    const prevFilteredProducts = usePrevious(filteredProducts);
    useEffect(() => {
        setAnimateKey(k => k + 1);
    }, [filteredProducts]);

    const clearFilters = () => {
        setSelectedCategory('All');
        setPriceRange([0, 2000]);
        setMinRating(0);
        setSearchTerm('');
        setSortBy('name');
    };

    // Animation CSS (could be moved to a CSS file)
    const gridAnimationStyle = `
    .product-fadein {
        opacity: 0;
        transform: translateY(30px) scale(0.98);
        animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) forwards;
    }
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    `;

    return (
        <div className="container mx-auto px-4 py-8">
            <style>{gridAnimationStyle}</style>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    <span
                        style={{
                            display: 'inline-block',
                            transition: 'color 0.5s cubic-bezier(.23,1.01,.32,1)',
                            color: 'rgb(139, 69, 19)',
                            textShadow: '0 2px 16px #bbf7d0, 0 1px 0 #fff'
                        }}
                    >
                        All Products
                    </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our complete collection of beautiful boho furniture pieces.
                </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-transparent rounded-lg p-6 mb-4 transition-all duration-500 ease-in-out"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Search */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Search
                        </label>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        />
                    </div>

                    {/* Category Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price Range: ${priceRange[0]} - ${priceRange[1]}
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                placeholder="Min"
                                value={priceRange[0]}
                                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Min Rating: {minRating}+
                        </label>
                        <select
                            value={minRating}
                            onChange={(e) => setMinRating(parseFloat(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            <option value={0}>Any Rating</option>
                            <option value={4.5}>4.5+ Stars</option>
                            <option value={4.0}>4.0+ Stars</option>
                            <option value={3.5}>3.5+ Stars</option>
                        </select>
                    </div>

                    {/* Sort */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sort By
                        </label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            <option value="name">Name A-Z</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                            <option value="reviews">Most Reviews</option>
                        </select>
                    </div>
                </div>

                {/* Clear Filters Button */}
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={clearFilters}
                        className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
                    >
                        Clear All Filters
                    </button>
                    <span className="text-m font-bold text-gray-600 transition-all duration-300">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    </span>
                </div>
            </div>

            {/* Products Grid with smooth animation */}
            {filteredProducts.length > 0 ? (
                <div
                    key={animateKey}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    style={{
                        transition: 'opacity 0.5s cubic-bezier(.23,1.01,.32,1), transform 0.5s cubic-bezier(.23,1.01,.32,1)',
                        opacity: 1,
                    }}
                >
                    {filteredProducts.map((product, idx) => (
                        <div
                            key={product.id}
                            className="product-fadein"
                            style={{
                                animationDelay: `${idx * 60 + 60}ms`,
                                willChange: 'opacity, transform',
                            }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 animate-fadein">
                    <p className="text-lg text-gray-600 mb-4 transition-all duration-500">No products found matching your criteria.</p>
                    <button
                        onClick={clearFilters}
                        className="px-6 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors duration-300"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
