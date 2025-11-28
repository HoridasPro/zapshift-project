import React from "react";
import logoImg from "../assets/Vector 1.png";

const Logo = () => {
  return (
    <div className="flex items-center py-5">
      <figure>
        <img src={logoImg} alt="" />
      </figure>
      <a className="text-2xl -ms-3 font-bold text-[#303030]">ZapShift</a>
    </div>
  );
};

export default Logo;
