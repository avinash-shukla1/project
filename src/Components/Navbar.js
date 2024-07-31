import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.webp";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around flex-wrap sticky top-0 z-40 lg:h-24  w-100 bg-blue-200">
        <div>
          <img
            className="lg:h-20 lg:w-20 md:h-16 md:w-16 sm:h-10 sm:w-10 h-10 w-10"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <div className="flex lg:gap-10 md:gap-6 gap-2 my-5">
            <Link className="lg:text-xl text-xs font-bold hover:text-blue-600 font-gilroy" to="/">
              Home
            </Link>
            <Link className="lg:text-xl text-xs font-bold hover:text-blue-600 font-gilroy" to="/aboute">Aboute</Link>
            <Link className="lg:text-xl text-xs font-bold hover:text-blue-600 font-gilroy" to="/whyus">WhyUs</Link>
            <Link className="lg:text-xl text-xs font-bold hover:text-blue-600 font-gilroy" to="/contact">Contect</Link>
           
          </div>
        </div>
        <div>
          <button className="bg-blue-900 lg:px-16 lg:py-4 my-4 rounded-full text-white ">Register/Login</button>
        </div>
        <div>
          <h1 className="lg:text-4xl sm:text-xs my-4"><FaCartArrowDown /></h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
