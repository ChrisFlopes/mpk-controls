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
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg" // We'll add the image path once available
    },
    {
      title: "MPK PRO Vent Lobby Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-2-open-front-view.jpg"
    },
    {
      title: "MPK OSO Window Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-window-3.jpg"
    },
    {
      title: "MPK LAM Louver Staircase Packages",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Mcr-LAM-Louver-Open.jpg"
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