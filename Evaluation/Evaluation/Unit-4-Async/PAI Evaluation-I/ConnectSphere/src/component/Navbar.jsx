import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
       <nav>
       <img className='logo1' src='https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-vector-link-icon-png-image_558916.jpg'/>
       <div>
        <Link to='/'>Home</Link> 
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
       </div>
       </nav>
    </>
  )
}
