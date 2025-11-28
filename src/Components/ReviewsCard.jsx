import React from "react";
import { FaUserCircle } from "react-icons/fa";
import iconImg from "../assets/Frame.png";

const ReviewsCard = ({ review }) => {
  const { user_email, userName } = review;
  return (
    <div className="card bg-base-100  p-6 rounded-lg w-80 mt-20">
      <img className="w-10 h-10" src={iconImg} alt="" />
      <p className="mb-4 text-gray-700">
        “A posture corrector works by providing support and gentle alignment to
        your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.”
      </p>
      <div className="flex items-center mt-4">
        <div className="avatar mr-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <FaUserCircle className="text-2xl text-gray-600" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{userName}</h4>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
