import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {

    const [users,setUsers] = useState([])

    async function fetchData(){
       try {
        let res = await axios.get('https://dummyjson.com/users')
        console.log(res.data.users)
         setUsers(res.data.users);
       } catch (error) {
        console.log(error.message)
       }
    }

    useEffect(() => {
     fetchData()
    }, [])


  return (
    <>
       <div className='box1'>
        {users.map((user,i)=>(
         <div className='box2' key={i}>
            <img src={user.image}/>
            <h3>Name : {user.firstName} {user.maidenName} {user.lastName}</h3>
            <h4>Gender : {user.gender}</h4>
            <h4>Age : {user.age}</h4>
            <h4>BirthDate : {user.birthDate}</h4>
            <Link to={`/users/${user.id}`}><button>User Detail</button></Link>
            <button>Follow</button>
         </div>
       ))} 
       </div>
    </>
  )
}
