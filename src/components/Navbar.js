// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src='./logo.png' alt='Expense Tracker Logo'></img>
          <p>Expense Tracker</p>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#expenses" className="nav-link">Expenses List</a>
          <a href="#add-expense" className="nav-link">Add Expense</a>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
