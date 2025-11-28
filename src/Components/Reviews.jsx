// import React, { use } from "react";
// import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ReviewsCard from "./ReviewsCard";
// import deliveryImg from "../assets/customer-top.png";

// const Reviews = ({ reviewsPromise }) => {
//   const reviews = use(reviewsPromise);
//   return (
//     <div className="mt-20">
//       <div className="text-center">
//         <img className="flex mx-auto mb-5" src={deliveryImg} alt="" />
//         <h2 className="font-bold text-3xl text-[#03373D]">
//           What our customers are sayings
//         </h2>
//         <p>
//           Enhance posture, mobility, and well-being effortlessly with Posture
//           Pro. Achieve proper alignment, reduce pain, and strengthen your body
//           with ease!
//         </p>
//       </div>
//       <Swiper
//         loop={true}
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: "50%",
//           depth: 200,
//           modifier: 1,
//           scale: 0.75,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {reviews.map((review) => (
//           <SwiperSlide key={review.id}>
//             <ReviewsCard review={review}></ReviewsCard>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Reviews;

import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";
import deliveryImg from "../assets/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  // If slides are less than 4, turn off loop
  const enableLoop = reviews.length > 3;

  return (
    <div className="mt-20">
      <div className="text-center">
        <img className="flex mx-auto mb-5" src={deliveryImg} alt="" />
        <h2 className="font-bold text-3xl text-[#03373D]">
          What our customers are sayings
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        loop={enableLoop}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={reviews.length < 3 ? 1 : 3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
