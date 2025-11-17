import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import amzon from "../assets/amazon.png";
import amzon_vector from "../assets/amazon_vector.png";
import casio from "../assets/casio.png";
import moonstar from "../assets/moonstar.png";
import randstad from "../assets/randstad.png";
import star from "../assets/star.png";
import starpeople from "../assets/start_people.png";
import { Autoplay } from "swiper/modules";
const brandsLogo = [
  amzon,
  amzon_vector,
  casio,
  moonstar,
  randstad,
  star,
  starpeople,
];

const Brands = () => {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-3xl text-[#03373D] text-center">
        We've helped thousands of sales teams
      </h1>
      <Swiper className="mt-10 mb-5 border-b border-dashed font-bold"
       style={{ paddingBottom: "70px" }}
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {brandsLogo.map((logo) => (
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
