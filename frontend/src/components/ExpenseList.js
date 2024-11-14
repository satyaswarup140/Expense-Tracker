// src/components/ExpenseList.js
import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id} className="expense-item">
            <div className="expense-info">
              <span>{expense.description}</span>
              <span>${expense.amount}</span>
              <span>{expense.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;  // Ensure this line is present
