import "./DeliveryFeatures.css";

export default function DeliveryFeatures() {
  return (
    <section className="delivery">
      <div className="delivery-container">

        <div className="delivery-gallery">

          <img
            className="chef"
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt=""
          />

          <img
            className="dish-top"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
            alt=""
          />

          <img
            className="dish-bottom"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt=""
          />

        </div>

        <div className="delivery-content">

          <h2>Fastest Food Delivery in City</h2>

          <p>
            Our visual designer lets you quickly and drag a
            down your way to customapps for both keep desktop.
          </p>

          <ul>
            <li>✔ Delivery within 30 minutes</li>
            <li>✔ Best Offer & Prices</li>
            <li>✔ Online Services Available</li>
          </ul>

        </div>

      </div>
    </section>
  );
}