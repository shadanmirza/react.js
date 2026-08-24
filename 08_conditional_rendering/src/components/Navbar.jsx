import React from 'react'

const Navbar = (props) => {
     console.log(props);
    
  return (
    <div style={{backgroundColor:props.color}} className='bg-pink-200 flex item-center justify-between mb-1' >
        <h2>{props.title}</h2>
        <div  className='flex gap-10 '>
            {/* <h4 className='text-sm'>home</h4>
            <h4 className='text-sm'>home</h4>
            <h4 className='text-sm'>home</h4>
            <h4 className='text-sm'>home</h4> */}

            {props.links.map(function (elem,idx){
                return <h4 key={idx}>{elem}</h4>
            })}
        </div>
    </div>
  )
}

export default Navbar