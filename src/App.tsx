import "./App.css";
import React, { useState } from "react";
import DownPayment from "./component/DownPayment.tsx";

function App() {
  const [cost, setCost] = useState(0);
  return (
    <div className='wrapper'>
      <div className='header'>EMI Calculator</div>
      <label className='inputWrapper'>
        <p className='title'>Total Cost of Asset</p>
        <input
          type='number'
          value={cost}
          placeholder='Enter your asset value'
          className='input'
        ></input>
      </label>
      <label className='inputWrapper'>
        <p className='title'>Interest Rate (in %)</p>
        <input
          type='number'
          value={cost}
          placeholder='Enter interest rate'
          className='input'
        ></input>
      </label>
      <label className='inputWrapper'>
        <p className='title'>Processing Fee (in %)</p>
        <input
          type='number'
          value={cost}
          placeholder='Processing fee'
          className='input'
        ></input>
      </label>
      <DownPayment />
    </div>
  );
}

export default App;
