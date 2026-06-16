import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>📞 (414) 857 - 0107</span>
            <span>✉️ yummy@bistrobliss</span>
          </div>

          <div className="social-icons">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
              alt="logo"
            />
            <h2>Makan Mate</h2>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Pages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="order-btn" onClick={() => navigate("/menu")}>
            Order Now
          </button>{" "}
        </div>
      </nav>
    </>
  );
}
