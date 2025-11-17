import React, { use } from "react";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div>
      <h1>this is Reviews</h1>
    </div>
  );
};

export default Reviews;
