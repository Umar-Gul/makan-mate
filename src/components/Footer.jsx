import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  const navigate = useNavigate();
  const instagramImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Makan Mate</h2>

          <p>
            In the new era of technology we look in the future with certainty
            and pride for our company and customers.
          </p>

          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-links">
          <h3>Pages</h3>

          <ul>
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/about")}>About</button>
            </li>
            <li>
              <button onClick={() => navigate("/menu")}>Menu</button>
            </li>
            <li>
              <button onClick={() => navigate("/pricing")}>Pricing</button>
            </li>
            <li>
              <button onClick={() => navigate("/blog")}>Blog</button>
            </li>
            <li>
              <button onClick={() => navigate("/contact")}>Contact</button>
            </li>
            <li>
              <button onClick={() => navigate("/delivery")}>Delivery</button>
            </li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="footer-links">
          <h3>Utility Pages</h3>

          <ul>
            <li>
              <button onClick={() => navigate("/start-here")}>
                Start Here
              </button>
            </li>

            <li>
              <button onClick={() => navigate("/styleguide")}>
                Styleguide
              </button>
            </li>

            <li>
              <button onClick={() => navigate("/password-protected")}>
                Password Protected
              </button>
            </li>

            <li>
              <button onClick={() => navigate("/404")}>404 Not Found</button>
            </li>

            <li>
              <button onClick={() => navigate("/licenses")}>Licenses</button>
            </li>

            <li>
              <button onClick={() => navigate("/changelog")}>Changelog</button>
            </li>

            <li>
              <button onClick={() => navigate("/view-more")}>View More</button>
            </li>
          </ul>
        </div>

        {/* Instagram */}
        <div className="footer-instagram">
          <h3>Follow Us On Instagram</h3>

          <div className="instagram-grid">
            {instagramImages.map((img, index) => (
              <img key={index} src={img} alt="Food" />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="copyright">
        Copyright © 2025 Makan Mate. All Rights Reserved
      </div>
    </footer>
  );
}
