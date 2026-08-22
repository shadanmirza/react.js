import React from 'react'
import img1 from '../assets/vite.svg'
import Button from './Button'

const Center = () => {
  return (
    <div className="bg-white max-w mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10 mb-1">
       {/* Left: Text */}
      <div className="md:w-1/2 text-center md:text-left ml-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          We create <span className="text-orange-500">solutions</span> for your business
        </h1>
        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0 mb-2.5 ml-40">
          Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge.
        </p>
        <Button />
      </div>

      {/* <div className=' w-fit h-fit '>
        <img src={img1} alt="BrandLogo" className="h-96 w-96 ml-10 mt-5 " />
      </div> */}
    </div>
  )
}

export default Center