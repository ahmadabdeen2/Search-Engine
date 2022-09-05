import React from 'react'
import {Link } from 'react-router-dom'

const Tabs = () => {
  return (
    <div className='dark:text-white text-gray-900 flex flex-row items-center'>
    <Link to='/search'> Search </Link>
    <div className='w-[2px] h-[15px] mr-3 ml-3 dark:bg-white bg-gray-900 '/> 
    <Link to='/image'> Images </Link>
    <div className='w-[2px] h-[15px] mr-3 ml-3 dark:bg-white bg-gray-900 '/>
    <Link to ='/video'> Videos </Link>
    <div className='w-[2px] h-[15px] mr-3 ml-3 dark:bg-white bg-gray-900 '/>
    <Link to ='/news'> News </Link>
    </div>
  )
}

export default Tabs