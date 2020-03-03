import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Budget from './components/budget.js'
import data from './test.json'
import SubBudget from './components/subbudget.js'

function App() {
  console.log("starting app")
  return (
    <>
      <Budget data={data}/>
      <SubBudget />
    </>
    );
}

export default App;
