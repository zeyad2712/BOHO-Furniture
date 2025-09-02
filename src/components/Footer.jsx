import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={{ background: '#16a34a', color: '#fff', padding: '40px 0 0 0', fontFamily: 'inherit' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: 1200,
                    margin: '0 auto',
                    flexWrap: 'wrap', // allow wrapping
                    gap: 25,
                }}
            >
                {/* Column 1: Logo and Social Media */}
                <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 16 }}>
                        <div style={{
                            width: 48,
                            height: 48,
                            background: 'linear-gradient(135deg, #7c3aed 60%, #a78bfa 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 14,
                            boxShadow: '0 2px 8px rgba(124,58,237,0.12)'
                        }}>
                            {/* Logo */}
                            <span style={{ fontWeight: 'bold', fontSize: 24, color: '#fff', letterSpacing: 1 }}>B</span>
                        </div>
                        <span style={{ fontWeight: 700, fontSize: 22, color: '#fff', letterSpacing: 2, marginRight: 18 }}>BOHO</span>
                    </div>
                    <h4 className='text-center font-bold mb-2'>
                        Follow Us!
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 2 }}>
                        <a
                            href="https://www.facebook.com/profile.php?id=61575954315572"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#fff', fontSize: 25, transition: 'all 0.3s', textDecoration: 'none' }}
                            onMouseOver={e => e.currentTarget.style.scale = '1.1'}
                            onMouseOut={e => e.currentTarget.style.scale = '1'}
                        >
                            <i className="fab fa-facebook-f" aria-label="facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/boho_home_furniture/?fbclid=IwY2xjawMg_FpleHRuA2FlbQIxMABicmlkETFxZmR2Zmd1cG44Rnh2T1FZAR7Z-b0c0JKQi5lsbTEbXqYaB5fqivWAqI3-zV2fGkGSuvqMDJ62KJuyPRA87g_aem_Pao_F9wniMS1GrhBcRPUUA#"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#fff', fontSize: 25, transition: 'all 0.3s', textDecoration: 'none' }}
                            onMouseOver={e => e.currentTarget.style.scale = '1.1'}
                            onMouseOut={e => e.currentTarget.style.scale = '1'}
                        >
                            <i className="fab fa-instagram" aria-label="instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Column 2: Terms */}
                <div style={{ flex: 1, minWidth: 180, marginBottom: 24 }}>
                    <h3 style={{ fontSize: 23, marginBottom: 12, fontWeight: 600 }}>Terms & Policies</h3>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { name: 'Terms of Service', link: '/terms' },
                                { name: 'Privacy Policy', link: '/privacy' },
                                { name: 'Refund Policy', link: '/refund' },
                                { name: 'Shipping Policy', link: '/shipping' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.link}
                                        style={{
                                            color: '#fff',
                                            textDecoration: 'none',
                                            display: 'block',
                                            marginBottom: 10,
                                            fontWeight: 500,
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseOver={e => e.currentTarget.style.scale = '1.1'}
                                        onMouseOut={e => e.currentTarget.style.scale = '1'}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Column 3: Navigation */}
                <div style={{ flex: 1, minWidth: 180, marginBottom: 24 }}>
                    <h3 style={{ fontSize: 23, marginBottom: 12, fontWeight: 600 }}>Quick Links</h3>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { name: 'Home', link: '/' },
                                { name: 'Shop', link: '/products' },
                                { name: 'Categories', link: '#categories' },
                                { name: 'Contact', link: '#contact' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.link}
                                        style={{
                                            color: '#fff',
                                            textDecoration: 'none',
                                            display: 'block',
                                            marginBottom: 10,
                                            fontWeight: 500,
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseOver={e => e.currentTarget.style.scale = '1.05'}
                                        onMouseOut={e => e.currentTarget.style.scale = '1'}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Column 4: Contact Info */}
                <div style={{ flex: 1, minWidth: 250, marginBottom: 24, fontWeight: 600 }}>
                    <h3 style={{ fontWeight: 600, fontSize: 23, marginBottom: 14 }}>Contact Information</h3>
                    <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <i className="fa-solid fa-phone" style={{ fontSize: 16, color: '#fff' }}></i>
                        <a href="tel:+20 10 80434434" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 400 }}>+20 10 80434434</a>
                    </div>
                    <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <i className="fa-solid fa-envelope" style={{ fontSize: 16, color: '#fff' }}></i>
                        <a href="mailto:info@bohofurnuture.com" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 400 }}>info@bohofurnuture.com</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <i className="fa-solid fa-location-dot" style={{ fontSize: 16, color: '#fff' }}></i>
                        <span>Armed Forces Buildings, Tower 6, Dajla, Maadi, Cairo, Egypt</span>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div style={{
                borderTop: '1px solid #fff',
                marginTop: 32,
                padding: '18px 0 8px 0',
                textAlign: 'center',
                color: '#fff',
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: 0.5
            }}>
                &copy; {new Date().getFullYear()} <span style={{ fontSize: '18px', fontWeight: 700 }}>BOHO</span>. All rights reserved.
            </div>

            {/* Responsive CSS */}
            <style>
                {`
                    @media (max-width: 768px) {
                        footer > div {
                            text-align: center;
                            flex-direction: column;
                            align-items: center;
                            padding: 0 20px;
                            width:100%;
                        }
                        footer h3 {
                            margin-top: 15px;
                        }
                    }
                `}
            </style>
        </footer>
    )
}

export default Footer
