import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Contactpage from './Contactpage';
import Footer from './Footer';
import Abouteimage from './Abouteimage';
import Whycontant from './Whycontant';


const Contact = () => {
  return (
    <>
     <div className="flex flex-row  my-8  ">
        <div className="h-[100] md:w-1/4 bg-blue-400 ">
          <h1 className="text-[#ffffff] md:text-2xl my-2">
           Timings 24*7
          </h1>
          <h1 className='text-4xl'>
            <MdAttachEmail/>
          </h1>
          <h1 className='relative bottom-8 left-16 font-bold'>Email:nehabobade1@gmail.com</h1>

          <h1 className='text-4xl'><FaPhoneVolume /></h1>
          <h1 className='relative bottom-8 left-16 font-bold'>PH:4556676625</h1>
          <h1 className="text-[#ffffff] md:text-2xl my-2">
           Emergency Contact
          </h1>
          <h1 className='text-4xl'>
            <MdAttachEmail/>
          </h1>
          <h1 className='relative bottom-8 left-16 font-bold'>Email:nehapawar@gmail.com</h1>
          <h1 className='text-4xl'><FaPhoneVolume /></h1>
          <h1 className='relative bottom-8 left-16 font-bold'>PH:998877523</h1>

        <div className='flex items-center justify-center m-2 gap-4'>
        <h1 className='text-zinc-600 text-4xl'><FaSquareInstagram /></h1>
        <h1 className='text-zinc-600 text-4xl'><FaTwitter /></h1>
        <h1 className='text-zinc-600 text-4xl'><FaWhatsappSquare /></h1>
        <h1 className='text-zinc-600 text-4xl'><FaTelegram /></h1>
        <h1 className='text-zinc-600 text-4xl'><FaYoutube /></h1>
        <h1 className='text-zinc-600 text-4xl'><FaLinkedin /></h1>
    </div>
    <h1 className="text-[#ffffff] md:text-xl my-2">
           Follow This Account in Business
          </h1>
        </div>  



        <div className=" w-4/5 h-[100]">
          <div className="flex justify-evenly font-bold">
            <label for="red">
              <input
                className=""
                type="radio"
                id="Feedback"
                name="color"
                value="Feedback"
              />
              Feedback
            </label>
            <label for="blue">
              <input
                type="radio"
                id="Complaint"
                name="color"
                value="Complaint"
              />
              Complaint
            </label>
            <label for="green">
              <input type="radio" id="Enquiry" name="color" value="Enquiry" />
              Enquiry
            </label>
          </div>

          <input
            className="w-4/5  h-12 mx-2 my-4 rounded-md border-2 border-solid"
            type="text"
            placeholder="Name"
          />
          <br></br>
          <input
            className="w-4/5 h-12 mx-2  my-4 rounded-md"
            type="text"
            placeholder="+91 Phone Number"
          />
          <input
            className="w-4/5  h-12 mx-2 my-4 rounded-md"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-4/5  h-12 mx-2 my-4 rounded-md"
            type="text"
            placeholder="Subject"
          />
          <input
            className="w-4/5  h-24 mx-2 my-4 rounded-md"
            type="text"
            placeholder="Massage"
          />
          <br></br>
          <button
            className="py-2 px-20 mx-2 rounded-md bg-blue-600"
            type="Submit"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
     
      <Abouteimage/>
      <Whycontant/>
      <Footer/>
    </>
  )
}

export default Contact