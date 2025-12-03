import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h1>Payment is cancelled. Plaese try again</h1>
      <Link to="/dashboard/myParcels">
        <button className="btn btn-primary text-black">Tye again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
