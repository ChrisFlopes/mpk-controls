import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <Header />
      <div className="services-content">
        <h1>CFD Modeling</h1>
        <p className="services-intro">
          Computational Fluid Dynamic (CFD) Modeling is highly recommended when installing a MOAV system, to prove the functionality of the smoke ventilation design.
        </p>
        <p className="services-note">
          MPK Controls can provide this as part of our contract via one of our nominated independent CFD engineers.
        </p>
        
        <div className="cfd-section">
          <h2>Smoke Extraction CDF Model</h2>
          <div className="cfd-grid">
            <div className="cfd-image">
              <div className="placeholder-image">CFD Model 1</div>
            </div>
            <div className="cfd-image">
              <div className="placeholder-image">CFD Model 2</div>
            </div>
            <div className="cfd-image">
              <div className="placeholder-image">CFD Model 3</div>
            </div>
          </div>
          
          <div className="video-section">
            <h2>CFD Simulation</h2>
            <div className="video-container">
              <div className="placeholder-video">CFD Simulation Video</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage; 