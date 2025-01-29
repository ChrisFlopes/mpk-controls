import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsSection.css';

function ProductsSection() {
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <p className="section-description">Discover our range of smoke ventilation solutions</p>
      <div className="preview-grid">
        {products.map((product, index) => (
          <div key={index} className="preview-card">
            <div className="preview-image">Product Image</div>
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
      <Link to="/products" className="view-all-button" onClick={scrollToTop}>View All Products</Link>
    </section>
  );
}

export default ProductsSection; 