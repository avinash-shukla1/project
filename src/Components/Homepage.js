import React from 'react'

const Homepage = () => {
  return (
    <>
    <div className='flex m-2'>
    <div style={{"clip-path": "polygon(0 0, 51% 1%, 88% 100%, 0% 100%)"}} className='h-full w-3/4 '>
        <img className='overflow-hidden object-cover' src="https://www.kenwayconsulting.com/app/uploads/2019/08/shutterstock_633351221-1024x683.jpg" alt="" />
    </div>
    <div className='relative right-40 top-20'>
        <h1 className='text-4xl font-bold font-sans '>How to Write a Business Proposal</h1>
        <h1 className='text-4xl font-bold font-sans my-2'>[Examples + Template]</h1>
        <h1 className='text-4xl font-bold font-sans my-2'>Get in touch with us</h1>
        <button className='bg-blue-900 px-20 py-4 font-sans rounded-full text-white text-2xl'>Services</button>
    </div>
    </div>
    </>
  )
}

export default Homepage