import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {

    const {id} = useParams()

    const [detail,setDetail] = useState([])

    async function fetchDetails(){
        let res = await axios.get(`https://dummyjson.com/users/${id}`)
        console.log(res.data);
        setDetail(res.data);
    }

    useEffect(()=>{
    fetchDetails()
    },[])

  return (
    <>
    <div className='card'>
        <img src={detail.image}/>
            <h3>Name : {detail.firstName} {detail.maidenName} {detail.lastName}</h3>
            <h4>Gender : {detail.gender}</h4>
            <h4>Age : {detail.age}</h4>
            <h4>BirthDate : {detail.birthDate}</h4>
            <h4>Email : {detail.email}</h4>
            <h4>Phone No. : {detail.phone}</h4>
            <h4>UserName : {detail.username}</h4>
            <h4>Bloodgroup : {detail.bloodGroup}</h4>
            <h4>Height : {detail.height}</h4>
            <h4>Weight : {detail.weight}</h4>
    </div>
    </>
  )
}
