import "./App.css";
import React, { useState } from "react";
import DownPaymentAndLoan from "./component/DownPaymentAndLoan";
import { tenureData } from "./utils/contants";

function App() {
  const [cost, setCost] = useState<number>(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState<any | number>(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState<any | number>(0);

  const calculateEMI = (downPay: any) => {
    // const EMIamount = P * R* (1-R)^N/(1-R)^(N-1);
    if (!cost) return;
    const loanAmt = cost - Number(downPay);
    const rateOfInterest = interest / 100;
    const numberOfYears = tenure / 12;
    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numberOfYears) /
        (1 + rateOfInterest) ** numberOfYears -
      1;
    return Number(EMI / 12).toFixed(0);
  };

  const updateEMI = (event: any) => {
    console.log("in update emi", event.target.value);
    // if (!cost) {
    //   return;
    // }
    // const Dp = Number(event.target.value);
    // setDownPayment(Dp);
    setDownPayment(Number(event.target.value));
    // const emiNum = calculateEMI(Dp);
    const emiNum = calculateEMI(Number(event.target.value));
    setEmi(emiNum);
  };

  const calculateDownPayment = () => {};

  const updateDownPayment = (e: any) => {
    if (!cost) {
      return;
    }
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));
    const dp = calculateEMI(emi);
    setDownPayment(dp);
  };
  const handleAssetInput = () => {};
  const handleInterestRate = () => {};
  const handleProcessingFee = () => {};

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
          onChange={handleAssetInput}
          autoComplete='hello'
        ></input>
      </label>
      <label className='inputWrapper'>
        <p className='title'>Interest Rate (in %)</p>
        <input
          type='number'
          value={cost}
          placeholder='Enter interest rate'
          className='input'
          onChange={handleInterestRate}
        ></input>
      </label>
      <label className='inputWrapper'>
        <p className='title'>Processing Fee (in %)</p>
        <input
          type='number'
          value={cost}
          placeholder='Processing fee'
          className='input'
          onChange={handleProcessingFee}
        ></input>
      </label>
      <DownPaymentAndLoan
        cost={cost}
        downPayment={downPayment}
        updateEMI={updateEMI}
        emi={emi}
        calculateEMI={calculateEMI}
        updateDownPayment={updateDownPayment}
      />
      <div className='tenureContainer'>
        <span className='header'>Tenure</span>
        {tenureData.map((value) => {
          return (
            <button
              key={value}
              className={`tenure ${value === tenure ? "selected" : ""}`}
              onClick={() => setTenure(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
