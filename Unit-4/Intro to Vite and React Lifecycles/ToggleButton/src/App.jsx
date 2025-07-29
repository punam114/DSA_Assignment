import { useState } from 'react'
import './App.css'

function App() {

  let [toggle , setToggle] = useState(false)

  function toggleBtn(){
   setToggle(!toggle)
  }

  return (
    <>
     <div className={`h-20 rounded-full w-20 mb-8 bg-amber-50 ${toggle ? 'bg-yellow-400' : 'bg-red-500'}`}></div>
     <button onClick={()=>{toggleBtn()}}>{toggle ? "ON" : "OFF"}</button>
    </>
  )
}

export default App
