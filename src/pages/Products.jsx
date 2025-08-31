import React from 'react';
import { productsData } from '../data/ProductsData';
import ProductCard from '../components/ProductCard';
import '../App.css';
const Products = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    All Products
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our complete collection of beautiful boho furniture pieces.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
