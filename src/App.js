import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";
import AddExpenseForm from "./components/AddExpenseForm.js";
import ExpenseList from "./components/ExpenseList.js";
import NotFound from "./components/NotFound.js";

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
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<HeroSection />}></Route>
						<Route
							path="/track"
							element={
								<>
									<AddExpenseForm
										expenses={expenses}
										setExpenses={setExpenses}
									/>
									,{" "}
									<ExpenseList expenses={expenses} setExpenses={setExpenses} />
								</>
							}
						></Route>

						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
