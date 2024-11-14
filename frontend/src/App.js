import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';  // Correctly import the component

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />  {/* Pass the fetched expenses */}
      </div>
    </div>
  );
}

export default App;
