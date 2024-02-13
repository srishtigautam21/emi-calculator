import React from "react";

const DownPayment = () => {
  return (
    <div>
      <p>Down Payment</p>
      <div>Total down payment - Rs. 1234</div>
      <input type='range' min='0%' max='100%' />
    </div>
  );
};

export default DownPayment;
