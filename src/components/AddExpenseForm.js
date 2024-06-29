import React, { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({ expenses, setExpenses }) => {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description && amount && category) {
			const newExpense = {
				description,
				amount: parseFloat(amount),
				category,
				date: new Date().toLocaleString(),
			};
			const updatedExpenses = [...expenses, newExpense];
			setExpenses(updatedExpenses);
			setDescription("");
			setAmount("");
			setCategory("");
		}
	};

	const isFormValid = description && amount && category;

	return (
		<form className="expense-form" onSubmit={handleSubmit}>
			<h2>Add Expense</h2>
			<input
				type="text"
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">Select Category</option>
				<option value="stationary">Stationary</option>
				<option value="food">Food</option>
				<option value="transport">Transport</option>
			</select>
			<button type="submit" disabled={!isFormValid}>
				Add Expense
			</button>
		</form>
	);
};

export default AddExpenseForm;
