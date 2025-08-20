import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Theme } from '../ThemeContext'
import { useContext } from 'react'


export const RepoCard = () => {

 const [user,setUser] = useState([]) 
 const { theme, setTheme } = useContext(Theme)   

async function fetchData(){
  let res = await axios.get('https://api.github.com/users/punam114/repos');
  console.log(res.data)
  setUser(res.data)
}

useEffect(()=>{
    fetchData()
},[])

  return (
    <>
    <div>
        {user.map((ele,id)=>(
            <div key={id} className={theme ? "Light" : "Dark"}>
                <h3>Name : {ele.name}</h3>
                <h3>Full Name : {ele.full_name}</h3>
                <h3>Description : {ele.description}</h3>
                <h3>Fork : {ele.forks_url}</h3>
            </div>
        ))}
    </div>
    </>
  )
}
