import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImYoutube2 } from 'react-icons/im'

import { SiYoutubetv } from 'react-icons/si'
import { useDispatch } from 'react-redux'
import { toogleMenu } from '../utils/appSlice'

const Head = ({setSideBar}) => {
  const dispatch = useDispatch();
  return (
    <div className='w-full  p-6 sm:p-4  flex items-center justify-between gap-4 h-[6vw] sm:h-[5vw] overflow-hidden'>
      <div className='w-[10%] flex items-center justify-evenly h-full bg-gray-50 gap-4 '>
        <div className='flex gap-4 items-center px-2'>
          <GiHamburgerMenu onClick={()=>{
            dispatch(toogleMenu())
          }} className='text-2xl cursor-pointer text-black font-bold' />
          <ImYoutube2 className='text-red-600 text-[50px] sm:text-[70px] cursor-pointer p-0 m-0' />

        </div>

      </div>
      <div className='w-[80%] flex items-center justify-center'>

        <div className='bg-gray-50 rounded-[50px] p-1 px-2 sm:p-2  outline-none w-[60%] overflow-hidden flex items-center border-[1px] border-gray-200 '>
          <input className='bg-gray-50 outline-none w-[95%] h-full placeholder-gray-800 text-sm' placeholder='Search...' />
          <FaSearch className='text-xl cursor-pointer ' />
        </div>
      </div>
      <div className='flex items-center justify-center w-[10%] cursor-pointer'>

      <FaCircleUser className='text-2xl  sm:text-4xl text-gray-700' />
      </div>
    </div>
  )
}

export default Head
