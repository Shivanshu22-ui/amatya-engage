import React from 'react'
import logo from '../assests/indi-logo.png'
import './navbar.css'
function Navbar() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center navbar'>
        <ul className='d-flex flex-column align-items-center navbar'>
            <li className='m-4'><img src={logo} alt="" /></li>
            <li className='m-4'> <i class="fa-solid fa-magnifying-glass"></i> </li>
            <li className='m-4'> <i class="fa-solid fa-film"></i> </li>
            <li className='m-4'> <i class="fa-regular fa-star"></i> </li>
            <li className='m-4'> <i class="fa-solid fa-arrow-right-to-bracket"></i> </li>
        </ul>
    </div>
  )
}

export default Navbar