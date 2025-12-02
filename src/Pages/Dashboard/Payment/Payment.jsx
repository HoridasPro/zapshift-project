import React from "react";
import { useParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { paymentId } = useParams();
  const axiosSecure = useAxios();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", paymentId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${paymentId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href=res.data.url
    
  };
  if (isLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  return (
    <div>
      <h1>
        this is payment ${parcel.cost} :{parcel.parcelName}
      </h1>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
};

export default Payment;
