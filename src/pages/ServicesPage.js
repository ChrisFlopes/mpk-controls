import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <Header />
      <div className="services-content">
        <div className="title-section">
          <h1>CFD Modeling</h1>
          <p>Computational Fluid Dynamic (CFD) Modeling is highly recommended when installing a MOAV system, to prove the functionality of the smoke ventilation design.</p>
          <p>MPK Controls can provide this as part of our contract via one of our nominated independent CFD engineers.</p>
        </div>

        <div className="cfd-models">
          <h2>Smoke Extraction CDF Model</h2>
          <div className="cfd-images">
            <img src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/CFD-model1-1024x790.png" alt="CFD Model 1" />
            <img src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/CFD-model2.png" alt="CFD Model 2" />
            <img src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/CFD-model3.png" alt="CFD Model 3" />
          </div>
        </div>

        <div className="simulation-section">
          <h2>CFD Simulation</h2>
          <div className="video-container">
            <video 
              controls
              width="100%"
              src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/Stratford-Smoke-Extract-CFD-Report-Issue1.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage; 