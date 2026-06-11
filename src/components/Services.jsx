import "./Services.css";

const services = [
  {
    title: "Caterings",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033",
  },
  {
    title: "Birthdays",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
  },
  {
    title: "Weddings",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  },
  {
    title: "Events",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <h2>
          We also offer unique <br />
          services for your events
        </h2>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>

              <p>
                In the new era of technology we look in the future
                with certainty.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}