import React from 'react'

// Put this Button in Home.jsx in the last of the page
function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <a id='scroll-to-up' onClick={scrollToTop} style={{
            position: 'absolute',
            bottom: '3%',
            right: '2%',
            zIndex: 200,
            background: '#22c55e',
            padding: '15px',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
        }}>
            <i className="fa-solid fa-arrow-up" style={{ fontSize: '1.7rem', color: '#fff' }}></i>
        </a>
    )
}

export default ScrollToTop