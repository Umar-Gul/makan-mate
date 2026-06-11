import "./Testimonials.css";

const testimonials = [
  {
    title: '"The best restaurant"',
    text: `Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.`,
    name: "Sophia Allen",
    location: "Los Angeles, CA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: '"Simply delicious"',
    text: `Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner.`,
    name: "Matt Cannon",
    location: "San Diego, CA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: '"One of a kind restaurant"',
    text: `The culinary experience at place is first to none. The atmosphere is vibrant, the food unforgettable, and the service truly exceptional.`,
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}