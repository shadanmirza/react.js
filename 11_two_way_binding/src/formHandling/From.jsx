import React from 'react'

const From = () => {
  const submitHandler = (e) => {
   e.preventDefault()
   console.log('submitted');
   
  }
  return (
    <div>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name' />
        <button>Submit</button>
      </form>
      </div>
  )
}

export default From