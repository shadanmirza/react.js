import React from 'react'
import Navbar from './components/Navbar'
import Man from './components/Man'
import Woman from './components/Woman'


const App = () => {

  const user1 = {
    name: 'sher',
    age: '20',
    gender: 'male'

  }
  const user2 = {
    name: 'sherni',
    age: '20',
    gender: 'female'

  }
  const user3 = {
    name: 'aayu',
    age: '10',
    gender: 'male'

  }

  function btnClicked() {
    console.log('button is clicked');
    
  }

  return (
    <div>
      
      {/* props/props drilling */}

      <Navbar title='shaddy' color='red' links={['home','about','account','contact']} />
      <Navbar title='haka' color='green' links={['home','product','account','contact us']} />
      <Navbar title='targeriyan' color='yellow' links={['home','taptap','account','contact here']} />

    {/* ternari oprator */}

      {user2.gender == 'male' ? Man() : Woman()}


    {/* event listener in jwx  */}

     <button
     onClick={btnClicked}
     className='active:scale-95 bg-emerald-600 text-white rounded px-5 py-6 font-bold m-2'
     >Click Download</button>
      
    </div>
  )
}

export default App