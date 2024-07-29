import React from 'react'

const Abouteservis = () => {
  return (
    <div className='bg-blue-400 relative left-20 top-10'>
        <input className='px-20 py-4' type="text"  placeholder='Username'/>
        <br></br>
        <input className='px-20 py-4' type="text" placeholder='Email' />
        <br></br>
        <input className='px-20 py-10' type="text" placeholder='massage' />
        <br></br>
        <button className='bg-white text-white px-40 py-4'>Send</button>
    </div>
  )
}

export default Abouteservis