import React from "react";
import { NavLink } from "react-router";
import logoImg from "../assets/Vector 1.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Services</NavLink>
      </li>
      {/* <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li> */}
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricingc</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <figure>
            <img src={logoImg} alt="" />
          </figure>
          <a className="text-2xl -ms-3 font-bold text-[#303030]">ZapShift</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <a className="btn">Sign In</a>
        <a className="btn ml-2 bg-primary hover:bg-[#caeb16]">Sign Up</a>
        <span className="w-10 h-10 border rounded-full flex items-center justify-center ml-1 -rotate-45 text-primary bg-[#1F1F1F]">
          <IoIosArrowRoundForward className="font-bold text-[30px]" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
