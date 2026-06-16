import "./Contact.css";
import { useState } from "react";
import ContactInfoBar from "../components/ContactInfoBar";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <span className="contact-badge">GET IN TOUCH</span>

        <h1>We'd Love To Hear From You</h1>

        <p>
          Whether it's a reservation, feedback, or special request, our team is
          here and happy to help.
        </p>
      </section>

      {/* Contact Info Bar */}
      <ContactInfoBar />

      {/* Stats */}
      <section className="contact-stats container">
        <div className="stat">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>150+</h2>
          <p>Events Hosted</p>
        </div>

        <div className="stat">
          <h2>25+</h2>
          <p>Professional Staff</p>
        </div>

        <div className="stat">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="contact-main container">
        <div className="contact-form-box">
          <h2>Send Us A Message</h2>

          {submitted && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-grid">
              <input type="text" placeholder="Phone Number" />
              <select>
                <option>General Inquiry</option>
                <option>Reservation</option>
                <option>Private Event</option>
              </select>
            </div>

            <textarea
              placeholder="Write your message..."
              rows="6"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-sidebar">
          <div className="map-card">
            <iframe
              title="location"
              src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          <div className="social-card">
            <h3>Follow Us</h3>

            <a href="#" className="social-link">
              <FaFacebookF />
              <span>Facebook</span>
            </a>

            <a href="#" className="social-link">
              <FaInstagram />
              <span>Instagram</span>
            </a>

            <a href="#" className="social-link">
              <FaTwitter />
              <span>Twitter</span>
            </a>

            <a href="#" className="social-link">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container cta-content">
          <div>
            <h2>Reserve Your Table Today</h2>

            <p>
              Book your table online and enjoy a memorable dining experience.
            </p>
          </div>

          <div className="cta-buttons">
            <button className="white-btn">Book A Table</button>

            <button className="outline-btn">View Menu</button>
          </div>
        </div>
      </section>
    </div>
  );
}