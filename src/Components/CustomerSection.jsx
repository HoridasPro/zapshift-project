import React from "react";
import locationImg from "../assets/location-merchant.png";
import marchatImg from "../assets/be-a-merchant-bg.png";

const CustomerSection = () => {
  return (
    <div className="relative max-w-11/12 mx-auto">
      <img className="absolute" src={marchatImg} alt="" />
      <div className="flex items-center justify-evenly bg-secondary py-10 px-10 rounded-3xl mt-18">
        <div className="w-[50%]">
          <h2 className="text-[35px] font-bold text-white ">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="text-[#DADADA] mt-4">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="mt-6">
            <button className="py-2 px-5 rounded-3xl bg-primary font-semibold cursor-pointer">
              Become a Merchant
            </button>
            <button className="py-2 px-6 rounded-3xl font-semibold bg-secondary  text-primary border border-primary ml-3 cursor-pointer">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <figure>
          <img src={locationImg} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default CustomerSection;
