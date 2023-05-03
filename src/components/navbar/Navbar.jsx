import React from 'react'
import './Navbar.css'
import styles from "../../index.css"

export default function Navbar() {
  
  return (
    
        <div className='ListaNav'> 
        <a href="#" className='font-bold'>Logo</a>
        <ul className='MainList'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a>
            <ul>
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
        </li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
        </ul> 
        
        </div>
    
  )
}
