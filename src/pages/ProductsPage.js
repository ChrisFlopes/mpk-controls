import React from 'react';
import './ProductsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import defaultProductImage from '../assets/images/default-product-image.jpg';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
  const navigate = useNavigate();

  const products = [
    {
      title: 'AOV Smoke Vents',
      image: defaultProductImage,
      description: 'Smoke ventilation solutions for various applications'
    },
    {
      title: 'Mechanical AOV Systems',
      image: defaultProductImage,
      description: 'Advanced mechanical smoke ventilation systems'
    },
    {
      title: 'AOV Dampers',
      image: defaultProductImage,
      description: 'Specialized damper solutions'
    },
    {
      title: 'Penthouse Louvers',
      image: defaultProductImage,
      description: 'High-quality ventilation louvers'
    },
    {
      title: 'Fire Logic',
      image: defaultProductImage,
      description: 'Advanced fire detection and control systems'
    },
    {
      title: 'MPKZ1 Single Zone',
      image: defaultProductImage,
      description: 'Single zone control solutions'
    },
    {
      title: 'MPKZM Multizone',
      image: defaultProductImage,
      description: 'Multi-zone control systems'
    },
    {
      title: 'Mechanical AOV Control Panel',
      image: defaultProductImage,
      description: 'Sophisticated control panel solutions'
    },
    {
      title: 'Control Spares & Accessories',
      image: defaultProductImage,
      description: 'Essential components and accessories'
    }
  ];

  return (
    <div className="products-page">
      <Header />
      <div className="products-container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-content">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button className="more-info" onClick={() => navigate(`/products/${index}`)}>
                  More Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage; 