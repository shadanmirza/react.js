import React from 'react'
import Button from './Button'


const  Navbar = () => {
  return (
    <div className = 'bg-white flex items-start justify-between px-6 py-6 '>
       
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
    
      <div class="shrink-0 font-bold text-xl tracking-wide text-indigo-400 px-5 order-first">
        <a href="#">BrandLogo</a>
      </div>

      <div class=" space-x-12 text-sm font-medium px-50">
        <a href="#" class="hover:text-indigo-400 transition-colors">Home</a>
        <a href="#" class="hover:text-indigo-400 transition-colors">About</a>
        <a href="#" class="hover:text-indigo-400 transition-colors">Services</a>
        <a href="#" class="hover:text-red-400 transition-colors">Contact</a>
      </div>

     {/* button */}
     <Button />

    </div>
    
  )
}

export default  Navbar