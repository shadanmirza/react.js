import React from 'react'
import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import Center from './components/Center.jsx'



const App = () => {
  return (
    <div>
      <Navbar  />
      <Center />
      <Section name='Shaddy Rocks' review='Good but not best need improvement but need to be best.'/>
      <Section name='Rocks d xebex' review='Good but not best need improvement.'/>
      <Section name='hector' review='Good but not best.'/>
      
    </div>
  )
}

export default App