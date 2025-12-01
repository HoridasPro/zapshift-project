import React from "react";
import logoImg from "../assets/Vector 1.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center py-5 cursor-pointer">
      <figure>
        <img src={logoImg} alt="" />
      </figure>
      <a className="text-2xl -ms-3 font-bold text-[#303030]">ZapShift</a>
    </Link>
  );
};

export default Logo;
