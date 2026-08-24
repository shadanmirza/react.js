import React from 'react'
import { useState } from 'react'
import App1 from './App1'


const App = () => {
   const [marks, setmarks] = useState([80,10,20,70,100,50])
  
  let [Num, setNum] = useState(0)

  function graceStudent () {
    console.log('de diya');

    const newMarks = marks.map(function (elem) {
      if (elem<33) {
        return elem+5
      } else {
        return elem
      }
      
    })
    setmarks(newMarks)
  }

  return (
    <div >
      <div>
      {/* <App1 /> */}
      <h1>helo</h1>
      <h1>
        {Num}
      </h1>
      <button className='bg-amber-800 rounded-2xl px-3 py-2 border-black border-2 font-bold' onClick={() => {
        setNum(Num + 10)
      }}>Increse</button>
      </div>

      <div>
        {marks.map(function (elem, idx) {
          return <h1>Student {idx+1} = {elem} ({elem>33?'pass':'fail'}) </h1>
        })}
        <button onClick={graceStudent} className='bg-amber-800 rounded-2xl px-3 py-2 border-black border-2 font-bold' >Give them grace</button>
      </div>

    </div>
  )
}

export default App