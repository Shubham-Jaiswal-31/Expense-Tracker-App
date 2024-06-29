import React from 'react';
import { useNavigate } from "react-router-dom";
import './HeroSection.css';

const HeroSection = () => {
  
  const navigate = useNavigate();

  const redirectToExpenses = () => {
		navigate("/track");
	}

  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-content">
        <h1>Welcome to Expense Tracker</h1>
        <p>Manage your expenses effortlessly and effectively. Track your spending, create budgets, and save more.</p>
        <button className="hero-button" onClick={redirectToExpenses}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src='./heroimg.png' alt='Expense Tracker Hero' />
      </div>
    </section>
  );
};

export default HeroSection;
