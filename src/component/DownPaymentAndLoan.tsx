import React from "react";
import "./DownPaymentAndLoan.css";

interface EmiProps {
  cost: number;
  downPayment: any;
  updateEMI: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emi: number;
  calculateEMI: any;
  updateDownPayment: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DownPaymentAndLoan = (EmiProps: EmiProps) => {
  const { cost, downPayment, updateEMI, calculateEMI, updateDownPayment, emi } =
    EmiProps;
  return (
    <div className='inner-wrapper'>
      <p className='header'>Down Payment</p>
      <div className='input-wrapper'>
        {/* <div>Total down payment - Rs. 1234</div> */}
        <input
          type='range'
          onChange={(e) => updateEMI(e)}
          min={0}
          max={100}
          value={downPayment}
        ></input>
        <div className='labels'>
          <label>{"0%"}</label>
          <b>{downPayment}</b>
          <label>{"100%"}</label>
        </div>
      </div>
      <p className='header'>Loan Per month</p>

      <div className='input-wrapper'>
        <input
          type='range'
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          value={emi}
          onChange={(e) => updateDownPayment(e)}
        />
        <div className='labels'>
          <label>{calculateEMI(cost)}</label>
          <b>{downPayment}</b>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>
    </div>
  );
};

export default DownPaymentAndLoan;
