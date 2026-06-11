import "./Footer.css";

export default function Footer() {
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
            In the new era of technology we look in the future with
            certainty and pride for our company and customers.
          </p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">📷</a>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-links">
          <h3>Pages</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Delivery</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="footer-links">
          <h3>Utility Pages</h3>

          <ul>
            <li><a href="#">Start Here</a></li>
            <li><a href="#">Styleguide</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">View More</a></li>
          </ul>
        </div>

        {/* Instagram */}
        <div className="footer-instagram">
          <h3>Follow Us On Instagram</h3>

          <div className="instagram-grid">
            {instagramImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Food"
              />
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