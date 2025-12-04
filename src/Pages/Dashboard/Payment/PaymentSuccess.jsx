import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../../hooks/useAxios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxios();
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);

          const transactionId =
            res.data.transactionId || res.data.paymentInfo?.transactionId;

          const trackingId =
            res.data.trackingId || res.data.paymentInfo?.trackingId;
          setPaymentInfo({
            transactionId: transactionId,
            trackingId: trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h1 className="text-5xl font-bold text-green-500 text-center">
        Payment successful
      </h1>
      <p>TransactionId is:{paymentInfo.transactionId}</p>
      <p>Your trackingId : {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
