import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = [
    {
      title: "AOV Smoke Vents",
      description: "Automatic Opening Vents for effective smoke ventilation",
    },
    {
      title: "Roof Access Hatches",
      description: "Safe and secure roof access solutions",
    },
    {
      title: "Louvered Ventilators",
      description: "Natural ventilation systems for your building",
    },
    {
      title: "Control Systems",
      description: "Advanced control solutions for smoke ventilation",
    }
  ];

  const packages = [
    {
      title: "MPK PRO Vent Staircase Packages",
      description: "Complete staircase ventilation solutions",
    },
    {
      title: "MPK PRO Vent Lobby Packages",
      description: "Comprehensive lobby ventilation systems",
    },
    {
      title: "MPK OSO Window Packages",
      description: "Specialized window ventilation solutions",
    },
    {
      title: "MPK LAM Louver Staircase Packages",
      description: "Advanced louver systems for staircases",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      <Header />
      <Hero />
      <section className="products-preview">
        <h2>Our Products</h2>
        <p>Discover our range of smoke ventilation solutions</p>
        <div className="preview-grid">
          {products.map((product, index) => (
            <div key={index} className="preview-card">
              <div className="preview-image placeholder-image">Product Image</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <Link to="/products" className="view-all-button" onClick={scrollToTop}>View All Products</Link>
      </section>
      
      <section className="cfd-section">
        <div className="cfd-content">
          <h2>CFD Analysis</h2>
          <p>Our team utilizes advanced Computational Fluid Dynamics (CFD) analysis to ensure optimal smoke ventilation system design. This sophisticated approach allows us to:</p>
          <ul>
            <li>Simulate smoke movement in your building</li>
            <li>Optimize ventilation system placement</li>
            <li>Verify system effectiveness</li>
            <li>Ensure compliance with safety regulations</li>
          </ul>
        </div>
        <div className="cfd-image">
          <div className="placeholder-image">CFD Analysis Visualization</div>
        </div>
      </section>

      <section className="packages-preview">
        <h2>Our Packages</h2>
        <p>Below you will see the wide range of packages we can supply, don't forget to contact us for a free quote on any of the packages!</p>
        <div className="preview-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="preview-card">
              <div className="preview-image placeholder-image">Package Image</div>
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <Link to="/packages" className="more-info-button" onClick={scrollToTop}>More Information</Link>
            </div>
          ))}
        </div>
        <Link to="/packages" className="view-all-button" onClick={scrollToTop}>View All Packages</Link>
      </section>
      <Footer />
    </div>
  );
}

export default Home; 