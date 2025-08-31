import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CategorisSection from './components/CategorisSection'
import BestSelling from './components/BestSelling'
// import Home from './pages/Home'
import Products from './pages/Products'
import NewArrivals from './components/NewArrivals'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Reviews from './components/Reviews'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Navbar1 />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CategorisSection />
              <NewArrivals />
              <BestSelling />
              <AboutUs />
              <Reviews />
              <ContactUs />
            </>
          } />
          <Route path="/home" element={
            <>
              <Hero />
              <CategorisSection />
              <NewArrivals />
              <BestSelling />
              <AboutUs />
              <Reviews />
              <ContactUs />
            </>
          } />
          <Route path="/products" element={<Products />} />
          {/* Add more routes here as needed */}

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
