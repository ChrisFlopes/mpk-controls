import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          If you have any questions about our offers, please contact us by filling out the form below and we will get in touch with you shortly. Alternatively, you can give us a call on the number below and speak to our team.
        </p>

        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-block">
              <h2>Call Us</h2>
              <p>Tel: 0121 747 6033</p>
            </div>

            <div className="info-block">
              <h2>Head Office</h2>
              <address>
                MPK Controls Ltd<br />
                Unit C6 Oyo Business Park<br />
                187 Park Lane<br />
                Castle Vale<br />
                B35 6AN
              </address>
            </div>

            <div className="info-block">
              <h2>Business Hours</h2>
              <table className="hours-table">
                <tbody>
                  <tr>
                    <td>Mon – Thu</td>
                    <td>08:00 – 17:00</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>08:00 – 14:00</td>
                  </tr>
                  <tr>
                    <td>Sat – Sun</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage; 