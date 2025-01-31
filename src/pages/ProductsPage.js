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
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-vents-services.jpg",
      link: '/aov-smoke-vents'
    },
    {
      title: 'Mechanical AOV Systems',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/moav-extract-systems-services.jpg",
      link: '/mechanical-aov-systems'
    },
    {
      title: 'AOV Dampers',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-shaft-dampers-services.jpg",
      link: '/aov-dampers'
    },
    {
      title: 'Penthouse Louvers',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers-services.jpg",
      link: '/penthouse-louvers'
    },
    {
      title: 'Fire Logic',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/fire-logic-services.jpg",
      link: '/fire-logic'
    },
    {
      title: 'MPKZ1 Single Zone',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Single-Zone-Control-Panel-ext-PKW1-products.jpg",
      link: '/mpkz1-single-zone'
    },
    {
      title: 'MPKZM Multizone',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Multi-zone-products.jpg",
      link: '/mpkzm-multizone'
    },
    {
      title: 'Mechanical AOV Control Panel',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-panels-services.jpg",
      link: '/mechanical-aov-control-panel'
    },
    {
      title: 'Control Spares & Accessories',
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-accessories-services.jpg",
      link: '/control-spares-accessories'
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
                <button className="more-info" onClick={() => navigate(product.link)}>
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