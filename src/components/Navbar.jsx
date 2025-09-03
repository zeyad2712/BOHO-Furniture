import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from '../context/CartContext';
// import ProductsData from '../data/ProductsData.js';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount } = useCart();

    useEffect(() => {
        // Initialize Bootstrap dropdowns
        if (typeof window !== 'undefined' && window.bootstrap) {
            const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
            const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new window.bootstrap.Dropdown(dropdownToggleEl));
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <>
            {/* The Navbar */}
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    boxShadow: "0 4px 24px rgba(34, 197, 94, 0.15)",
                    padding: "0.75rem 2rem",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    borderBottom: "1px solid rgba(34, 197, 94, 0.08)",
                }}
            >
                <div className="container-fluid" style={{ alignItems: "center" }}>
                    {/* Brand */}
                    <Link
                        className="navbar-brand d-flex align-items-center"
                        to="/"
                        style={{
                            fontWeight: 800,
                            fontSize: "1.75rem",
                            color: "#fff",
                            letterSpacing: "-0.5px",
                            fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
                            textShadow: "0 2px 8px rgba(34,197,94,0.10)",
                            textDecoration: "none",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                background: "rgba(255,255,255,0.15)",
                                borderRadius: 8,
                                marginRight: 12,
                                boxShadow: "0 4px 20px rgba(34, 197, 94, 0.18)",
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9,22 9,12 15,12 15,22" />
                            </svg>
                        </span>
                        BOHO <span style={{ color: "#fef08a", marginLeft: 4 }}>FURNITURE</span>
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        style={{
                            border: "none",
                            background: "rgba(255,255,255,0.18)",
                            borderRadius: 8,
                            padding: 8,
                            boxShadow: "0 2px 8px rgba(34,197,94,0.10)",
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                            e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Menu */}
                    <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', listStyle: 'none', margin: 0, padding: 0 }} id="navbarSupportedContent">
                        {/* Navigation Links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0, padding: 0 }}>
                            <li className="nav-item" style={{ margin: '0 10px' }}>
                                <Link
                                    className="nav-link active"
                                    to="/"
                                    href="#"
                                    style={{
                                        color: "#fff",
                                        fontWeight: 600,
                                        borderRadius: 6,
                                        padding: "8px 0px",
                                        textDecoration: "none",
                                        display: "block",
                                        transition: "background 0.2s, color 0.2s",
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.background = "#16a34a";
                                        e.currentTarget.style.color = "#fef08a";
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                >
                                    <i className="fa-solid fa-house"></i> Home
                                </Link>
                            </li>
                            {/* Dropdown */}
                            {(() => {
                                // React state for dropdown open/close
                                const [dropdownOpen, setDropdownOpen] = React.useState(false);
                                const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 991.98);
                                // Track if mouse is over button or menu
                                const buttonRef = React.useRef(null);
                                const menuRef = React.useRef(null);

                                // Handle window resize
                                React.useEffect(() => {
                                    const handleResize = () => {
                                        setIsMobile(window.innerWidth <= 991.98);
                                    };

                                    window.addEventListener('resize', handleResize);
                                    return () => window.removeEventListener('resize', handleResize);
                                }, []);

                                // Handle click outside to close dropdown on mobile
                                React.useEffect(() => {
                                    const handleClickOutside = (event) => {
                                        if (isMobile && dropdownOpen &&
                                            buttonRef.current &&
                                            !buttonRef.current.contains(event.target) &&
                                            menuRef.current &&
                                            !menuRef.current.contains(event.target)) {
                                            setDropdownOpen(false);
                                        }
                                    };

                                    document.addEventListener('mousedown', handleClickOutside);
                                    return () => document.removeEventListener('mousedown', handleClickOutside);
                                }, [isMobile, dropdownOpen]);

                                // Close dropdown if mouse leaves both button and menu (desktop only)
                                const handleMouseLeave = () => {
                                    if (!isMobile) {
                                        setTimeout(() => {
                                            // Check if mouse is over button or menu
                                            const isOverButton = buttonRef.current && buttonRef.current.matches(':hover');
                                            const isOverMenu = menuRef.current && menuRef.current.matches(':hover');
                                            if (!isOverButton && !isOverMenu) {
                                                setDropdownOpen(false);
                                            }
                                        }, 80); // Small delay to allow moving between button and menu
                                    }
                                };

                                // Toggle dropdown on click (mobile)
                                const handleClick = (e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        setDropdownOpen(!dropdownOpen);
                                    }
                                };

                                return (
                                    <li
                                        className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
                                        style={{ margin: '0 10px', position: 'relative' }}
                                        onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded={dropdownOpen ? "true" : "false"}
                                            style={{
                                                color: "#fff",
                                                fontWeight: 500,
                                                borderRadius: 6,
                                                padding: "8px 0px",
                                                textDecoration: "none",
                                                display: "block",
                                                transition: "background 0.2s, color 0.2s",
                                            }}
                                            ref={buttonRef}
                                            onClick={handleClick}
                                            onMouseOver={e => {
                                                if (!isMobile) {
                                                    e.currentTarget.style.background = "#16a34a";
                                                    e.currentTarget.style.color = "#fef08a";
                                                }
                                            }}
                                            onMouseOut={e => {
                                                if (!isMobile) {
                                                    e.currentTarget.style.background = "transparent";
                                                    e.currentTarget.style.color = "#fff";
                                                }
                                            }}
                                        >
                                            <i className="fa-solid fa-box"></i> Products
                                            {/* {isMobile && (
                                                <i className={`fa-solid fa-chevron-${dropdownOpen ? 'up' : 'down'}`}
                                                    style={{ marginLeft: 8, fontSize: '0.8em', transition: 'transform 0.3s ease' }}></i>
                                            )} */}
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            ref={menuRef}
                                            style={{
                                                borderRadius: 10,
                                                boxShadow: "0 8px 32px rgba(34,197,94,0.10)",
                                                minWidth: 180,
                                                marginTop: 6,
                                                border: "1px solid rgba(34,197,94,0.1)",
                                                background: "#fff",
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                zIndex: 1000,
                                                listStyle: "none",
                                                padding: "8px 5px",
                                                display: dropdownOpen ? "block" : "none",
                                            }}
                                            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <li>
                                                <Link className="dropdown-item" to="/products" style={{
                                                    fontWeight: 500,
                                                    padding: "8px 16px",
                                                    color: "#166534",
                                                    textDecoration: "none",
                                                    display: "block",
                                                    transition: "background 0.2s"
                                                }}
                                                    onMouseOver={e => {
                                                        e.currentTarget.style.background = "#f0fdf4";
                                                    }}
                                                    onMouseOut={e => {
                                                        e.currentTarget.style.background = "transparent";
                                                    }}
                                                >
                                                    <i className="fa-solid fa-layer-group" style={{ marginRight: 8 }}></i>
                                                    All Products
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#new-arrivals" style={{
                                                    fontWeight: 500,
                                                    padding: "8px 16px",
                                                    color: "#166534",
                                                    textDecoration: "none",
                                                    display: "block",
                                                    transition: "background 0.2s"
                                                }}
                                                    onMouseOver={e => {
                                                        e.currentTarget.style.background = "#f0fdf4";
                                                    }}
                                                    onMouseOut={e => {
                                                        e.currentTarget.style.background = "transparent";
                                                    }}
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        const section = document.getElementById('new-arrivals');
                                                        if (section) {
                                                            section.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }}
                                                >
                                                    <i className="fa-solid fa-star" style={{ marginRight: 8 }}></i>
                                                    New Arrivals
                                                </a>
                                            </li>
                                            <li>
                                                <hr style={{ margin: "4px 0", borderColor: "rgba(34,197,94,0.1)" }} />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#best-selling"
                                                    style={{
                                                        fontWeight: 500,
                                                        padding: "8px 16px",
                                                        color: "#166534",
                                                        textDecoration: "none",
                                                        display: "block",
                                                        transition: "background 0.2s, color 0.2s",
                                                        "@media (max-width: 765px)": {
                                                            color: "#fff"
                                                        }
                                                    }}
                                                    onMouseOver={e => {
                                                        e.currentTarget.style.background = "#f0fdf4";
                                                    }}
                                                    onMouseOut={e => {
                                                        e.currentTarget.style.background = "transparent";
                                                    }}
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        const section = document.getElementById('best-selling');
                                                        if (section) {
                                                            section.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }}
                                                >
                                                    <i className="fa-solid fa-fire" style={{ marginRight: 8 }}></i>
                                                    Best Selling
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                );
                            })()}
                            <li className="nav-item" style={{ margin: '0 10px' }}>
                                <a
                                    className="nav-link"
                                    href="#categories"
                                    style={{
                                        color: "#fff",
                                        fontWeight: 500,
                                        borderRadius: 6,
                                        padding: "8px 0px",
                                        textDecoration: "none",
                                        display: "block",
                                        transition: "background 0.2s, color 0.2s",
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.background = "#16a34a";
                                        e.currentTarget.style.color = "#fef08a";
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById('categories');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <i className="fa-solid fa-list"></i> Categories
                                </a>
                            </li>

                            <li className="nav-item" style={{ margin: '0 10px' }}>
                                <a
                                    className="nav-link"
                                    href="#contact"
                                    style={{
                                        color: "#fff",
                                        fontWeight: 500,
                                        borderRadius: 6,
                                        padding: "8px 0px",
                                        textDecoration: "none",
                                        display: "block",
                                        transition: "background 0.2s, color 0.2s",
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.background = "#16a34a";
                                        e.currentTarget.style.color = "#fef08a";
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById('contact');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <i className="fa-solid fa-user"></i> Contact
                                </a>
                            </li>


                            <li className="nav-item" style={{ margin: '0 10px' }}>
                                <a
                                    className="nav-link"
                                    href="#about"
                                    style={{
                                        color: "#fff",
                                        fontWeight: 500,
                                        borderRadius: 6,
                                        padding: "8px 0px",
                                        textDecoration: "none",
                                        display: "block",
                                        transition: "background 0.2s, color 0.2s",
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.background = "#16a34a";
                                        e.currentTarget.style.color = "#fef08a";
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById('about');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <i className="fa-solid fa-circle-info"></i> About
                                </a>
                            </li>
                            <li>
                                <button type="button" class="btn btn-outline-light position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa-solid fa-cart-shopping"></i> Cart
                                    {getCartItemsCount() > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>
                                            {getCartItemsCount()}
                                        </span>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Custom Responsive Styles */}
                <style>
                    {`
                /* Force navigation to be visible */
                .navbar-nav {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                
                .nav-item {
                    display: block !important;
                    margin: 0 10px !important;
                }
                
                .nav-link {
                    display: block !important;
                    color: #fff !important;
                    text-decoration: none !important;
                    padding: 8px 9px !important;
                    border-radius: 6px !important;
                    transition: background 0.2s, color 0.2s !important;
                }
                
                /* Dropdown styles */
                .dropdown-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    z-index: 1000;
                    background: #fff;
                    border: 1px solid rgba(34,197,94,0.1);
                    border-radius: 10px;
                    box-shadow: 0 8px 32px rgba(34,197,94,0.10);
                    min-width: 180px;
                    margin-top: 6px;
                    padding: 8px 0;
                }
                
                .dropdown-menu.show {
                    display: block !important;
                }
                
                .dropdown-item {
                    display: block !important;
                    padding: 8px 16px !important;
                    color: #166534;
                    text-decoration: none !important;
                    font-weight: 500 !important;
                    transition: background 0.2s !important;
                }
                
                .dropdown-item:hover {
                    background: #f0fdf4 !important;
                }
                
                /* Mobile styles with smooth animations */
                @media (max-width: 991.98px) {
                    .navbar-collapse {
                        display: block !important;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: rgba(34, 197, 94, 0.95);
                        border-radius: 8px;
                        margin-top: 10px;
                        padding: 15px;
                        box-shadow: 0 4px 20px rgba(34, 197, 94, 0.2);
                        transform: translateY(-20px);
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        max-height: 0;
                        overflow: hidden;
                    }
                    
                    .navbar-collapse.show {
                        transform: translateY(0) !important;
                        opacity: 1 !important;
                        visibility: visible !important;
                        max-height: 500px !important;
                    }
                    
                    .navbar-nav {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        margin-bottom: 15px !important;
                        opacity: 0;
                        transform: translateY(-10px);
                        transition: all 0.3s ease 0.1s;
                    }
                    
                    .navbar-collapse.show .navbar-nav {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                    }
                    
                    .nav-item {
                        margin: 5px 0 !important;
                        width: 100% !important;
                        opacity: 0;
                        transform: translateX(-20px);
                        transition: all 0.3s ease;
                    }
                    
                    .navbar-collapse.show .nav-item {
                        opacity: 1 !important;
                        transform: translateX(0) !important;
                    }
                    
                    .nav-item:nth-child(1) { transition-delay: 0.1s; }
                    .nav-item:nth-child(2) { transition-delay: 0.15s; }
                    .nav-item:nth-child(3) { transition-delay: 0.2s; }
                    .nav-item:nth-child(4) { transition-delay: 0.25s; }
                    
                    .nav-link {
                        width: 100% !important;
                        text-align: left !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    .nav-link:hover {
                        transform: translateX(5px) !important;
                    }
                    
                    .dropdown-menu {
                        position: static !important;
                        background: rgba(255, 255, 255, 0.95) !important;
                        border: none !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
                        margin-top: 5px !important;
                        transform: scaleY(0);
                        transform-origin: top;
                        transition: transform 0.3s ease;
                        display: none !important;
                    }
                    
                    .dropdown.show .dropdown-menu {
                        transform: scaleY(1) !important;
                        display: block !important;
                    }

                    
                    
                    /* Search form animation */
                    form {
                        opacity: 0;
                        transform: translateY(10px);
                        transition: all 0.3s ease 0.2s;
                    }
                    
                    .navbar-collapse.show form {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                    }
                }

                @media (max-width: 765px) {
                    .dropdown-item {
                        color: #166534 !important;
                        display: block !important;
                        background: transparent !important;
                    }
                    
                    .dropdown-menu {
                        background: rgba(255, 255, 255, 0.95) !important;
                        border: none !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
                        display: none !important;
                    }
                    
                    .dropdown.show .dropdown-menu {
                        display: block !important;
                    }
                    
                    .dropdown-item:hover {
                        background: rgba(255, 255, 255, 0.1) !important;
                        color: #fef08a !important;
                    }
                }
                
                /* Hamburger button animation */
                .navbar-toggler {
                    transition: all 0.3s ease !important;
                }
                
                .navbar-toggler:hover {
                    transform: scale(1.05) !important;
                }
                
                .navbar-toggler:active {
                    transform: scale(0.95) !important;
                }
                
                @media (max-width: 900px) {
                    nav {
                        padding: 0.75rem 1rem !important;
                    }
                    .navbar-brand {
                        font-size: 1.2rem !important;
                    }
                }
                
                @media (max-width: 600px) {
                    nav {
                        padding: 0.5rem 0.5rem !important;
                    }
                    .navbar-brand {
                        font-size: 1.1rem !important;
                    }
                    .form-control {
                        min-width: 80px !important;
                        font-size: 0.95rem !important;
                    }
                    
                }
                `}
                </style>
            </nav>

            {/* The Cart Popup */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    backdropFilter: "blur(4px)",
                    background: "rgba(34,197,94,0.08)",
                }}
            >
                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 680 }}>
                    <div
                        className="modal-content"
                        style={{
                            borderRadius: "22px",
                            boxShadow: "0 8px 40px rgba(34,197,94,0.18)",
                            border: "none",
                            background: "linear-gradient(135deg, #f0fdf4 0%, #fff 100%)",
                        }}
                    >
                        <div
                            className="modal-header"
                            style={{
                                border: "none",
                                borderTopLeftRadius: 22,
                                borderTopRightRadius: 22,
                                background: "linear-gradient(90deg, #22c55e 0%, #22c55e 100%)",
                                color: "#fff",
                                alignItems: "center",
                                padding: "1.25rem 1.5rem",
                            }}
                        >
                            <h1
                                className="modal-title fs-5 fw-bold"
                                id="exampleModalLabel"
                                style={{
                                    fontSize: "1.35rem",
                                    fontWeight: 800,
                                    letterSpacing: "0.01em",
                                    color: "#fff",
                                }}
                            >
                                <i className="fa-solid fa-cart-shopping me-2" style={{ color: "#fff" }}></i>
                                Your Cart
                            </h1>
                            <button
                                type="button"
                                className="btn-close fw-bold"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                    fontSize: "1.5rem",
                                    filter: "invert(40%) sepia(80%) saturate(400%) hue-rotate(80deg)",
                                    opacity: 0.7,
                                    color: "#fff",
                                }}
                            ></button>
                        </div>
                        <div className="modal-body" style={{ padding: "1.5rem 1.5rem 1rem", overflowY: "auto", maxHeight: 420 }}>
                            {items.length === 0 ? (
                                <div className="text-center py-5">
                                    <i className="fa-solid fa-cart-shopping" style={{ fontSize: "3rem", color: "#d1d5db", marginBottom: "1rem" }}></i>
                                    <h5 style={{ color: "#6b7280", marginBottom: "0.5rem" }}>Your cart is empty</h5>
                                    <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>Add some products to get started!</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="card mb-3 shadow-sm border-0"
                                        style={{
                                            maxWidth: "100%",
                                            borderRadius: "16px",
                                            background: "linear-gradient(120deg, #bbf7d0 0%, #f0fdf4 100%)",
                                            overflow: "hidden",
                                            boxShadow: "0 2px 12px rgba(34,197,94,0.10)",
                                        }}
                                    >
                                        <div className="row g-0 align-items-center px-2">
                                            <div
                                                className="col-4 d-flex align-items-center justify-content-center"
                                                style={{
                                                    background: "#fff",
                                                    borderRadius: "0 15px 15px 0",
                                                    height: "100%",
                                                    minHeight: 110,
                                                    padding: "0.5rem",
                                                }}
                                            >
                                                <img
                                                    src={item.image || "../assets/images/hero-page/hero-image.jpg"}
                                                    className="img-fluid"
                                                    alt={item.name}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        borderRadius: "12px 0 0 12px",
                                                        minHeight: 90,
                                                        boxShadow: "0 2px 8px rgba(34,197,94,0.08)",
                                                    }}
                                                />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body py-3 px-3 d-flex flex-column justify-content-between h-100">
                                                    <div>
                                                        <h5
                                                            className="card-title mb-1"
                                                            style={{
                                                                fontWeight: 700,
                                                                color: "#166534",
                                                                fontSize: "1.08rem",
                                                                letterSpacing: "0.01em",
                                                            }}
                                                        >
                                                            {item.name}
                                                        </h5>
                                                        <p
                                                            className="card-text mb-2"
                                                            style={{
                                                                fontSize: "0.97rem",
                                                                color: "#444",
                                                                opacity: 0.85,
                                                                lineHeight: 1.4,
                                                            }}
                                                        >
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                                        <span
                                                            className="fw-bold"
                                                            style={{
                                                                color: "#16a34a",
                                                                fontSize: "1.13rem",
                                                                letterSpacing: "0.01em",
                                                            }}
                                                        >
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </span>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <button
                                                                className="btn btn-sm"
                                                                style={{
                                                                    borderRadius: "50%",
                                                                    width: 30,
                                                                    height: 30,
                                                                    padding: 0,
                                                                    background: "#f0fdf4",
                                                                    border: "1.5px solid #bbf7d0",
                                                                    color: "#16a34a",
                                                                    fontWeight: 700,
                                                                    transition: "background 0.2s, color 0.2s",
                                                                }}
                                                                title="Decrease quantity"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            >
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                            <span
                                                                className="mx-1"
                                                                style={{
                                                                    minWidth: 28,
                                                                    textAlign: "center",
                                                                    fontWeight: 600,
                                                                    color: "#166534",
                                                                    fontSize: "1.05rem",
                                                                }}
                                                            >
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                className="btn btn-sm"
                                                                style={{
                                                                    borderRadius: "50%",
                                                                    width: 30,
                                                                    height: 30,
                                                                    padding: 0,
                                                                    background: "#f0fdf4",
                                                                    border: "1.5px solid #bbf7d0",
                                                                    color: "#16a34a",
                                                                    fontWeight: 700,
                                                                    transition: "background 0.2s, color 0.2s",
                                                                }}
                                                                title="Increase quantity"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="btn btn-link text-danger px-0 mt-2"
                                                        style={{
                                                            fontSize: "0.97rem",
                                                            textDecoration: "none",
                                                            color: "#dc2626",
                                                            fontWeight: 500,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 4,
                                                        }}
                                                        title="Remove from cart"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        <i className="fa fa-trash me-1"></i> Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div
                            className="modal-footer border-none"
                            style={{
                                border: "none",
                                borderBottomLeftRadius: 22,
                                borderBottomRightRadius: 22,
                                background: "#f0fdf4",
                                padding: "1.1rem 1.5rem 1.3rem",
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "0.5rem",
                                flexDirection: 'column'
                            }}
                        >
                            {/* Cart summary */}
                            {items.length > 0 && (
                                <div
                                    className="d-flex justify-content-between align-items-center w-100 mt-4 mb-2 px-1"
                                    style={{
                                        fontWeight: 600,
                                        fontSize: "1.08rem",
                                        color: "#166534",
                                        borderTop: "1px solid #bbf7d0",
                                        paddingTop: "1rem",
                                    }}
                                >
                                    <span>
                                        <i className="fa-solid fa-basket-shopping me-2" style={{ color: "#16a34a" }}></i>
                                        Total ({getCartItemsCount()} {getCartItemsCount() === 1 ? 'item' : 'items'})
                                    </span>
                                    <span style={{ fontWeight: 800, fontSize: "1.15rem" }}>${getCartTotal().toFixed(2)}</span>
                                </div>
                            )}

                            {/* Buttons for clear and check out */}
                            {items.length > 0 && (
                                <div className="d-flex justify-content-between align-items-center w-100 mt-4 mb-2 px-1" style={{ gap: "0.5rem" }}>
                                    <button
                                        type="button"
                                        className="btn"
                                        style={{
                                            background: "#fff",
                                            color: "#dc2626",
                                            border: "1.5px solid #fecaca",
                                            fontWeight: 600,
                                            borderRadius: "8px",
                                            padding: "0.55rem 1.2rem",
                                            fontSize: "1.01rem",
                                            transition: "background 0.2s, color 0.2s",
                                        }}
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to clear your cart?")) {
                                                clearCart();
                                            }
                                        }}
                                    >
                                        <i className="fa fa-trash me-2"></i>Clear
                                    </button>
                                    <button
                                        type="button"
                                        className="btn"
                                        style={{
                                            background: "linear-gradient(90deg, #22c55e 0%, #bbf7d0 100%)",
                                            color: "#fff",
                                            fontWeight: 700,
                                            border: "none",
                                            borderRadius: "8px",
                                            padding: "0.55rem 1.5rem",
                                            fontSize: "1.01rem",
                                            boxShadow: "0 2px 8px rgba(34,197,94,0.10)",
                                            transition: "background 0.2s, color 0.2s",
                                        }}
                                        onClick={() => {
                                            alert("Checkout functionality would be implemented here!");
                                        }}
                                    >
                                        <i className="fa fa-credit-card me-2"></i>Check Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;
