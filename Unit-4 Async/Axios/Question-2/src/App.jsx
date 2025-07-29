import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

const [data,setData] = useState([])

async function LoadData(){

let res = await axios.get("https://fakestoreapi.com/products");

console.log(res.data)
setData(res.data)
}

  return (
    <>
     <button onClick={LoadData}>Load Product</button>
     <div className='box1'>
      {data.map((ele,index)=>(
        <div className='box2' key={index}>
        <img src={ele.image}/>
         <h2>Id : {ele.id}</h2>
         <h3>Title : {ele.title}</h3>
         <h4>Description : {ele.description}</h4>
        </div>
      ))}
     </div>
    </>
  )
}

export default App
