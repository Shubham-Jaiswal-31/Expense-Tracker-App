import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Expense Tracker</h1>
        <p>Manage your expenses effortlessly and effectively. Track your spending, create budgets, and save more.</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src='./heroimg.png' alt='Expense Tracker Hero' />
      </div>
    </section>
  );
};

export default HeroSection;
