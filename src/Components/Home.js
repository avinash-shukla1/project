import React from 'react'
import Homeswiper from './Homeswiper'
import HomeTamplate from './HomeTamplate'
import HomeVideo from './HomeVideo'
import Homedata from './Homedata'
import Homelearn from './Homelearn'
import Footer from './Footer'
import Homesocial from './Homesocial'
import Homepage from './Homepage'

const Home = () => {
  return (
    <>
    {/* <div className='flex items-center flex-col justify-center'>
        <h1 className='text-blue-400 text-6xl font-bold font-sans'>Creating a business proposal:</h1>
        <h2 className='text-2xl  font-gilroy'>tos, templates, and tips</h2>
        <button className='bg-blue-400 rounded-full m-4 px-20 py-4 font-sans text-xl'>Create Proposal</button>
    </div> */}
   
  
    <Homepage/>
    <HomeTamplate/>
    <HomeVideo/>
    <Homedata/>
    <Homelearn/>
    <Homesocial/>
    <Footer/>
    </>
  )
}

export default Home