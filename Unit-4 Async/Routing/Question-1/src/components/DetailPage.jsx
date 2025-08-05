import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export const DetailPage = () => {

    const [detail,setDetail] = useState([]);

    const {id} = useParams();

    async function fetchData(){
        let res = await axios.get(`https://dummyjson.com/posts/${id}`);
        setDetail(res.data)
    }

     useEffect(()=>{
     fetchData()
    },[])

    if(!detail) return <h1>Loading.....</h1>

  return (
    <>
       <div>
          <h2>Post Detail</h2>
                <h3>ID: {detail.id}</h3>
                <h3>Title: {detail.title}</h3>
                <p>{detail.body}</p>
       </div>
    </>
  )
}
