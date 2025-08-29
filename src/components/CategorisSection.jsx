import React from 'react'
import { categories, productsData } from '../data/ProductsData'

function CategorisSection() {
    return (
        <div
            id='categories'
            className='categoris-section'
            style={{
                padding: '24px 10px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <h2
                style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#8b4513',
                    marginBottom: '18px',
                    opacity: 0,
                    animation: 'fadeInUpCat 0.7s 0.1s forwards'
                }}
            >
                Our Categories
            </h2>
            <div
                className="categories-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '16px',
                    padding: '20px',
                }}
            >
                {categories
                    .filter(category => category !== 'All')
                    .map((category, idx) => (
                        <button
                            key={category}
                            className="category-anim-btn"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f5 100%)',
                                border: 'none',
                                boxShadow: '0 4px 16px rgba(34,197,94,0.08), 0 1.5px 6px rgba(139,69,19,0.07)',
                                borderRadius: '18px',
                                padding: '22px 12px 16px 12px',
                                minWidth: '100px',
                                minHeight: '110px',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                fontSize: '1rem',
                                color: '#1f2937',
                                position: 'relative',
                                overflow: 'hidden',
                                opacity: 0,
                                transform: 'translateY(30px)',
                                animation: `fadeInZoomCat 0.7s ${0.18 + idx * 0.08}s cubic-bezier(0.4,0,0.2,1) forwards`
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.classList.add('cat-hovered');
                                e.currentTarget.style.background = 'linear-gradient(135deg, #bbf7d0 0%, #f0fdf4 100%)';
                                e.currentTarget.style.scale = '1.05'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.classList.remove('cat-hovered');
                                e.currentTarget.style.background = 'linear-gradient(135deg, #f0fdf4 0%, #f5f5f5 100%)';
                                e.currentTarget.style.scale = '1'
                            }}
                        >
                            <span
                                className="cat-emoji"
                                style={{
                                    fontSize: '2.3rem',
                                    marginBottom: 10,
                                    background: 'linear-gradient(90deg, #22c55e 30%, #8b4513 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'block',
                                    filter: 'drop-shadow(0 2px 6px #bbf7d0)',
                                    transition: 'filter 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                {{
                                    "Bedrooms": "🛌",
                                    "Living Rooms": "🛋️",
                                    "Dining Rooms": "🍽️",
                                    "Kids Rooms": "🧸",
                                    "Kitchens": "🍳",
                                    "Outdoor": "🏡",
                                }[category] || "🛒"}
                            </span>
                            <span
                                style={{
                                    fontSize: '1.08rem',
                                    fontWeight: 600,
                                    color: '#166534',
                                    marginTop: 4,
                                    letterSpacing: '0.01em',
                                    textShadow: '0 1px 0 #fff, 0 2px 8px #bbf7d0',
                                    transition: 'color 0.18s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            >
                                {category}
                            </span>
                            <span
                                className="cat-bubble"
                                style={{
                                    position: 'absolute',
                                    bottom: 8,
                                    right: 10,
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    background: '#bbf7d0',
                                    opacity: 0.7,
                                    filter: 'blur(2px)',
                                    pointerEvents: 'none',
                                    animation: 'catBubbleFloat 2.2s infinite ease-in-out alternate',
                                }}
                            />
                        </button>
                    ))
                }
            </div>
            <style>
                {`
                @keyframes fadeInUpCat {
                    0% { opacity: 0; transform: translateY(30px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                @keyframes fadeInZoomCat {
                    0% { opacity: 0; transform: scale(0.96) translateY(30px);}
                    100% { opacity: 1; transform: scale(1) translateY(0);}
                }
                @keyframes catBubbleFloat {
                    0% { transform: translateY(0);}
                    100% { transform: translateY(-8px);}
                }
                .category-anim-btn {
                    transition:
                        box-shadow 0.22s cubic-bezier(0.4,0,0.2,1),
                        transform 0.22s cubic-bezier(0.4,0,0.2,1),
                        background 0.22s cubic-bezier(0.4,0,0.2,1);
                }
                .category-anim-btn.cat-hovered {
                    box-shadow: 0 12px 32px rgba(34,197,94,0.18), 0 2px 8px rgba(139,69,19,0.13);
                    transform: translateY(-7px) scale(1.045) rotate(-2deg);
                    background: linear-gradient(135deg, #bbf7d0 0%, #f0fdf4 100%);
                }
                .category-anim-btn.cat-hovered .cat-emoji {
                    filter: drop-shadow(0 4px 12px #bbf7d0);
                    transform: scale(1.13) rotate(4deg);
                }
                .category-anim-btn.cat-hovered span:nth-child(2) {
                    color: #22c55e;
                }
                `}
            </style>
        </div>
    )
}

export default CategorisSection