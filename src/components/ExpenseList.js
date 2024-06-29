import React, { useState, useEffect } from "react";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, setExpenses }) => {
	const [editing, setEditing] = useState(null);
	const [filteredCategory, setFilteredCategory] = useState("");
	const [expandedIndex, setExpandedIndex] = useState(null);

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 786);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleDelete = (index) => {
		const updatedExpenses = expenses.filter((_, i) => i !== index);
		setExpenses(updatedExpenses);
	};

	const handleEdit = (index) => {
		setEditing(index);
	};

	const handleSave = (index, updatedExpense) => {
		const updatedExpenses = expenses.map((expense, i) =>
			i === index
				? { ...updatedExpense, date: new Date().toLocaleString() }
				: expense
		);
		setExpenses(updatedExpenses);
		setEditing(null);
	};

	const handleFilterChange = (e) => {
		setFilteredCategory(e.target.value);
	};

	const handleToggleExpand = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	const totalAmount = expenses.reduce(
		(total, expense) => total + parseFloat(expense.amount),
		0
	);

	const filteredExpenses = filteredCategory
		? expenses.filter((expense) => expense.category === filteredCategory)
		: expenses;

	return (
		<div className="expense-list">
			<h2>Expenses List</h2>
			<div className="filter">
				<label htmlFor="categoryFilter">Filter by Category:</label>
				<select
					id="categoryFilter"
					value={filteredCategory}
					onChange={handleFilterChange}
				>
					<option value="">All</option>
					<option value="stationary">Stationary</option>
					<option value="food">Food</option>
					<option value="transport">Transport</option>
				</select>
			</div>
			<div className="expense-grid">
				{isSmallScreen ? (
					<>
						<div className="expense-header-small">
              <span>Description</span>
							<span>Amount</span>
							<span>Category</span>
						</div>
					</>
				) : (
					<>
						<div className="expense-header">
							<span>Description</span>
							<span>Amount</span>
							<span>Category</span>
							<span>Date</span>
							<span>Actions</span>
						</div>
					</>
				)}
				{filteredExpenses.map((expense, index) => (
					<div className="expense-item" key={index} onClick={() => handleToggleExpand(index)}>
						{editing === index ? (
							<ExpenseForm
								expense={expense}
								onSave={(updatedExpense) => handleSave(index, updatedExpense)
                }
                screenSize={isSmallScreen}
							/>
						) : (
							<>
								{isSmallScreen ? (
									<>
										<span
											className="description"
										>
											{expense.description}
											<br />
											<small>{expense.date}</small>
										</span>
										<span className="amount">₹{expense.amount}</span>
										<span className="category">{expense.category}</span>
										{expandedIndex === index && (
											<div className="actions">
												<button onClick={() => handleEdit(index)}>Edit</button>
												<button onClick={() => handleDelete(index)}>
													Delete
												</button>
											</div>
										)}
									</>
								) : (
									<>
										<span>{expense.description}</span>
										<span>₹{expense.amount}</span>
										<span>{expense.category}</span>
										<span>{expense.date}</span>
										<div className="actions">
											<button onClick={() => handleEdit(index)}>Edit</button>
											<button onClick={() => handleDelete(index)}>
												Delete
											</button>
										</div>
									</>
								)}
							</>
						)}
					</div>
				))}
			</div>
			<div className="total-amount">
				<h3>Total Expense: ₹{totalAmount.toFixed(2)}</h3>
			</div>
		</div>
	);
};

const ExpenseForm = ({ expense, onSave, screenSize }) => {
	const [description, setDescription] = useState(expense.description);
	const [amount, setAmount] = useState(expense.amount);
	const [category, setCategory] = useState(expense.category);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave({ ...expense, description, amount, category });
	};

	return (
		<form onSubmit={handleSubmit} className="expense-edit">
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="stationary">Stationary</option>
				<option value="food">Food</option>
				<option value="transport">Transport</option>
			</select>
      {screenSize ? <></> :<><div></div></> }
			
			<button type="submit">Save</button>
		</form>
	);
};

export default ExpenseList;
