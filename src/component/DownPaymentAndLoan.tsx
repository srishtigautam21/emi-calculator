import React from "react";
import "./DownPaymentAndLoan.css";

const DownPaymentAndLoan = ({
  cost,
  downPayment,
  UpdateEMI,
  emi,
  CalculateEMI,
  updateDownPayment,
}) => {
  // console.log(downPayment);
  return (
    <div className='inner-wrapper'>
      <p className='header'>Down Payment</p>
      <div className='input-wrapper'>
        {/* <div>Total down payment - Rs. 1234</div> */}
        <input
          type='range'
          min='0'
          max={cost}
          value={downPayment}
          onChange={UpdateEMI}
          defaultValue={0}
        />
        <div className='labels'>
          <label>{"0%"}</label>
          <b>{downPayment}</b>
          <label>{"100%"}</label>
        </div>
        {/* <b>{downPayment}</b> */}
      </div>
      <p className='header'>Loan Per month</p>
      {/* <div>Total down payment - Rs. 1234</div> */}
      <div className='input-wrapper'>
        <input
          type='range'
          min={CalculateEMI(cost)}
          max={CalculateEMI(0)}
          value={emi}
          onChange={() => updateDownPayment()}
        />
        <div className='labels'>
          <label>{CalculateEMI(cost)}</label>
          <b>{downPayment}</b>
          <label>{CalculateEMI(0)}</label>
        </div>
      </div>
    </div>
  );
};

export default DownPaymentAndLoan;
