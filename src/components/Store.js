import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Airpods',
    quantity: '20',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Headphone',
    quantity: '20',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Laptop',
    quantity: '110',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: 'Gamer Mouse',
    quantity: '50',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    title: 'Microphone',
    quantity: '5',
    image: 'https://via.placeholder.com/150'
  }
];

const Store = () => {
  return (
    <div>
      <div className="headcontent">
        <p>Welcome to your Store, sir!</p>
      </div>
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
      </div>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly and efficiently.</p>
        </div>
        <div className="box">
          <i className="fas fa-star"></i>
          <h3>High Quality</h3>
          <p>Experience products of the highest quality and craftsmanship.</p>
        </div>
        <div className="box">
          <i className="fas fa-dollar-sign"></i>
          <h3>Best Price</h3>
          <p>Find the best prices for the products you love and save money.</p>
        </div>
        <div className="box">
          <i className="fas fa-headset"></i>
          <h3>24/7 Customer Support</h3>
          <p>Get assistance and support whenever you need it.</p>
        </div>
      </div>
      <div className="category-section">
        <h2>Shop by Category</h2>
        <div className="category-container">
          {categories.map(category => (
            <div className="category-card" key={category.id}>
              <img src={category.image} alt={category.title} />
              <span>
              <h3>{category.title}</h3>
              <p style={{ fontSize: '20px' }}>{category.quantity}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;