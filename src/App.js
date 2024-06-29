import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";
import AddExpenseForm from "./components/AddExpenseForm.js";
import ExpenseList from "./components/ExpenseList";

const App = () => {
	const [expenses, setExpenses] = useState(() => {
		const savedExpenses = localStorage.getItem("expenses");
		return savedExpenses ? JSON.parse(savedExpenses) : [];
	});

	useEffect(() => {
		const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
		if (storedExpenses) {
			setExpenses(storedExpenses);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<section id="home">
					<HeroSection />
				</section>
				<section id="expenses">
					<ExpenseList expenses={expenses} setExpenses={setExpenses} />
				</section>
				<section id="add-expense">
					<AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default App;
