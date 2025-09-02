import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'

// Component to handle automatic scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />

        {/* ScrollToTop Button */}
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

// Separate component for the scroll-to-top button
function ScrollToTopButton() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 300); // 300ms delay before scrolling to top
  }

  return showScroll ? (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '3%',
        right: '2%',
        zIndex: 200,
        background: '#22c55e',
        border: 'none',
        padding: '10px',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        opacity: showScroll ? 1 : 0,
        pointerEvents: showScroll ? 'auto' : 'none',
      }}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up" style={{ fontSize: '20px', color: '#fff' }}></i>
    </button>
  ) : null;
}

export default App
