import React from 'react'
import SideMenu from './SideMenu'
import { IoMdHome } from 'react-icons/io'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdSubscriptions } from 'react-icons/md'
import { FaMusic, FaShoppingBag, FaFilm, FaTv, FaGamepad, FaNewspaper, FaBasketballBall, FaGraduationCap, FaTshirt, FaPodcast } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImYoutube2 } from 'react-icons/im'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { toogleMenu } from '../utils/appSlice'

const Sidebar = () => {
  const dispatch = useDispatch();
  const menuItems = [
    
    { icon: FaMusic, text: "Music" },
    { icon: FaShoppingBag, text: "Shopping" },
    { icon: FaFilm, text: "Movies" },
    { icon: FaTv, text: "Live" },
    { icon: FaGamepad, text: "Gaming" },
    { icon: FaNewspaper, text: "News" },
    { icon: FaBasketballBall, text: "Sports" },
    { icon: FaGraduationCap, text: "Courses" },
    { icon: FaTshirt, text: "Fashion & Beauty" },
    { icon: FaPodcast, text: "Podcasts" },
  ];
  return (
    // <div className='w-[200px] bg-gray-50 min-h-screen overflow-y-auto no-scrollbar absolute -top-[5%] md:-top-[45%] lg:-top-[10%] pt-8 sm:pt-2'>
    //   <div className='w-[100%] flex items-center justify-between  bg-gray-50 gap-6 mx-auto '>
    //     <div className='flex gap-4 items-center '>
    //       <IoClose onClick={()=>{
    //         dispatch(toogleMenu())
    //       }} className='text-2xl cursor-pointer text-black font-bold rounded-full hover:bg-gray-200 p-1' />
    //       <ImYoutube2 className='text-red-600 text-[50px] sm:text-[70px] cursor-pointer p-0 m-0' />

    //     </div>
    //     </div>
    //   <SideMenu icon={IoMdHome} text="Home"/>
    //   <SideMenu icon={SiYoutubeshorts} text="Shorts"/>
    //   <div className='min-h-screen mt-8'>
    //    <h1 className='font-bold text-xl px-4 ' >Explore</h1>
    //   <SideMenu icon={MdSubscriptions } text="Subscription"/>
    //   {menuItems.map((item, index) => (
    //     <SideMenu key={index} icon={item.icon} text={item.text} />
    //   ))}

    //   </div>
     
      
    // </div>
    <div className='w-[200px] bg-gray-50 min-h-[100vh] overflow-y-auto no-scrollbar absolute top-[-0.2%] md:top-[-0.2%] lg:top-[-1%] pt-8 sm:pt-2 transition-all duration-300'>
  <div className='w-[100%] flex items-center justify-start pl-4 bg-gray-50 gap-6 mx-auto'>
    <div className='flex gap-4 items-center justify-center'>
      <IoClose 
        onClick={() => { dispatch(toogleMenu()) }} 
        className='text-4xl mx-auto cursor-pointer text-black font-bold rounded-full hover:bg-gray-200 p-1' 
      />
      {/* <ImYoutube2 className='text-red-600 text-[50px] sm:text-[70px] cursor-pointer p-0 m-0' /> */}
    </div>
  </div>
  
  <SideMenu icon={IoMdHome} text="Home"/>
  <SideMenu icon={SiYoutubeshorts} text="Shorts"/>

  <div className='min-h-screen mt-8'>
    <h1 className='font-bold text-xl px-4'>Explore</h1>
    <SideMenu icon={MdSubscriptions} text="Subscription"/>
    {menuItems.map((item, index) => (
      <SideMenu key={index} icon={item.icon} text={item.text} />
    ))}
  </div>
</div>

  )
}

export default Sidebar
