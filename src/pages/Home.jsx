import React, { useState } from 'react';
import ProductsData from '../data/ProductsData';
import '../App.css';
import Navbar1 from '../components/Navbar1';
import Hero from '../components/Hero';
import CategorisSection from '../components/CategorisSection';
import NewArrivals from '../components/NewArrivals';
import BestSelling from '../components/BestSelling';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
function Home() {
  return (
    <>
      <Navbar1 />
      <Hero />
      <CategorisSection />
      <NewArrivals />
      <BestSelling />
      <AboutUs />
      <Reviews />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home;
