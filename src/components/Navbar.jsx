import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
        <div>
            <h1>Lauri Ojanen</h1>
        </div>

        {/* menu */}
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

         {/* Hamburger */}
         <div className='hidden'>
            <FaBars />
         </div>

         {/* Mobile menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Mobile menu */}
        <div></div>
    </div>
  )
}

export default Navbar