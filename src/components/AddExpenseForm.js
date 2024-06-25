import React, { useState, useEffect } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const newExpense = {
        description,
        amount,
        category,
        date: new Date().toLocaleString()
      };
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
      setCategory('');
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
      <button type="submit" disabled={!isFormValid}>Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
