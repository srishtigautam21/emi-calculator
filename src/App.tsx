import "./App.css";
import React, { useState } from "react";
import DownPaymentAndLoan from "./component/DownPaymentAndLoan.tsx";
import { tenureData } from "./utils/contants.ts";

function App() {
  const [cost, setCost] = useState<number>(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState<any | number>(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState<any | number>(0);

  const CalculateEMI = (downPayment: number) => {
    // const EMIamount = P * R* (1-R)^N/(1-R)^(N-1);
    if (!cost) return;
    const loanAmt = cost - downPayment;
    const rateOfInterest = interest / 100;
    const numberOfYears = tenure / 12;
    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numberOfYears) /
        (1 + rateOfInterest) ** numberOfYears -
      1;
    return Number(EMI / 12).toFixed(0);
  };

  const UpdateEMI = (event: any) => {
    if (!cost) {
      return;
    }
    const Dp = Number(event.target.value);
    setDownPayment(Dp);
    const emiNum = CalculateEMI(Dp);
    setEmi(emiNum);
  };

  const calculateDownPayment = () => {};

  const updateDownPayment = (e: any) => {
    if (!cost) {
      return;
    }
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));
    const dp = CalculateEMI(emi);
    setDownPayment(dp);
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
      <div className='tenureContainer'>
        <span className='header'>Tenure</span>
        {tenureData.map((value) => {
          return (
            <button
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
