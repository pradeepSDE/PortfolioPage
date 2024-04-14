import React from 'react'
import { FaClover } from 'react-icons/fa6'
import { FaHeart } from "react-icons/fa";
import { FcLike } from 'react-icons/fc';
const Footer = () => {
  return (
    <div className='bg-gray-100 h-24 flex  justify-center items-center'>
      <h1 className='font-semibold text-lg flex items-center p-1 '>Made with <FcLike className='m-2 '/> by Pradeep Bisen</h1>
    </div>
  )
}

export default Footer
