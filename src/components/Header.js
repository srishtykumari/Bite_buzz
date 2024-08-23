import React from 'react'
import { LOGO_URL } from '../Utils/constants'
import { useState } from 'react'

const Header = () => {

const [login, setLogin] = useState ("login");

  return (
    <div className="header">
 <div className="Logo-container">
  <img className='Logo' src={LOGO_URL} alt="" />
 </div>  
 <div className="nav-items">
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    <button className='login' onClick={()=>{
       login === "login" ? setLogin  ("logout") : setLogin ("login");
    }}>{login}</button>
  </ul>
 </div>   
    </div>
  )
}

export default Header
