import React from 'react';
import ProductCard from './ProductCard';

// Sample product data for demonstration
const sampleProducts = [
    {
        id: 1,
        name: "Boho Macrame Hanging Chair",
        category: "Chairs",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
        description: "Handcrafted macrame hanging chair with natural cotton rope and wooden seat.",
        rating: 4.8,
        reviews: 127,
        inStock: true,
        features: ["Handcrafted", "Natural materials", "Weight capacity: 300 lbs"],
        colors: ["Natural", "Beige", "White"],
        dimensions: "32\" W x 32\" D x 40\" H"
    },
    {
        id: 2,
        name: "Vintage Rattan Sofa",
        category: "Sofas",
        price: 899.99,
        originalPrice: 1199.99,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
        description: "Elegant vintage-style rattan sofa with comfortable cushions.",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        features: ["Vintage design", "Rattan construction", "Removable cushions"],
        colors: ["Natural rattan", "Stained oak"],
        dimensions: "72\" W x 32\" D x 35\" H"
    },
    {
        id: 3,
        name: "Moroccan Pouf Ottoman",
        category: "Ottomans",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
        description: "Authentic Moroccan leather pouf with traditional geometric patterns.",
        rating: 4.9,
        reviews: 203,
        inStock: false,
        features: ["Genuine leather", "Hand-stitched", "Filled with recycled cotton"],
        colors: ["Camel", "Black", "Navy", "Burgundy"],
        dimensions: "18\" W x 18\" D x 16\" H"
    },
    {
        id: 4,
        name: "Bamboo Coffee Table",
        category: "Tables",
        price: 349.99,
        originalPrice: 449.99,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
        description: "Sustainable bamboo coffee table with a natural finish.",
        rating: 4.7,
        reviews: 156,
        inStock: true,
        features: ["Sustainable bamboo", "Natural finish", "Lower shelf"],
        colors: ["Natural bamboo", "Dark bamboo"],
        dimensions: "48\" W x 24\" D x 18\" H"
    }
];

function BestSelling() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-saddlebrown-600 mb-4" style={{ color: '#8b4513' }}>
                        Best Selling Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most popular boho furniture pieces, handpicked for their quality, style, and customer satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sampleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestSelling;