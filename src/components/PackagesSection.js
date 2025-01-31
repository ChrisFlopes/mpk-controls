import React from 'react';
import { Link } from 'react-router-dom';
import './PackagesSection.css';

function PackagesSection() {
  const packages = [
    {
      title: "MPK PRO Vent Staircase Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg",
      link: "/mpk-pro-vent-staircase-packages"
    },
    {
      title: "MPK PRO Vent Lobby Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-2-open-front-view.jpg",
      link: "/mpk-pro-vent-lobby-packages"
    },
    {
      title: "MPK OSO Window Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-window-3.jpg",
      link: "/mpk-oso-window-packages"
    },
    {
      title: "MPK LAM Louver Staircase Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Mcr-LAM-Louver-Open.jpg",
      link: "/mpk-lam-louver-staircase-packages"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="package-section">
      <div className="package-container">
        <div className="package-title">
          <h2>Packages</h2>
        </div>
        <div className="package-grid">
          {packages.map((pkg, index) => (
            <Link to={pkg.link} key={index} className="package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
              </div>
              <div className="package-content">
                <h3>{pkg.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="package-button-container">
          <Link to="/packages" className="package-view-all" onClick={scrollToTop}>
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PackagesSection; 