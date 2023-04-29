import React from 'react'
import cat from '../../images/cat.jfif';

const Landing = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-black  h-screen">
    <div className=" w-2/3 text-white text-center ">
  <h2 className="text-4xl lg:text-9xl md:text-7xl sm:text-5xl sm:m-8 font-bold   italic">Noteszipper</h2>
  <p className="p-4 text-xm italic md:p-12 sm:p-8  text-[#d1d5db]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni adipisicing elit. Blanditiis magni adipisicing elit. Blanditiis magni  Quas!</p>
  <button className="px-8 py-2 bg-[#059669] text-xm rounded italic mx-8 ">Sign In</button>
  <button className="px-8 py-2 bg-[#059669] text-xm rounded italic mx-8 ">Register</button>
    </div>
    
  <div className="w-1/3 ">
  <img className=" w-full" src={cat}></img>
  </div>
  </div>
  )
}

export default Landing ;