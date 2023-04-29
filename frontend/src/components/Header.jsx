import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-between items-center h-18 max-w-[1240px] mx-auto text-white bg-black'>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
     <ul className='flex'>
            <Link to='/mynotes'> <li className='p-4'>Mynotes</li></Link>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
           
    
          </ul>
        </div>
  )
}

export default Header