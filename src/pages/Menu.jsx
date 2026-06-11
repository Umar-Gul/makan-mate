import  { useState } from 'react';
import './Menu.css';

// Mock data strictly matching the 8 items from the Figma file
const MENU_DATA = [
  {
    id: 1,
    name: 'Fried Eggs',
    price: '$ 9.99',
    category: 'Breakfast',
    ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Hawaiian Pizza',
    price: '$ 15.99',
    category: 'Main Dishes',
    ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Martinez Cocktail',
    price: '$ 7.25',
    category: 'Drinks',
    ingredients: 'Made with eggs, lettuce, salt, oil and exclusive ingredients.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Butterscotch Cake',
    price: '$ 20.99',
    category: 'Desserts',
    ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Mint Lemonade',
    price: '$ 5.89',
    category: 'Drinks',
    ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Chocolate Icecream',
    price: '$ 18.00',
    category: 'Desserts',
    ingredients: 'Made with eggs, lettuce, salt, oil with other ingredients.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Cheese Burger',
    price: '$ 12.55',
    category: 'Main Dishes',
    ingredients: 'Made with eggs, lettuce, salt, oil and internal ingredients.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Classic Waffles',
    price: '$ 12.99',
    category: 'Breakfast',
    ingredients: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=80'
  }
];

const PARTNER_APPS = [
  { name: 'Uber Eats', brandClass: 'uber-eats' },
  { name: 'GRUBHUB', brandClass: 'grubhub' },
  { name: 'Postmates', brandClass: 'postmates' },
  { name: 'DOORDASH', brandClass: 'doordash' },
  { name: 'foodpanda', brandClass: 'foodpanda' },
  { name: 'deliveroo', brandClass: 'deliveroo' },
  { name: 'Instacart', brandClass: 'instacart' },
  { name: 'JUST EAT', brandClass: 'just-eat' },
  { name: 'DiDi Food', brandClass: 'didi-food' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts'];

  // Handle dynamic filtering logic
  const filteredMenu = activeCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <section className="menu-page-container">
      {/* 1. Header Section */}
      <div className="menu-header">
        <h1 className="menu-main-title">Our Menu</h1>
        <p className="menu-subtitle">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>
      </div>

      {/* 2. Interactive Filter Tabs */}
      <div className="filter-tabs-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-tab-btn ${activeCategory === category ? 'active-tab' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 3. Interactive Menu Grid */}
      <div className="menu-items-grid">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-card">
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.name} className="card-img" />
            </div>
            <div className="card-body">
              <span className="card-price">{item.price}</span>
              <h3 className="card-title">{item.name}</h3>
              <p className="card-ingredients">{item.ingredients}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Delivery Apps Partner Section */}
      <div className="delivery-partners-section">
        <div className="delivery-text-column">
          <h2 className="delivery-heading">You can order through apps</h2>
          <p className="delivery-description">
            Lorem ipsum dolor sit amet consectetu adipiscing elit do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        
        <div className="delivery-grid-column">
          {PARTNER_APPS.map((app, index) => (
            <div key={index} className="partner-logo-card">
              <span className={`partner-logo-mock ${app.brandClass}`}>
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}