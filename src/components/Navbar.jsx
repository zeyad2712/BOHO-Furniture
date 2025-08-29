import React from 'react'

function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([
        {
            id: 1,
            name: "Boho Wooden Chair",
            price: 299.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 2,
            name: "Rattan Coffee Table",
            price: 199.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=150&q=80"
        }
    ]);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900 && mobileNavOpen) {
                setMobileNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileNavOpen]);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    React.useEffect(() => {
        if (mobileNavOpen || cartOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('cart-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('cart-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('cart-open');
        };
    }, [mobileNavOpen, cartOpen]);

    // Mock cart items for demonstration
    const mockCartItems = [
        {
            id: 1,
            name: "Boho Wooden Chair",
            price: 299.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 2,
            name: "Rattan Coffee Table",
            price: 199.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=150&q=80"
        }
    ];

    // Cart Overlay Component
    function CartOverlay() {
        const [items, setItems] = React.useState(mockCartItems);
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const removeItem = (id) => {
            setItems(items.filter(item => item.id !== id));
        };

        const updateQuantity = (id, newQuantity) => {
            if (newQuantity <= 0) {
                removeItem(id);
                return;
            }
            setItems(items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        };

        // return (
        //     <>
        //         {/* Cart Overlay Background */}
        //         <div
        //             className="cart-overlay"
        //             style={{
        //                 position: 'fixed',
        //                 top: 0,
        //                 left: 0,
        //                 width: '100%',
        //                 height: '100%',
        //                 background: 'rgba(0,0,0,0.5)',
        //                 zIndex: 1500,
        //                 backdropFilter: 'blur(4px)',
        //                 opacity: 0,
        //                 animation: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
        //             }}
        //             onClick={() => setCartOpen(false)}
        //         />

        //         {/* Cart Panel */}
        //         <div
        //             className="cart-panel"
        //             style={{
        //                 position: 'fixed',
        //                 top: 0,
        //                 right: 0,
        //                 width: 'min(450px, 100vw)',
        //                 height: '100vh',
        //                 background: '#fff',
        //                 zIndex: 1501,
        //                 transform: 'translateX(100%)',
        //                 animation: 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 boxShadow: '-4px 0 30px rgba(0,0,0,0.15)',
        //                 overflow: 'hidden',
        //             }}
        //         >
        //             {/* Cart Header */}
        //             <div style={{
        //                 padding: '24px 24px 16px',
        //                 borderBottom: '1px solid rgba(34, 197, 94, 0.1)',
        //                 display: 'flex',
        //                 alignItems: 'center',
        //                 justifyContent: 'space-between'
        //             }}>
        //                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        //                     <div style={{
        //                         width: 32,
        //                         height: 32,
        //                         background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        //                         borderRadius: 8,
        //                         display: 'flex',
        //                         alignItems: 'center',
        //                         justifyContent: 'center'
        //                     }}>
        //                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        //                             <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        //                             <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        //                             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        //                         </svg>
        //                     </div>
        //                     <h2 style={{
        //                         margin: 0,
        //                         fontSize: '1.5rem',
        //                         fontWeight: 700,
        //                         color: '#1f2937',
        //                         fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`
        //                     }}>
        //                         Shopping Cart
        //                     </h2>
        //                 </div>
        //                 <button
        //                     onClick={() => setCartOpen(false)}
        //                     style={{
        //                         background: 'none',
        //                         border: 'none',
        //                         cursor: 'pointer',
        //                         padding: '8px',
        //                         borderRadius: '6px',
        //                         transition: 'background 0.2s',
        //                         display: 'flex',
        //                         alignItems: 'center',
        //                         justifyContent: 'center'
        //                     }}
        //                     onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
        //                     onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        //                 >
        //                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
        //                         <path d="M18 6L6 18M6 6l12 12"/>
        //                     </svg>
        //                 </button>
        //             </div>

        //             {/* Cart Content */}
        //             <div style={{ flex: 1, overflow: 'auto', padding: '0 24px' }}>
        //                 {items.length === 0 ? (
        //                     // Empty Cart State
        //                     <div style={{
        //                         display: 'flex',
        //                         flexDirection: 'column',
        //                         alignItems: 'center',
        //                         justifyContent: 'center',
        //                         height: '100%',
        //                         textAlign: 'center',
        //                         padding: '40px 20px'
        //                     }}>
        //                         <div style={{
        //                             width: 120,
        //                             height: 120,
        //                             background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)',
        //                             borderRadius: '50%',
        //                             display: 'flex',
        //                             alignItems: 'center',
        //                             justifyContent: 'center',
        //                             marginBottom: '24px'
        //                         }}>
        //                             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        //                                 <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        //                                 <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        //                                 <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        //                             </svg>
        //                         </div>
        //                         <h3 style={{
        //                             margin: '0 0 12px 0',
        //                             fontSize: '1.5rem',
        //                             fontWeight: 600,
        //                             color: '#1f2937',
        //                             fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`
        //                         }}>
        //                             Your cart is empty
        //                         </h3>
        //                         <p style={{
        //                             margin: '0 0 32px 0',
        //                             fontSize: '1rem',
        //                             color: '#6b7280',
        //                             lineHeight: 1.6,
        //                             maxWidth: '280px'
        //                         }}>
        //                             Looks like you haven't added any furniture to your cart yet. Start shopping to find your perfect pieces!
        //                         </p>
        //                         <button
        //                             onClick={() => setCartOpen(false)}
        //                             style={{
        //                                 background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        //                                 color: '#fff',
        //                                 border: 'none',
        //                                 borderRadius: 12,
        //                                 padding: '16px 32px',
        //                                 fontWeight: 600,
        //                                 fontSize: '1rem',
        //                                 fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
        //                                 cursor: 'pointer',
        //                                 boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
        //                                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        //                                 display: 'flex',
        //                                 alignItems: 'center',
        //                                 gap: '8px'
        //                             }}
        //                             onMouseEnter={e => {
        //                                 e.currentTarget.style.transform = 'translateY(-2px)';
        //                                 e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.4)';
        //                             }}
        //                             onMouseLeave={e => {
        //                                 e.currentTarget.style.transform = 'translateY(0)';
        //                                 e.currentTarget.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';
        //                             }}
        //                         >
        //                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //                                 <path d="M12 5v14M5 12h14"/>
        //                             </svg>
        //                             Start Shopping
        //                         </button>
        //                     </div>
        //                 ) : (
        //                     // Cart Items
        //                     <div style={{ padding: '24px 0' }}>
        //                         {items.map((item, index) => (
        //                             <div key={item.id} style={{
        //                                 display: 'flex',
        //                                 gap: '16px',
        //                                 padding: '16px 0',
        //                                 borderBottom: index < items.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
        //                             }}>
        //                                 <img 
        //                                     src={item.image} 
        //                                     alt={item.name}
        //                                     style={{
        //                                         width: 80,
        //                                         height: 80,
        //                                         borderRadius: 8,
        //                                         objectFit: 'cover',
        //                                         border: '1px solid rgba(0,0,0,0.05)'
        //                                     }}
        //                                 />
        //                                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        //                                     <div>
        //                                         <h4 style={{
        //                                             margin: '0 0 4px 0',
        //                                             fontSize: '1rem',
        //                                             fontWeight: 600,
        //                                             color: '#1f2937',
        //                                             fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`
        //                                         }}>
        //                                             {item.name}
        //                                         </h4>
        //                                         <p style={{
        //                                             margin: 0,
        //                                             fontSize: '1.125rem',
        //                                             fontWeight: 700,
        //                                             color: '#22c55e',
        //                                             fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`
        //                                         }}>
        //                                             ${item.price.toFixed(2)}
        //                                         </p>
        //                                     </div>
        //                                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        //                                         <div style={{
        //                                             display: 'flex',
        //                                             alignItems: 'center',
        //                                             border: '1px solid rgba(0,0,0,0.1)',
        //                                             borderRadius: 6,
        //                                             overflow: 'hidden'
        //                                         }}>
        //                                             <button
        //                                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
        //                                                 style={{
        //                                                     background: 'transparent',
        //                                                     border: 'none',
        //                                                     padding: '8px 12px',
        //                                                     cursor: 'pointer',
        //                                                     color: '#6b7280',
        //                                                     transition: 'background 0.2s'
        //                                                 }}
        //                                                 onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
        //                                                 onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        //                                             >
        //                                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //                                                     <path d="M5 12h14"/>
        //                                                 </svg>
        //                                             </button>
        //                                             <span style={{
        //                                                 padding: '8px 12px',
        //                                                 fontSize: '0.875rem',
        //                                                 fontWeight: 600,
        //                                                 color: '#1f2937',
        //                                                 minWidth: '20px',
        //                                                 textAlign: 'center'
        //                                             }}>
        //                                                 {item.quantity}
        //                                             </span>
        //                                             <button
        //                                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
        //                                                 style={{
        //                                                     background: 'transparent',
        //                                                     border: 'none',
        //                                                     padding: '8px 12px',
        //                                                     cursor: 'pointer',
        //                                                     color: '#6b7280',
        //                                                     transition: 'background 0.2s'
        //                                                 }}
        //                                                 onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
        //                                                 onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        //                                             >
        //                                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //                                                     <path d="M12 5v14M5 12h14"/>
        //                                                 </svg>
        //                                             </button>
        //                                         </div>
        //                                         <button
        //                                             onClick={() => removeItem(item.id)}
        //                                             style={{
        //                                                 background: 'transparent',
        //                                                 border: 'none',
        //                                                 padding: '8px',
        //                                                 cursor: 'pointer',
        //                                                 color: '#ef4444',
        //                                                 borderRadius: 4,
        //                                                 transition: 'background 0.2s'
        //                                             }}
        //                                             onMouseEnter={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
        //                                             onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        //                                         >
        //                                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //                                                 <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        //                                             </svg>
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 )}
        //             </div>

        //             {/* Cart Footer */}
        //             {items.length > 0 && (
        //                 <div style={{
        //                     padding: '24px',
        //                     borderTop: '1px solid rgba(34, 197, 94, 0.1)',
        //                     background: 'rgba(34, 197, 94, 0.02)'
        //                 }}>
        //                     <div style={{
        //                         display: 'flex',
        //                         justifyContent: 'space-between',
        //                         alignItems: 'center',
        //                         marginBottom: '20px'
        //                     }}>
        //                         <span style={{
        //                             fontSize: '1.125rem',
        //                             fontWeight: 600,
        //                             color: '#1f2937',
        //                             fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`
        //                         }}>
        //                             Total
        //                         </span>
        //                         <span style={{
        //                             fontSize: '1.5rem',
        //                             fontWeight: 700,
        //                             color: '#22c55e',
        //                             fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`
        //                         }}>
        //                             ${total.toFixed(2)}
        //                         </span>
        //                     </div>
        //                     <button
        //                         onClick={() => {
        //                             alert('Proceeding to checkout...');
        //                             setCartOpen(false);
        //                         }}
        //                         style={{
        //                             width: '100%',
        //                             background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        //                             color: '#fff',
        //                             border: 'none',
        //                             borderRadius: 12,
        //                             padding: '16px 24px',
        //                             fontWeight: 600,
        //                             fontSize: '1rem',
        //                             fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
        //                             cursor: 'pointer',
        //                             boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
        //                             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        //                             display: 'flex',
        //                             alignItems: 'center',
        //                             justifyContent: 'center',
        //                             gap: '8px'
        //                         }}
        //                         onMouseEnter={e => {
        //                             e.currentTarget.style.transform = 'translateY(-2px)';
        //                             e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.4)';
        //                         }}
        //                         onMouseLeave={e => {
        //                             e.currentTarget.style.transform = 'translateY(0)';
        //                             e.currentTarget.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';
        //                         }}
        //                     >
        //                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        //                             <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        //                         </svg>
        //                         Proceed to Checkout
        //                     </button>
        //                 </div>
        //             )}
        //         </div>

        //         {/* Animations */}
        //         <style>
        //             {`
        //             @keyframes fadeIn {
        //                 from { opacity: 0; }
        //                 to { opacity: 1; }
        //             }
        //             @keyframes slideInRight {
        //                 from { transform: translateX(100%); }
        //                 to { transform: translateX(0); }
        //             }

        //             /* Prevent horizontal scrolling when cart is open */
        //             body.cart-open {
        //                 overflow-x: hidden !important;
        //             }
        //             `}
        //         </style>
        //     </>
        // );
    }

    // Navigation Links Component
    function NavLinks({ isMobile, onClickLink }) {
        const [hoveredLink, setHoveredLink] = React.useState(null);
        const [showDropdown, setShowDropdown] = React.useState(false);
        const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false);

        const navLinkStyle = {
            textDecoration: 'none',
            color: scrolled ? '#1f2937' : '#1f2937',
            fontWeight: 600,
            fontSize: isMobile ? '1.1rem' : '1rem',
            letterSpacing: '0.3px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
            position: 'relative',
            padding: isMobile ? '12px 16px' : '8px 16px',
            borderRadius: 8,
            display: 'inline-block',
            width: isMobile ? '100%' : 'auto',
            textAlign: isMobile ? 'left' : 'center',
        };

        const dropdownItemStyle = {
            display: 'block',
            padding: '12px 16px',
            color: '#1f2937',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            fontWeight: 500,
            fontSize: isMobile ? '1rem' : '0.95rem',
            fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
            borderRadius: 6,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            width: '100%',
        };

        return (
            <ul
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    listStyle: 'none',
                    gap: isMobile ? '8px' : '24px',
                    margin: 0,
                    padding: 0,
                    width: isMobile ? '100%' : 'auto',
                }}
            >
                {/* Home */}
                <li style={{ width: isMobile ? '100%' : 'auto' }}>
                    <a
                        href="#"
                        style={{
                            ...navLinkStyle,
                            color: hoveredLink === 'home' ? '#22c55e' : navLinkStyle.color,
                            background: hoveredLink === 'home' ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                        }}
                        onMouseEnter={() => setHoveredLink('home')}
                        onMouseLeave={() => setHoveredLink(null)}
                        onClick={onClickLink}
                    >
                        Home
                    </a>
                </li>

                {/* Products dropdown */}
                <li style={{
                    position: 'relative',
                    width: isMobile ? '100%' : 'auto'
                }}>
                    <div
                        style={{
                            cursor: 'pointer',
                            color: hoveredLink === 'products' || showDropdown || mobileDropdownOpen ? '#22c55e' : navLinkStyle.color,
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isMobile ? 'space-between' : 'flex-start',
                            gap: '8px',
                            fontSize: isMobile ? '1.1rem' : '1rem',
                            padding: isMobile ? '12px 16px' : '8px 16px',
                            borderRadius: 8,
                            width: isMobile ? '100%' : 'auto',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            background: hoveredLink === 'products' || showDropdown || mobileDropdownOpen ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                        }}
                        onClick={isMobile ? () => setMobileDropdownOpen(v => !v) : undefined}
                        onMouseEnter={!isMobile ? () => setShowDropdown(true) : undefined}
                        onMouseLeave={!isMobile ? () => setShowDropdown(false) : undefined}
                    >
                        Products
                        <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            style={{
                                transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Dropdown */}
                    <ul
                        style={{
                            display: (isMobile ? mobileDropdownOpen : showDropdown) ? 'block' : 'none',
                            position: isMobile ? 'static' : 'absolute',
                            top: isMobile ? undefined : '100%',
                            left: 0,
                            background: '#fff',
                            boxShadow: isMobile ? undefined : '0 10px 40px rgba(0,0,0,0.1)',
                            borderRadius: 12,
                            minWidth: isMobile ? '100%' : 200,
                            zIndex: 10,
                            padding: isMobile ? '8px 0' : '12px',
                            marginLeft: isMobile ? '16px' : 0,
                            border: isMobile ? 'none' : '1px solid rgba(34, 197, 94, 0.1)',
                        }}
                    >
                        <li style={{ width: '100%' }}>
                            <a
                                style={{
                                    ...dropdownItemStyle,
                                    color: '#1f2937'
                                }}
                                href="#"
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                                All Products
                            </a>
                        </li>
                        <li style={{ width: '100%' }}>
                            <a
                                style={{
                                    ...dropdownItemStyle,
                                    color: '#1f2937'
                                }}
                                href="#"
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                                New Arrivals
                            </a>
                        </li>
                        <li style={{ width: '100%' }}>
                            <a
                                style={{
                                    ...dropdownItemStyle,
                                    color: '#1f2937'
                                }}
                                href="#"
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                                Best Selling
                            </a>
                        </li>
                    </ul>
                </li>

                {/* Categories */}
                <li style={{ width: isMobile ? '100%' : 'auto' }}>
                    <a
                        href="#"
                        style={{
                            ...navLinkStyle,
                            color: hoveredLink === 'categories' ? '#22c55e' : navLinkStyle.color,
                            background: hoveredLink === 'categories' ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                        }}
                        onMouseEnter={() => setHoveredLink('categories')}
                        onMouseLeave={() => setHoveredLink(null)}
                        onClick={onClickLink}
                    >
                        Categories
                    </a>
                </li>

                {/* Contact */}
                <li style={{ width: isMobile ? '100%' : 'auto' }}>
                    <a
                        href="#"
                        style={{
                            ...navLinkStyle,
                            color: hoveredLink === 'contact' ? '#22c55e' : navLinkStyle.color,
                            background: hoveredLink === 'contact' ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                        }}
                        onMouseEnter={() => setHoveredLink('contact')}
                        onMouseLeave={() => setHoveredLink(null)}
                        onClick={onClickLink}
                    >
                        Contact
                    </a>
                </li>

                {/* Cart Button */}
                <li style={{ width: isMobile ? '100%' : 'auto' }}>
                    {/* <button 
                        className="cart-button"
                        onClick={() => setCartOpen(true)}
                        style={{
                            background: 'transparent',
                            border: '2px solid #22c55e',
                            color: '#22c55e',
                            borderRadius: 8,
                            padding: '8px 16px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: isMobile ? 'flex-start' : 'center',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = '#22c55e';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#22c55e';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        Cart
                    </button> */}

                    <button className="btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-cart-shopping"></i> Cart</button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            ...
                        </div>
                    </div>
                </li>

                {/* Login Button */}
                <li style={{ width: isMobile ? '100%' : 'auto' }}>
                    <button
                        className="login-button"
                        style={{
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '10px 24px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
                            cursor: 'pointer',
                            boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            letterSpacing: '0.3px',
                            outline: 'none',
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: isMobile ? 'flex-start' : 'center',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';
                        }}
                    >
                        Login
                    </button>
                </li>
            </ul>
        );
    }

    return (
        <>
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: scrolled ? '16px 2rem' : '24px 2rem',
                background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderBottom: scrolled ? '1px solid rgba(34, 197, 94, 0.1)' : 'none',
            }}>

                {/* Logo */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 1202,
                    textDecoration: 'none'
                }}>
                    <div style={{
                        width: 40,
                        height: 40,
                        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 12,
                        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                    </div>
                    <span style={{
                        fontWeight: 800,
                        fontSize: '1.75rem',
                        color: scrolled ? '#1f2937' : '#1f2937',
                        fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
                        letterSpacing: '-0.5px'
                    }}>
                        BOHO
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-burger"
                    aria-label="Toggle menu"
                    onClick={() => setMobileNavOpen(v => !v)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 8,
                        marginLeft: 10,
                        zIndex: 1202,
                    }}
                >
                    <span style={{
                        display: 'block',
                        width: 24,
                        height: 2,
                        background: scrolled ? '#1f2937' : '#1f2937',
                        marginBottom: 6,
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: mobileNavOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                    }} />
                    <span style={{
                        display: 'block',
                        width: 24,
                        height: 2,
                        background: scrolled ? '#1f2937' : '#1f2937',
                        marginBottom: 6,
                        opacity: mobileNavOpen ? 0 : 1,
                        transition: 'opacity 0.3s'
                    }} />
                    <span style={{
                        display: 'block',
                        width: 24,
                        height: 2,
                        background: scrolled ? '#1f2937' : '#1f2937',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: mobileNavOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
                    }} />
                </button>

                {/* Desktop Navigation */}
                <div className="navbar-center-desktop">
                    <NavLinks isMobile={false} />
                </div>

                {/* Mobile Overlay */}
                {mobileNavOpen && (
                    <div
                        className="navbar-mobile-overlay"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 1200,
                            backdropFilter: 'blur(4px)',
                        }}
                        onClick={() => setMobileNavOpen(false)}
                    />
                )}

                {/* Mobile Drawer */}
                <aside
                    className="navbar-mobile-drawer"
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        zIndex: 1201,
                        height: '100vh',
                        width: '85vw',
                        maxWidth: 360,
                        background: '#fff',
                        boxShadow: '-4px 0 30px rgba(0,0,0,0.15)',
                        transform: mobileNavOpen ? 'translateX(0)' : 'translateX(110%)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        padding: '6rem 2rem 2rem',
                        overflowY: 'auto',
                        borderLeft: '1px solid rgba(34, 197, 94, 0.1)',
                        
                    }}
                >
                    <NavLinks isMobile={true} onClickLink={() => setMobileNavOpen(false)} />
                </aside>

                {/* Responsive Styles */}
                <style>
                    {`
                    @media (max-width: 900px) {
                        .navbar-center-desktop {
                            display: none !important;
                        }
                        .navbar-burger {
                            display: block !important;
                        }
                        nav {
                            padding: 16px 1rem !important;
                        }
                    }
                    @media (min-width: 901px) {
                        .navbar-burger {
                            display: none !important;
                        }
                        .navbar-center-desktop {
                            display: block !important;
                        }
                    }
                    @media (max-width: 480px) {
                        nav {
                            padding: 12px 1rem !important;
                        }
                        .navbar-mobile-drawer {
                            width: 100vw !important;
                            max-width: none !important;
                        }
                    }
                    `}
                </style>
            </nav>

            {/* Cart Overlay */}
            {cartOpen && <CartOverlay />}
        </>
    )
}

export default Navbar