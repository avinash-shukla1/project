import React from 'react'

const Whycontant = () => {
  return (
    <>
     <div className="   flex bg-blue-900 flex-wrap  justify-around my-24">
      <div className="">
      <img className="w-50 h-80 " src='https://plus.unsplash.com/premium_photo-1661412610256-3d5c671224b4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
      </div>
      <div className="h-44  w-96 rounded-md border-2 border-solid my-20 bg-blue-400 ">
        <h1 className="text-2xl font-bold mx-6 my-5 text-[#FFFFFF]">
          Your Company.Our Community
        </h1>
        <h1 className="text-sm font-bold  w-20 relative left-40 bottom-4 text-[#FFFFFF]">
          Need help?
        </h1>
        <button
          className="py-3 rounded-md px-10 relative bg-blue-200  left-20 border-2 text-[#FFFFFF] border-solid"
          
        >
          VIEW IT SCHEDULE
        </button>
      </div>
    </div>
    </>
  )
}

export default Whycontant