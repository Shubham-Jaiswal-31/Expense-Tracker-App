import React, { useState, useEffect } from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, setExpenses }) => {
  const [editing, setEditing] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState('');

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleEdit = (index) => {
    setEditing(index);
  };

  const handleSave = (index, updatedExpense) => {
    const updatedExpenses = expenses.map((expense, i) =>
      i === index ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setEditing(null);
  };

  const handleFilterChange = (e) => {
    setFilteredCategory(e.target.value);
  };

  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const filteredExpenses = filteredCategory
    ? expenses.filter((expense) => expense.category === filteredCategory)
    : expenses;

  return (
    <div className="expense-list">
      <h2>Expenses List</h2>
      <div className="filter">
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" value={filteredCategory} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
        </select>
      </div>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index}>
            {editing === index ? (
              <ExpenseForm
                expense={expense}
                onSave={(updatedExpense) => handleSave(index, updatedExpense)}
              />
            ) : (
              <div className="expense-item">
                <span>{expense.description}</span>
                <span>{expense.amount}</span>
                <span>{expense.category}</span>
                <span>{expense.date}</span>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="total-amount">
        <h3>Total Expense: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const ExpenseForm = ({ expense, onSave }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...expense, description, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
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
      <button type="submit">Save</button>
    </form>
  );
};

export default ExpenseList;
