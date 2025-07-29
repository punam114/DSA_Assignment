import React from 'react'
import './App.css'

function App() {

let flag = true;

function Click(){
  if(flag == true){
    flag = false
  }
  else{
    flag = true
  }
}
 
  return (
    <>
     <h1>{(flag) ? "Color is Green" : "Color is Yellow"}</h1>
     <button onClick={Click}>{(flag) ? "Green" : "Yellow"}</button>
    </>
  )
}

export default App;
