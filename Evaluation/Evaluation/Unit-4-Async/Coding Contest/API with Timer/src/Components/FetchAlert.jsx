import React, { useState } from 'react'
import axios from 'axios'; 
import { Data } from './Data';

export const FetchAlert = () => {

    const [showData,setShowData] = useState(false)

    let url = "https://jsonplaceholder.typicode.com/posts"

    async function yesBtn(){
        let res = await axios.get(url)
        console.log(res.data)
    }


  return (
    <div>
    FetchAlert
    <h3>Do You Really Want To Fetch The Data</h3>
    <button onClick={yesBtn}>Yes</button>
    <button onClick={()=>setShowData(true)}>No</button>
    {/* {showData && <Data/>} */}
    </div>
  )
}
