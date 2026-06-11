import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>📞 (414) 857 - 0107</span>
            <span>✉️ yummy@bistrobliss</span>
          </div>

          <div className="social-icons">
            <a href="#">𝕏</a>
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">📷</a>
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

          <ul className="nav-links">
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

          <button className="order-btn">Order Now</button>
        </div>
      </nav>
    </>
  );
}
