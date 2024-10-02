import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
const Body = () => {
  const app = useSelector((store)=>store.app);
 
  console.log(app.isMenuOpen);
  return (
    <div className='flex relative'>
     {app.isMenuOpen&&<Sidebar />}
     <Outlet/>
    </div>
  )
}

export default Body
