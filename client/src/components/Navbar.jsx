import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/"><img src={assets.logo} alt="logo" className='w-12 sm:w-16 lg:w-24' /></Link>

        <div>
            
        </div>

    </div>
  )
}

export default Navbar