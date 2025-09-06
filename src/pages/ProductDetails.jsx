import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData, getProductById } from '../data/ProductsData';
import { useCart } from '../context/CartContext';
import '../App.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const product = getProductById(parseInt(id));

    // Generate multiple images for the product (in real app, these would come from API)
    const productImages = [
        product?.image || '/images/products/placeholder.jpg',
        product?.image || '/images/products/placeholder.jpg',
        product?.image || '/images/products/placeholder.jpg',
        product?.image || '/images/products/placeholder.jpg'
    ];

    // Get related products
    const relatedProducts = productsData
        .filter(p => p.category === product?.category && p.id !== product?.id)
        .slice(0, 4);

    useEffect(() => {
        if (product && product.colors && product.colors.length > 0) {
            setSelectedColor(product.colors[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
                <button
                    onClick={() => navigate('/products')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        if (product && product.inStock) {
            // Add the product to cart with the selected quantity
            addToCart(product, quantity);

            // Show success message
            const button = document.querySelector('.add-to-cart-btn');
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Added!';
                button.style.background = '#22c55e';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '#16a34a';
                }, 1500);
            }
        }
    };

    const handleBuyNow = () => {
        // Buy now functionality would go here
        alert('Redirecting to checkout...');
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            );
        }

        return stars;
    };

    return (
        <div className="min-h-[80vh] bg-transparent">
            {/* Breadcrumb */}
            <div className="border-b bg-white">
                <div className="container mx-auto px-4 py-2">
                    <nav className="flex text-sm text-gray-600 gap-2">
                        <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
                        <span>/</span>
                        <button onClick={() => navigate('/products')} className="hover:text-blue-600">Products</button>
                        <span>/</span>
                        <span className="text-gray-800">{product.name}</span>
                    </nav>
                </div>
            </div>

            <div className="container px-2 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="space-y-3">
                        {/* Main Image */}
                        <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg min-h-[320px] max-h-[480px] w-100 flex items-center justify-center">
                            <img
                                src={productImages[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-2">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                        ? 'border-blue-500 shadow-lg'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    style={{ minHeight: 56, minWidth: 56 }}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-5">
                        {/* Product Header */}
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-1">{product.name}</h1>
                            <p className="text-base text-gray-600 mb-2">{product.category}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                    {renderStars(product.rating)}
                                </div>
                                <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl font-bold text-orange-900">${product.price}</span>
                                {product.originalPrice > product.price && (
                                    <span className="text-base text-gray-400 line-through">${product.originalPrice}</span>
                                )}
                                {product.originalPrice > product.price && (
                                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-700 leading-relaxed text-m">{product.description}</p>
                        </div>

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div>
                                <h3 className="text-base font-semibold text-gray-800 mb-2">Color</h3>
                                <div className="flex gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-3 py-1.5 rounded-md border-2 transition-all text-sm ${selectedColor === color
                                                ? 'border-orange-900 bg-orange-900 text-white'
                                                : 'border-green-300 hover:border-green-400'
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 mb-2">Quantity</h3>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-50"
                                    style={{
                                        border: '1px solid #16a34a',
                                        color: 'black',
                                        fontWeight: '700',
                                    }}
                                >
                                    -
                                </button>
                                <span className="text-base font-medium w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-50"
                                    style={{
                                        border: '1px solid #16a34a',
                                        color: 'black',
                                        fontWeight: '700',
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className={product.inStock ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                                className="add-to-cart-btn flex-1 bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-base"
                            >
                                Add to Cart
                            </button>
                            {/* Wishlist Button */}
                            <button

                                className="bg-orange-50 text-black py-2.5 px-4 border border-orange-900 rounded-lg font-medium hover:bg-green-600 hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                            >
                                <i className="fa-regular fa-heart"></i>
                            </button>
                            {/* <button
                                onClick={handleBuyNow}
                                disabled={!product.inStock}
                                className="flex-1 bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-base"
                            >
                                Buy Now
                            </button> */}
                        </div>

                        {/* Features */}
                        {product.features && (
                            <div>
                                <h3 className="text-base font-semibold text-gray-800 mb-2">Key Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Dimensions */}
                        {product.dimensions && (
                            <div>
                                <h3 className="text-base font-semibold text-gray-800 mb-2">Dimensions</h3>
                                <p className="text-gray-700 text-sm">{product.dimensions}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-12">
                    <div className="border-b border-gray-200">
                        <nav className="flex gap-6">
                            {['description', 'reviews', 'shipping', 'returns'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-3 px-1 border-b-2 font-medium text-sm capitalize ${activeTab === tab
                                        ? 'border-orange-900 text-orange-900'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="py-6 px-3">
                        {activeTab === 'description' && (
                            <div className="prose max-w-none">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Description</h3>
                                <p className="text-gray-700 leading-relaxed mb-3 text-sm">{product.description}</p>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    This beautiful piece combines traditional craftsmanship with modern design sensibilities,
                                    making it the perfect addition to any boho-inspired home. Each item is carefully crafted
                                    using sustainable materials and time-honored techniques, ensuring both beauty and durability.
                                </p>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h3>
                                <div className="space-y-4">
                                    {/* Sample Reviews */}
                                    <div className="border-b border-gray-200 pb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex">
                                                {renderStars(5)}
                                            </div>
                                            <span className="font-medium text-gray-800 text-sm">Sarah M.</span>
                                            <span className="text-xs text-gray-500">2 days ago</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            "Absolutely love this piece! The quality is exceptional and it fits perfectly
                                            in my boho living room. Highly recommend!"
                                        </p>
                                    </div>
                                    <div className="border-b border-gray-200 pb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex">
                                                {renderStars(4)}
                                            </div>
                                            <span className="font-medium text-gray-800 text-sm">Mike R.</span>
                                            <span className="text-xs text-gray-500">1 week ago</span>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            "Great product, fast shipping. The only minor issue was assembly, but overall
                                            very satisfied with the purchase."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'shipping' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Shipping Information</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="font-medium text-sm">Standard Shipping</span>
                                        <span className="text-gray-600 text-sm">5-7 business days</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span className="font-medium text-sm">Express Shipping</span>
                                        <span className="text-gray-600 text-sm">2-3 business days</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-medium text-sm">Free Shipping</span>
                                        <span className="text-green-600 text-sm">Orders over $500</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'returns' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Return Policy</h3>
                                <div className="space-y-3">
                                    <p className="text-gray-700 text-sm">
                                        We offer a 30-day return policy for all unused items in their original packaging.
                                        Return shipping is free for defective items. Please contact our customer service
                                        team to initiate a return.
                                    </p>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <h4 className="font-medium text-blue-800 mb-1 text-sm">Return Requirements:</h4>
                                        <ul className="text-blue-700 text-xs space-y-0.5">
                                            <li>• Item must be unused and in original condition</li>
                                            <li>• Original packaging must be intact</li>
                                            <li>• Return must be initiated within 30 days</li>
                                            <li>• Return authorization number required</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedProducts.map((relatedProduct) => (
                                // the Related Product Card
                                <div
                                    key={relatedProduct.id}
                                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.scale = 1.05;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.scale = 1;
                                    }}
                                    style={{ transition: 'all 0.3s ease-in-out' }}
                                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-full aspect-square min-h-[120px] max-h-[180px]">
                                        <img
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-gray-800 mb-1 text-base">{relatedProduct.name}</h3>
                                        <div className="flex items-center gap-1 mb-1">
                                            {renderStars(relatedProduct.rating)}
                                            <span className="text-xs text-gray-600">({relatedProduct.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold text-blue-600 text-base">${relatedProduct.price}</span>
                                            {relatedProduct.originalPrice > relatedProduct.price && (
                                                <span className="text-xs text-gray-400 line-through">${relatedProduct.originalPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;