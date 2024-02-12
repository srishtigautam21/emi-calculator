import "./App.css";
import React, { useState } from "react";

function App() {
  const [cost, setCost] = useState(0);
  return (
    <div className='App'>
      <div className='header'>EMI Calculator</div>
      <label>
        Total Cost of Asset
        <input
          type='number'
          value={cost}
          placeholder='Enter your asset value'
        ></input>
      </label>
      <label>
        Interest Rate (in %)
        <input
          type='number'
          value={cost}
          placeholder='Enter interest rate'
        ></input>
      </label>
      <label>
        Processing Fee (in %)
        <input type='number' value={cost} placeholder='Processing fee'></input>
      </label>
    </div>
  );
}

export default App;
