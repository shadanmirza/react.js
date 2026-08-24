

const App1 = () => {
    const [raja, setraja] = useState('hitesh')
  const [queen, setqueen] = useState('araya')

  
  const btnClicked = () => {
   
    console.log(raja);
    setraja('satya')
    
  }
  const ChangeQueen = () => {
   
    console.log(queen);
    setqueen('araya')
    
  }
  


  // let a = 0

  // const btnClicked = () => {
  //   a++
  //   console.log(a);
    
  // }
  return (
    <div>
        <div>
        {/* <h1>{a}</h1> */}
        <h1>{raja} x {queen}</h1>

        <button onClick={()=>{
          console.log('naccho');
        }}>increse</button>

        {/* <button onClick={btnClicked}>increse</button> it does not change state */}
        
       <button onClick={btnClicked}>increse</button>
       <button onClick={ChangeQueen}>yohoo</button>
      </div>
    </div>
  )
}

export default App1