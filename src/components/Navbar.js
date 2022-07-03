import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { FaCoins } from 'react-icons/fa'


function Navbar() {

  return (
    <Link to='/'>
      <div>
        <div className='navbar'>
          <FaCoins className='icon' />
          <h1>coins <span className=''>Search</span></h1>
        </div>
      </div>
    </Link>
  )
}

export default Navbar