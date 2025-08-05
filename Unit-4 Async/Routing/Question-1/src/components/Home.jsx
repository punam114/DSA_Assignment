import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'
import {Link } from 'react-router-dom';
import { DetailPage } from './DetailPage';

export const Home = () => {

    let url = "https://dummyjson.com/posts";

    const [posts,setPosts] = useState([])

   

   async function fetchData(){
    let res = await axios.get(url)
    let data = res.data.posts
    setPosts(data)
    console.log(data )
   }
 
   useEffect(() => {
    fetchData()
   }, [])
   
  return (
    <>
    {/* <h1>This is Home Component</h1> */}
    <div className='box-1'>
        {posts.map((post,i)=>(
        <div className='box-2' key={i}>
            <h3>Id : {post.id}</h3>
            <h3>Title : {post.title}</h3>
            <h3>{post.body}</h3>
            <Link to={`/detail/${post.id}`}>Detail</Link>
        </div>
    ))}
    </div>

    </>
  )
}
