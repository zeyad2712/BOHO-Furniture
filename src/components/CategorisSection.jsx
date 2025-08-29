import React from 'react'
import { categories, productsData } from '../data/ProductsData'

function CategorisSection() {
    return (
        <div id='categories' className='categoris-section' style={{
            padding: '24px 10px',
            background: '#fff',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 600,
                color: '#8b4513',
                marginBottom: '18px'
            }}>
                Shop by Category
            </h2>
            <div className="categories-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '16px',
                padding: '20px'
            }}>
                {categories
                    .filter(category => category !== 'All')
                    .map((category) => (
                        <button
                            key={category}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#f5f5f5',
                                border: '1px solid #e0e0e0',
                                borderRadius: '12px',
                                padding: '18px 16px',
                                minWidth: '90px',
                                minHeight: '90px',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                fontSize: '1rem',
                                color: '#333',
                                transition: 'background 0.15s, border 0.15s'
                            }}
                        >
                            <span style={{ fontSize: '2rem', marginBottom: 6 }}>
                                {{
                                    "Furniture": "🪑",
                                    "Decor": "🖼️",
                                    "Lighting": "💡",
                                    "Kitchen": "🍽️",
                                    "Bedding": "🛏️",
                                    "Bath": "🛁",
                                    "Outdoor": "🌳",
                                    "Rugs": "🧶",
                                    "Storage": "📦",
                                    "Kids": "🧸",
                                    "Office": "🖥️",
                                    "Plants": "🪴",
                                    "Art": "🎨",
                                    "Textiles": "🧵",
                                    "Tableware": "🍴",
                                    "Candles": "🕯️",
                                    "Mirrors": "🪞",
                                    "Pet": "🐾",
                                    "Holiday": "🎄",
                                    "Vintage": "📻",
                                }[category] || "🛒"}
                            </span>
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: '#444',
                                marginTop: 2
                            }}>
                                {category}
                            </span>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategorisSection