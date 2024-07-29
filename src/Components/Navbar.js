import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.webp";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around sticky top-0 z-40 h-24 w-100 bg-blue-200">
        <div>
          <img
            className="h-24 w-24"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <div className="flex gap-10 my-5">
            <Link className="text-xl font-bold hover:text-blue-600 font-gilroy" to="/">
              Home
            </Link>
            <Link className="text-xl font-bold hover:text-blue-600 font-gilroy" to="/aboute">Aboute</Link>
            <Link className="text-xl font-bold hover:text-blue-600 font-gilroy" to="/whyus">Why Us</Link>
            <Link className="text-xl font-bold hover:text-blue-600 font-gilroy" to="/contact">Contect</Link>
           
          </div>
        </div>
        <div>
          <button className="bg-blue-900 px-16 py-4 my-4 rounded-full text-white">Register/Login</button>
        </div>
        <div>
          <h1 className="text-4xl my-4"><FaCartArrowDown /></h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
