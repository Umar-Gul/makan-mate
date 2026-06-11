import "./BrowseMenu.css";

export default function BrowseMenu() {
  const categories = [
    {
      title: "Breakfast",
      desc: "Start your day with energy-rich meals.",
      icon: "🍳",
    },
    {
      title: "Main Dishes",
      desc: "Hearty and delicious signature meals.",
      icon: "🍲",
    },
    {
      title: "Drinks",
      desc: "Refreshing beverages for every mood.",
      icon: "🥤",
    },
    {
      title: "Desserts",
      desc: "Sweet treats to end your meal perfectly.",
      icon: "🍰",
    },
  ];

  return (
    <section className="menu-section">
      <h2 className="menu-title">Browse Our Menu</h2>

      <div className="menu-grid">
        {categories.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="icon-circle">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <a href="#" className="menu-link">
              Explore Menu
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}