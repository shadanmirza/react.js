import React from 'react'
import Center from './Center'
import profile from '../assets/react.svg'

const Section = (props) => {
  return (
    <div className='w-md-max h-100 bg-white flex flex-col items-center pt-10 justify-between gap-10'>
      <div className='w-100 h-60 rounded bg-white text-xl text-black items-center border-2'>

        <div className='px-2 py-2 flex'>
          <img src={profile} alt="propic" className='w-25 '/>
          <div>
            <h1 className='font-bold text-2xl text-orange-500 px-4 pb-0.5 py-5 leading-tight'>{props.name}</h1>
            <p className=" px-4 text-gray-600 ">
             Market Manager
            </p>
        </div>
        </div>

        <h3 className='px-6 py-0.5'>{props.review}</h3>

        </div> 
    </div>
  )
}

export default Section