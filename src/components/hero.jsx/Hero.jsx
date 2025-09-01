import React from 'react'
import "./Hero.css"
import Navbar from '../header/Navbar'

import { IoSearch } from "react-icons/io5";
import { bg1, bg2, bg } from "../../assets/index.js"

const Hero = () => {
  return (
    <div className='hero'>
       <Navbar/>
       <div className="middle">
        <img src={bg1} alt="bg_image" className='bg1'/>
        <img src={bg2} alt="bg_image" className='bg2'/>
        <img src={bg} alt="bg_image" className='bg'/>
          <div className="content">
             <h1>Order Your daily Groceries</h1>
             <h3>#Free Delivery</h3>
             <div className="search">
                 <input type="text" placeholder='Search..' />
                 <button><IoSearch /></button>
             </div>
             <div className="best-deals">Click here to learn about today's best deals</div>
          </div>
       </div>
    </div>
  )
}

export default Hero
