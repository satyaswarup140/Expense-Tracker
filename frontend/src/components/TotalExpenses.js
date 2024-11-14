// frontend/src/components/TotalExpenses.js

import React, { useEffect, useState } from 'react';
import { getExpenses } from '../api/api';

const TotalExpenses = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTotalExpenses = async () => {
      try {
        const expenses = await getExpenses();
        const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        setTotal(totalAmount);
      } catch (error) {
        console.error("Error fetching total expenses:", error);
      }
    };
    fetchTotalExpenses();
  }, []);

  return (
    <div className="total-expenses">
      <h2>Total Expenses</h2>
      <p>${total.toFixed(2)}</p>
    </div>
  );
};

export default TotalExpenses;
