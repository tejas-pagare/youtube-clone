import React from 'react'


const SideMenu = ({ icon: Icon, text }) => {
  return (
    <div className='w-[85%] my-1 mx-auto hover:bg-gray-100 flex items-center p-2 gap-2 rounded-md cursor-pointer font-semibold'>
      <Icon />
      <div className='text-sm'>
        {text}
      </div>

    </div>
  )
}

export default SideMenu
