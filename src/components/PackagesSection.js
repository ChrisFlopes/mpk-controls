import React from 'react';
import { Link } from 'react-router-dom';
import './PackagesSection.css';

function PackagesSection() {
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
    <section className="packages-section">
      <h2>Our Packages</h2>
      <p className="section-description">Below you will see the wide range of packages we can supply, don't forget to contact us for a free quote on any of the packages!</p>
      <div className="preview-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="preview-card">
            <div className="preview-image">Package Image</div>
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <Link to="/packages" className="more-info-button">More Information</Link>
          </div>
        ))}
      </div>
      <Link to="/packages" className="view-all-button" onClick={scrollToTop}>View All Packages</Link>
    </section>
  );
}

export default PackagesSection; 