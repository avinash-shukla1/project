import React from 'react'

const Whycontact = () => {
  return (
    <>
     <div className='flex flex-row md:gap-28 my-8 justify-evenly'>
        <div className='h-60 w-60  rounded-md mx-6 border-2 border-blue-900'>
        <img className='h-full w-full'  src='https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
        </div>
        <div className='md:h-60 md:w-1/3  rounded-md'>
            <h1 className='md:text-4xl text-[#66251E] ' >Mrs.R.K.Yadav</h1>
            <h1 className='font-bold py-2'><span className=' text-[#66251E] font-bold my-4'>Designation:</span> Sr. Consultant,Bussiness</h1>
            <h1 className='md:font-bold md:py-6'> <span className=' text-[#66251E] '>Department:</span>Software</h1>
            <h1><span className='text-[#66251E] text-xl'>15 </span>Years of Experience</h1>
            <h1 className='md:py-4 font-bold'>Book a Physical Consultation</h1>
        </div>
        <div className='h-60 w-1/4 bg-blue-100 rounded-md'>
            <h1 className='font-bold md:mx-4 md:my-4 '>Qualifications</h1>
            <h1 className='font-bold md:mx-4  md:my-4'>Experience</h1>
            <h1 className='font-bold md:mx-4  md:my-4'>Field Of Expertise</h1>
            <h1 className='font-bold md:mx-4  md:my-4'>Research & Publications</h1>
            <h1 className='font-bold md:mx-4  md:my-4'>Certification & Memberships</h1>
        </div>
      </div>
    </>
  )
}

export default Whycontact