import React from 'react'
import {Link} from 'react-router-dom'
import {darklogo, whitelogo} from '../assets/index.js'
import {MdLightbulbOutline, MdOutlineDarkMode } from 'react-icons/md'
import {useResultContext} from '../contexts/ResultContextProvider.js'
import Search from './Search';
import Tabs from './Tabs'
const Navbar = ({ darkTheme, setDarkTheme}) => {
  const {setSearchField, results, setResults} = useResultContext()
  const resetFields = () =>{
    setSearchField('')
    setResults([])
  }
  return (
    <div className='flex p-5 pb-0 flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-200 border-gray-900'>
    <div className='flex justify-between items-center  w-screen'>
   <Link to='/' onClick={() => resetFields()}>
   <img src={darkTheme ?  whitelogo : darklogo} alt='logo' className='object-contain pb-4'/>
   </Link>
   <button type="button"  onClick={() => setDarkTheme(darktheme => !darkTheme)}>
   {darkTheme ? <MdLightbulbOutline className='w-[25px] h-[25px] mb-4'/> : <MdOutlineDarkMode className='w-[25px] h-[25px] mb-4'/>}
   </button>
    </div>
    <div className='w-full'>
    <Search/>
    <Tabs/>
    </div>
    </div>
  )
}

export default Navbar