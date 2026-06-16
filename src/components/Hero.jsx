import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      {/* Overlay layer */}
      <div className="hero-overlay">
        <div className="hero-content">
          {/* <p className="hero-subtitle">Best food for your taste</p> */}

          <h1 className="hero-title">Best food for your taste</h1>

          <p className="hero-desc">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>

          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() => navigate("/contact")}
            >
              Book A Table
            </button>

            <button className="btn secondary" onClick={() => navigate("/menu")}>
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
