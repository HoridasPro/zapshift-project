import React from "react";
import workImg from "../assets/bus.png";

const WorkSection = () => {
  return (
    <div className="mt-15 max-w-11/12 mx-auto">
      <h1 className="text-2xl font-bold">How it Works</h1>
      <div className="grid grid-cols-4 gap-5 mt-3">
        <div className="bg-white py-8 px-6 rounded-2xl">
          <img src={workImg} alt="" />
          <h3 className="font-bold ">Booking Pick & Drop</h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white py-8 px-6 rounded-2xl">
          <img src={workImg} alt="" />
          <h3 className="font-bold ">Cash On Delivery</h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white py-8 px-6 rounded-2xl">
          <img src={workImg} alt="" />
          <h3 className="font-bold ">Delivery Hub</h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white py-8 px-6 rounded-2xl">
          <img src={workImg} alt="" />
          <h3 className="font-bold ">Booking SME & Corporate</h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
