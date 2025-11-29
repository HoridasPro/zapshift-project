import React from "react";
import { Outlet } from "react-router";
import AuthImg from "../../assets/authImage.png";
import Logo from "../../Components/Logo";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Logo></Logo>
      <div className="flex items-center">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={AuthImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
