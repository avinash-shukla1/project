import React from 'react'

const Homepage = () => {
  return (
    <>
    <div className='flex m-2'>
    <div className='lg:h-full lg:w-3/4 '>
        <img className='overflow-hidden object-cover' src="https://th.bing.com/th/id/OIP.cf34S8t1AshTwnNqiA0nuAHaEF?w=725&h=400&rs=1&pid=ImgDetMain" alt="" />
    </div>
    <div className='relative lg:right-28 lg:top-20'>
        <h1 className='lg:text-5xl sm:text-xs font-bold font-sans italic '>How to Write a Business Proposal</h1>
        <h1 className='lg:text-5xl sm:text-xs font-bold  font-sans my-2 italic'>[Examples + Template]</h1>
        <h1 className='lg:text-5xl sm:text-xs  font-bold font-sans my-2 italic'>Get in touch with us</h1>
        <button className='bg-blue-900 lg:px-20 lg:py-4 px-10 py-2 font-sans rounded-full text-white lg:text-2xl text-xl'>Services</button>
    </div>
    </div>
    </>
  )
}

export default Homepage