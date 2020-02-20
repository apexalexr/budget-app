import React from 'react';
import logo from './logo.svg';
import './App.css';
import Budget from './components/budget.js'
import data from './test.json'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //       <Budget />
    //     </a>
    //   </header>
    // </div>
    <Budget data={data}/>
  );
}

export default App;
