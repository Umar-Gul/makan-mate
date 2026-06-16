import "./AboutInfo.css";
import { useNavigate } from "react-router-dom"; 
import ContactInfoBar from "./ContactInfoBar";


export default function AboutInfo() {
  const navigate = useNavigate();
  return (
    <>
    <ContactInfoBar />
    <section className="about">
      <div className="about-container">

        <div className="about-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
            alt="Food"
            className="about-image"
          />

          <div className="contact-card">
            <h3>Come and visit us</h3>

            <div className="contact-item">
              <span>📞</span>
              <a href="tel:+14148570107">(414) 857 - 0107</a>
            </div>

            <div className="contact-item">
              <span>✉️</span>
              <a href="mailto:happytummy@restaurant.com">happytummy@restaurant.com</a>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <a href="https://maps.google.com/?q=837+W.+Marshall+Lane+Marshalltown,+IA+50158" target="_blank" rel="noopener noreferrer">
                837 W. Marshall Lane Marshalltown, IA 50158
              </a>
            </div>
          </div>

        </div>

        <div className="about-content">
          <h2>
            We provide healthy food for your family.
          </h2>

          <p className="about-lead">
            Our story began with a vision to create a unique dining
            experience that merges fine dining, exceptional service,
            and a vibrant ambiance.
          </p>

          <p>
            At place, we believe that dining is not just about food,
            but also about the overall experience. Our staff,
            renowned for their warmth and dedication, strives to make
            every visit an unforgettable event.
          </p>

          <button onClick={() => navigate("/about")}>
            More About Us
          </button>
        </div>

      </div>
    </section>
    </>
  );
}