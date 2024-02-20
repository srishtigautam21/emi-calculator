import "./App.css";
import React, { useState } from "react";
import DownPaymentAndLoan from "./component/DownPaymentAndLoan.tsx";

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const CalculateEMI = () => {};

  const UpdateEMI = (event: any) => {
    if (!cost) {
      return;
    }
    const Dp = Number(event.target.value);
    setDownPayment(Dp);
  };

  const updateDownPayment = (e: any) => {
    if (!cost) {
      return;
    }
    const emi = Number(e.target.value);
    setEmi(emi);
  };

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
      <DownPaymentAndLoan
        cost={cost}
        downPayment={downPayment}
        UpdateEMI={UpdateEMI}
        emi={emi}
        CalculateEMI={CalculateEMI}
        updateDownPayment={updateDownPayment}
      />
    </div>
  );
}

export default App;
