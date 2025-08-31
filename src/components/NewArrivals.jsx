import React from 'react'
import { productsData } from '../data/ProductsData'
import ProductCard from './ProductCard'

const sampleProducts = productsData.slice(0, 4);

function NewArrivals() {
    return (
        <>
            <div id='new-arrivals' className='py-6'></div>
            <section className="new-arrivals-section" id="new-arrivals">
                <div className="container mx-auto px-2"
                >
                    <div className="text-center px-3 d-flex justify-between align-items-center lg:flex-row flex-col">
                        <h2 className="font-bold text-saddlebrown-600 mb-4 text-center" style={{ color: '#8b4513', fontSize: '2.3rem' }}>
                            New Arrivals
                        </h2>
                        {/* View All Button */}
                        <a href="/products" className="btn" style={{ background: '#16a34a', border: 'none', borderRadius: '10px', fontSize: '17px', fontWeight: '700', color: '#fff', padding: '10px 15px', textDecoration: 'none', }}>View All</a>
                    </div>
                    {/* <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
                    Discover our latest arrivals, handpicked for their quality, style, and customer satisfaction.
                </p> */}
                    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4" >
                        {sampleProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default NewArrivals