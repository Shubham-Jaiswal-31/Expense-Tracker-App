import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navigate = useNavigate();

	const redirectHome = () => {
		setIsOpen(false);
		navigate("/");
	}

	const redirectToExpenses = () => {
		setIsOpen(false);
		navigate("/track");
	}

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-logo">
					<img src="./logo.png" alt="Expense Tracker Logo"></img>
					<p>Expense Tracker</p>
				</div>
				<div className={`nav-menu ${isOpen ? "active" : ""}`}>
					<p className="nav-link" onClick={redirectHome}>
						Home
					</p>
					<a href="#top" className="nav-link" onClick={redirectToExpenses}>
						Add Expense
					</a>
					<a href="#expense-list" className="nav-link" onClick={redirectToExpenses}>
						Expenses List
					</a>
				</div>
				<div className="nav-icon" onClick={toggleMenu}>
					<div className={`hamburger ${isOpen ? "active" : ""}`}></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
