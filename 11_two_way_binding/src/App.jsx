import React, { useState } from 'react'
import From from './formHandling/From'

const App = () => {
  //form
  //onSubmit Event
  //onChange event

  const [name, setName] = useState('')

  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e) => {
   e.preventDefault()

   const newAllUsers = [...allUsers]

   newAllUsers.push(name)

   console.log(newAllUsers);

   setallUsers(newAllUsers)

   setName('');
  };
  
  

  return (
    <div>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input  type="text" 
        placeholder='enter your name'
        value={name}
        required
        onChange={(e)=>{
          // console.log(e.target.value);
          setName(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>

      {allUsers.map(function(elem,idx){
        return <h1 key={idx}>{elem}</h1>
      })}

    </div>
  ) 
}

export default App