import "./About.css";

export default function About() {
  const stats = [
    { number: "3+", label: "Years of Experience" },
    { number: "50+", label: "Menu Items" },
    { number: "20K+", label: "Happy Customers" },
    { number: "100+", label: "Events Catered" },
  ];

  const features = [
    {
      title: "Fresh Ingredients",
      desc: "We use only the freshest ingredients sourced daily.",
    },
    {
      title: "Expert Chefs",
      desc: "Our experienced chefs craft every dish with care.",
    },
    {
      title: "Fast Delivery",
      desc: "Enjoy your favorite meals delivered quickly.",
    },
    {
      title: "Premium Quality",
      desc: "We maintain the highest standards in every dish.",
    },
  ];

  const chefs = [
    {
      name: "John Smith",
      role: "Head Chef",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500",
    },
    {
      name: "Sarah Johnson",
      role: "Sous Chef",
      image:
        "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=500",
    },
    {
      name: "Michael Brown",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500",
    },
    {
      name: "Emma Wilson",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
            alt="Restaurant Food"
          />

          <div className="contact-card">
            <h3>Come and visit us</h3>

            <p>📞 (414) 857 - 0107</p>
            <p>✉️ makanmate@email.com</p>
            <p>📍 Peshawar, Pakistan</p>
          </div>
        </div>

        <div className="about-content">
          <h1>We provide healthy food for your family.</h1>

          <p>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            atmosphere.
          </p>

          <p>
            Rooted in hospitality, we are committed to offering delicious meals
            prepared with fresh ingredients while creating memorable moments for
            every guest.
          </p>

          <button>More About Us</button>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2>Our Story</h2>

          <p>
            Since our founding, Makan Mate has been dedicated to delivering
            exceptional dining experiences through quality ingredients,
            creativity, and outstanding hospitality.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000"
          alt="Restaurant Interior"
        />
      </section>

      {/* Stats */}
      <section className="stats-section">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2>Meet Our Professional Chefs</h2>

        <div className="team-grid">
          {chefs.map((chef, index) => (
            <div className="chef-card" key={index}>
              <img src={chef.image} alt={chef.name} />

              <h3>{chef.name}</h3>

              <p>{chef.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}