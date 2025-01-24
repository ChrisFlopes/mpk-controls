import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PackagesPage.css';

function PackagesPage() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const packages = [
    {
      title: "MPK PRO Vent Staircase Packages",
      description: "Our staircase ventilation packages provide comprehensive smoke control solutions for multi-story buildings. These systems ensure safe evacuation routes and assist firefighting operations.",
      image: null // We'll add the image path once available
    },
    {
      title: "MPK PRO Vent Lobby Packages",
      description: "Designed specifically for lobby areas, these packages offer complete smoke ventilation solutions that protect critical access points and common areas in your building.",
      image: null
    },
    {
      title: "MPK OSO Window Packages",
      description: "Our window ventilation packages provide natural smoke ventilation through strategically placed window systems, offering both safety and energy efficiency.",
      image: null
    },
    {
      title: "MPK LAM Louver Staircase Packages",
      description: "Advanced louver systems specifically designed for staircases, providing controlled ventilation and smoke extraction when needed most.",
      image: null
    }
  ];

  return (
    <div className="packages-page">
      <Header />
      <div className="packages-content">
        <h1>Our Packages</h1>
        <p className="packages-intro">Below you will see the wide range of packages we can supply, don't forget to contact us for a free quote on any of the packages!</p>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-image">
                {pkg.image ? (
                  <img src={pkg.image} alt={pkg.title} />
                ) : (
                  <div className="placeholder-image">Package Image</div>
                )}
              </div>
              <div className="package-details">
                <h2>{pkg.title}</h2>
                <p>{pkg.description}</p>
                <button className="more-info-button" onClick={scrollToTop}>More Information</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PackagesPage; 