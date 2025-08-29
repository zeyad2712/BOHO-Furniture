import React, { useState } from 'react';
import { productsData, categories, getProductsByCategory, getFeaturedProducts, getOnSaleProducts } from '../data/ProductsData';
import '../App.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = getProductsByCategory(selectedCategory).filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredProducts = getFeaturedProducts();
  const onSaleProducts = getOnSaleProducts();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.price < product.originalPrice && (
          <div className="sale-badge">SALE</div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-text">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.price < product.originalPrice && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        <p className="product-description">{product.description.substring(0, 100)}...</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to BOHO Furniture</h1>
          <p>Discover unique, handcrafted furniture that brings warmth and character to your home</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for furniture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* On Sale Products */}
      <section className="sale-section">
        <h2>On Sale</h2>
        <div className="products-grid">
          {onSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="all-products-section">
        <h2>All Products</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
