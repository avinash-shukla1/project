import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   <>
     <div className="w-full flex flex-row justify-center my-10 bg-blue-200 gap-10 ">
        
        <div className="  w-1/6  ">
            <h2 className=" font-bold lg:text-4xl text-xl font-gilroy text-white font-serif">Product</h2>
            <h1 className="hover:underline hover:decoration-solid hover:text-blue-800 text-xl font-serif ">Website Templates</h1>
            <h1 className="hover:underline hover:decoration-solid hover:text-blue-800 text-xl font-serif">Website Builder</h1>
            <h1 className="hover:underline hover:decoration-solid hover:text-blue-800 text-xl font-serif">Website Design</h1>
            <h1 className="hover:underline hover:decoration-solid hover:text-blue-800 text-xl font-serif ">Wix Feature</h1>
            <h1 className="hover:underline hover:decoration-solid hover:text-blue-800 text-xl font-serif">UI/UX Design</h1>
        </div> 


        <div  className="w-1/6 ">
          <h2 className=" font-bold lg:text-4xl text-xl font-gilroy text-white font-serif">Terms & Conditions</h2>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-serif">Aboute us</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-serif">Terms of Services</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-serif">Refund Police</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-serif">Contact</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-serif">Apple Books</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-serif">Apple Store</h1>
        </div>


        {/* <div  className="w-1/6 ">  
        <h2 className="  font-bold text-4xl font-gilroy text-white">Plan & Pricing</h2>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Apple Store App</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Certified Refurbished</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Apple Trad In</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Financing</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Carrier detail at Apple</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Order Status</h1>
          <h1 className="hover:underline hover:decoration-solid hover:text-blue-600 text-xl font-gilroy">Shopping Help</h1>
        </div> */}

        <div  className="w-1/4 ">
          <h2 className="  font-bold lg:text-4xl text-xl font-serif text-white">Website Design, Business Website Design, eCommerce Website Design</h2>
          <h2>@ 2024 Website Design, Business Website Design, eCommerce Website Design. Built using WordPress and the Mesmerize Theme</h2>
          <h2 className='font-semibold font-serif'>Number-895967424</h2>
          <h2 className='font-semibold font-serif'>Email-N@.com</h2>
          <div className='flex items-center justify-center gap-2'>
        <h1 className='text-zinc-600 '><FaSquareInstagram /></h1>
        <h1 className='text-zinc-600 '><FaTwitter /></h1>
        <h1 className='text-zinc-600 '><FaWhatsappSquare /></h1>
        <h1 className='text-zinc-600 '><FaTelegram /></h1>
        <h1 className='text-zinc-600 '><FaYoutube /></h1>
        <h1 className='text-zinc-600 '><FaLinkedin /></h1>
        <button className='bg-green-600 lg:px-10 lg:py-2 text-white text-xl font-serif rounded-full'>Chat with Us</button>
    </div>
        </div>

       
      </div>
      <div className='flex items-center justify-center m-2 gap-6'>
        <h1 className='text-zinc-600 lg:text-6xl text-4xl'><FaSquareInstagram /></h1>
        <h1 className='text-zinc-600 lg:text-6xl text-4xl'><FaTwitter /></h1>
        <h1 className='text-zinc-600 lg:text-6xl text-4xl'><FaWhatsappSquare /></h1>
        <h1 className='text-zinc-600 lg:text-6xl text-4xl'><FaTelegram /></h1>
        <h1 className='text-zinc-600 lg:text-6xl text-4xl'><FaYoutube /></h1>
        <h1 className='text-zinc-600 lg:text-6xl text-4xl'><FaLinkedin /></h1>
    </div>
   </>
  )
}

export default Footer