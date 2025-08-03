import React from 'react'
import "./App.css"

export const ProfileCard = ({name,age,bio}) => {
  return (
    <div className='box'>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Bio : {bio}</h2>
    </div>
  )
}
