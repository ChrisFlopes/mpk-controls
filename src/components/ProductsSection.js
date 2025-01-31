import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsSection.css';

function ProductsSection() {
  const products = [
    {
      id: "aov-smoke-vents",
      title: "AOV Smoke Vents",
      description: "Automatic Opening Vents for effective smoke ventilation",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-vents-services.jpg",
      link: "/aov-smoke-vents"
    },
    {
      id: "mechanical-aov-systems",
      title: "Mechanical AOV Systems",
      description: "Natural ventilation systems for your building",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/moav-extract-systems-services.jpg",
      link: "/mechanical-aov-systems"
    },
    {
      id: "control-spares",
      title: "Control Spares & Accessories",
      description: "Advanced control solutions for smoke ventilation",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Apollo-smoke-detector.jpg",
      link: "/control-spares-accessories"
    },
    {
      id: "fire-logic",
      title: "Fire Logic",
      description: "Intelligent fire safety control systems",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/fire-logic-services.jpg",
      link: "/fire-logic"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="mpk-products-section">
      <h2>Products</h2>
      <div className="mpk-products-grid">
        {products.map((product) => (
          <Link 
            to={product.link} 
            key={product.id} 
            className="mpk-product-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="mpk-product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.title}
                className="mpk-product-image" 
              />
            </div>
            <div className="mpk-product-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/products" className="mpk-product-view-all" onClick={scrollToTop}>
        See All Products
      </Link>
    </section>
  );
}

export default ProductsSection; 