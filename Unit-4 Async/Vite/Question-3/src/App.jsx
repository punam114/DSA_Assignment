import React from 'react'
import './App.css'
import { ProfileCard } from './ProfileCard'

function App() {
  
  let user = {
    name : "John",
    age : 26,
    bio : `Hi, I'm ${name}, a passionate web developer who loves turning ideas into reality through code.`
  }

  return (
    <>
     <ProfileCard name={user.name} age={user.age} bio={user.bio}/>
    </>
  )
}

export default App
