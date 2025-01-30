import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsSection.css';

function ProductsSection() {
  const products = [
    {
      title: "AOE Smoke Vents",
      description: "Automatic Opening Vents for effective smoke ventilation",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-vents-services.jpg"
    },
    {
      title: "Mechanical AOV Systems",
      description: "Natural ventilation systems for your building",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/moav-extract-systems-services.jpg"
    },
    {
      title: "Control Spares & Accessories",
      description: "Advanced control solutions for smoke ventilation",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-panels-services.jpg"
    },
    {
      title: "Fire Logic",
      description: "Intelligent fire safety control systems",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/fire-logic-services.jpg"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="product-section">
      <h2>Products</h2>
      <div className="product-preview-grid">
        {products.map((product, index) => (
          <div key={index} className="product-preview-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.title}
                className="product-preview-image" 
              />
            </div>
            <div className="product-content-container">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/products" className="more-info-button" onClick={scrollToTop}>See All Products</Link>
    </section>
  );
}

export default ProductsSection; 