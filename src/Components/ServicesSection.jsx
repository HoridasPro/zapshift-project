import React, { useState } from "react";
import serviceImg from "../assets/service.png";

const ServicesSection = () => {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-secondary mt-20 p-20 rounded-3xl max-w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Our Services</h1>
        <p className="text-[#DADADA] w-3xl flex mx-auto text-[15px] mt-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10 text-center">
        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item.id)}
            className={`py-8 px-6 rounded-2xl cursor-pointer transition duration-300 
              ${
                selected === item.id
                  ? "bg-[#CAEB66] border-2 border-[#CAEB66]"
                  : "bg-white border border-gray-300"
              }
            `}
          >
            <figure className="bg-gray-200 w-15 h-15 rounded-full flex justify-center items-center mx-auto">
              <img className="w-10 h-10" src={serviceImg} alt="" />
            </figure>

            <div className="mt-4">
              <h3 className="font-bold text-[#03373D]">{item.title}</h3>
              <p className="text-[#606060]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
