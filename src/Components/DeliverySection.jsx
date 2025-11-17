import React from "react";
import deliveryImg1 from "../assets/live-tracking.png";
import deliveryImg2 from "../assets/safe-delivery.png";
import deliveryImg3 from "../assets/safe-delivery.png";

const DeliverySection = () => {
  return (
    <div
      className="mt-20 grid gap-5 border-b border-dashed"
      style={{ paddingBottom: "70px" }}
    >
      <div className="flex items-center  gap-10 bg-white p-7 rounded-3xl">
        <img
          className="w-40 h-40 border-r border-dashed"
          src={deliveryImg1}
          alt=""
          style={{ paddingRight: "30px" }}
        />
        <div>
          <h2 className="text-xl font-bold text-[#03373D]">
            Live Parcel Tracking
          </h2>
          <p className="text-[#606060] text-[15px]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex items-center  gap-10 bg-white p-7 rounded-3xl">
        <img
          className="w-40 h-40 border-r border-dashed"
          src={deliveryImg2}
          alt=""
          style={{ paddingRight: "30px" }}
        />
        <div>
          <h2 className="text-xl font-bold text-[#03373D]">
            100% Safe Deliveryg
          </h2>
          <p className="text-[#606060] text-[15px]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="flex items-center  gap-10 bg-white p-7 rounded-3xl">
        <img
          className="w-40 h-40 border-r border-dashed"
          src={deliveryImg3}
          alt=""
          style={{ paddingRight: "30px" }}
        />
        <div>
          <h2 className="text-xl font-bold text-[#03373D]">
            24/7 Call Center Support
          </h2>
          <p className="text-[#606060] text-[15px]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
