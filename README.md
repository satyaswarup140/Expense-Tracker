# Personal Expense Tracker

A simple web application that allows users to track their personal expenses. Users can add, view, and manage their expenses in a user-friendly interface.

## Features

- Add new expenses with descriptions, amounts, and dates.
- View a list of all expenses with their details.
- Delete or edit expenses.
- Track total expenses dynamically.
  
## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: React useState, useEffect

## Prerequisites

Before you begin, ensure that you have met the following requirements:

- **Node.js**: Download and install the latest version of Node.js from [nodejs.org](https://nodejs.org).
- **MongoDB**: You can use MongoDB Atlas or run MongoDB locally.

## Getting Started

### 1. Clone the repository:

       ```bash
       git clone https://github.com/satyaswarup140/Expense-Tracker.git

    2. Install dependencies for both the backend and frontend:
       Backend:
       Navigate to the backend folder:
       cd backend
       npm install
       
       Frontend:
       Navigate to the frontend folder:
       cd ../frontend
       Install frontend dependencies:
       npm install
    
    3. Set up environment variables for MongoDB:
       Create a .env file in the backend folder with the following content:
       MONGODB_URI=<your_mongo_connection_string>
       PORT=5002
       Make sure to replace <your_mongo_connection_string> with your actual MongoDB connection string (e.g., from MongoDB Atlas).

    4. Start the development servers:
       Backend:
       In the backend folder, run:
       npm start
       This will start the backend server on http://localhost:5002.

       Frontend:
       In the frontend folder, run:
       npm start
       This will start the React development server on http://localhost:3004.

       Now you can open the app in your browser and start tracking your expenses!

## Usage
Add an Expense: You can add an expense by entering the description, amount, and date in the form and clicking "Add Expense".
View Expenses: The list of added expenses will be displayed below the form.
Backend API: The frontend fetches expense data from the backend API (GET /api/expenses).
API Documentation
1. GET /api/expenses
Fetch all expenses from the database.

Response:
json:
[
  {
    "_id": "5f5b7b1d93e3c12eaf88d8ab",
    "description": "Groceries",
    "amount": 50,
    "date": "2024-11-14"
  },
  {
    "_id": "5f5b7b1d93e3c12eaf88d8ac",
    "description": "Coffee",
    "amount": 5,
    "date": "2024-11-13"
  }
]
2. POST /api/expenses
Create a new expense.

Request Body:
json
Copy code
{
  "description": "Rent",
  "amount": 1000,
  "date": "2024-11-10"
}
Response:
json
Copy code
{
  "_id": "5f5b7b1d93e3c12eaf88d8ad",
  "description": "Rent",
  "amount": 1000,
  "date": "2024-11-10"
}
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

### Key Sections:

- **Introduction**: Overview of the project.
- **Tech Stack**: Technologies used.
- **Prerequisites**: Instructions on what is needed to run the project.
- **Getting Started**: How to set up the project on your local machine, including cloning the repo, installing dependencies, and configuring the environment.
- **Usage**: How to use the app once it's running.
- **API Documentation**: Description of API endpoints, request bodies, and responses.
- **Contributing**: How others can contribute to the project.
- **License**: License information.

This should help make the project more understandable for others and ease collaboration. Let me know if you'd like to add any more details!
