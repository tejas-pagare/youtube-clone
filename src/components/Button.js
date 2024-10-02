import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({title}) => {
  const navigate = useNavigate();
  return (
    <button onClick={navigate("/")} className='bg-gray-100 hover:bg-gray-200 p-2 px-3 m-2 w-auto rounded-md text-sm font-semibold'>
      {title}
    </button>
  )
}

export default Button
