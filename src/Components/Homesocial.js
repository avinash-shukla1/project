import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../App.css';

const Homesocial = () => {
  return (
    <>
    <div className='my-20'>
    <div className='flex items-center justify-center flex-col '>
        <h1 className='double-stroke'>Social Media</h1>
        <h1 className='text-xl'>Don’t miss to follow us on our social media accounts.</h1>
    </div>
    <div className='flex items-center justify-center m-2 gap-6'>
        <h1 className='text-red-800 text-6xl'><FaSquareInstagram /></h1>
        <h1 className='text-blue-600 text-6xl'><FaTwitter /></h1>
        <h1 className='text-green-600 text-6xl'><FaWhatsappSquare /></h1>
        <h1 className='text-blue-600 text-6xl'><FaTelegram /></h1>
        <h1 className='text-red-600 text-6xl'><FaYoutube /></h1>
        <h1 className='text-blue-600 text-6xl'><FaLinkedin /></h1>
    </div>
    </div>
    <div className='flex justify-center items-center flex-col bg-blue-400 py-8 mx-24' style={{height:"10%",width:"80%"}}>
        <h1 className='text-4xl font-semibold'>Collaboration is the key to success.</h1>
        <h1 className='text-xl font-gilroy'>Let's work together for your company's</h1>
        <h1 className='text-xl font-gilroy'>growth and innovation!</h1>
        <button className='bg-black px-10 py-4 text-white rounded-lg'>Now Know</button>
        <button></button>
    </div>
    </>
  )
}

export default Homesocial