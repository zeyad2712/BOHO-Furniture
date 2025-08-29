import React from 'react'
import { categories, productsData } from '../data/ProductsData'

function CategorisSection() {
    return (
        <div id='categories' className='categoris-section' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            backgroundColor: '#fff', // Remove this after testing
        }}>
            {/* Heading */}
            <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'rgb(139, 69, 19)',
                marginBottom: '20px',
            }}>Shop by Category</h1>
            {/* Categories Grid */}
            <div className="categories-grid" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                paddingInline: '20px',
            }}>

                {categories
                    .filter(category => category !== 'All')
                    .map((category) => (
                        <button
                            key={category}
                            className="category-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '16px',
                                background: 'linear-gradient(120deg, #e9edc9 0%, #fefae0 100%)',
                                border: 'none',
                                borderRadius: '24px',
                                boxShadow: '0 6px 24px rgba(34,197,94,0.10), 0 1.5px 6px rgba(139,69,19,0.08)',
                                padding: '36px 32px',
                                minWidth: '150px',
                                minHeight: '150px',
                                cursor: 'pointer',
                                transition: 'transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s, background 0.22s',
                                fontFamily: 'inherit',
                                outline: 'none',
                                position: 'relative',
                                overflow: 'hidden',
                                borderBottom: '4px solid #22c55e',
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-10px) scale(1.06)';
                                e.currentTarget.style.boxShadow = '0 12px 36px rgba(34,197,94,0.18), 0 2px 8px rgba(139,69,19,0.12)';
                                e.currentTarget.style.background = 'linear-gradient(120deg, #fefae0 0%, #d4e7c5 100%)';
                                e.currentTarget.style.borderBottom = '4px solid #8b4513';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = '';
                                e.currentTarget.style.boxShadow = '0 6px 24px rgba(34,197,94,0.10), 0 1.5px 6px rgba(139,69,19,0.08)';
                                e.currentTarget.style.background = 'linear-gradient(120deg, #e9edc9 0%, #fefae0 100%)';
                                e.currentTarget.style.borderBottom = '4px solid #22c55e';
                            }}
                        >
                            <div
                                style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, #22c55e33 60%, #fefae0 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.3rem',
                                    marginBottom: 6,
                                    border: '3px solid #22c55e',
                                    boxShadow: '0 2px 8px rgba(34,197,94,0.10)',
                                    transition: 'border-color 0.18s',
                                }}
                            >
                                <span style={{ fontSize: '2.3rem', marginBottom: 2 }}>
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
                            </div>
                            <h3
                                style={{
                                    fontSize: '1.18rem',
                                    fontWeight: 700,
                                    color: '#1e3932',
                                    margin: 0,
                                    letterSpacing: '0.02em',
                                    textShadow: '0 1px 0 #e9edc9',
                                    textAlign: 'center',
                                }}
                            >
                                {category}
                            </h3>
                        </button>
                    ))
                }

            </div>

        </div>
    )
}

export default CategorisSection