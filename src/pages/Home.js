import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';
import PackagesSection from '../components/PackagesSection';
import CFDSection from '../components/CFDSection';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <ProductsSection />
      <CFDSection />
      <PackagesSection />
      <Footer />
    </div>
  );
}

export default Home; 