import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import CategorisSection from '../components/CategorisSection';
import NewArrivals from '../components/NewArrivals';
import BestSelling from '../components/BestSelling';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CategorisSection />
      <NewArrivals />
      <BestSelling />
      <AboutUs />
      <Reviews />
      <ContactUs />
    </>
  )
}

export default Home;
