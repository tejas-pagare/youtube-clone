import React from 'react'

const Button = ({title}) => {
  return (
    <button className='bg-gray-100 hover:bg-gray-200 p-2 px-3 m-2 w-auto rounded-md text-sm font-semibold'>
      {title}
    </button>
  )
}

export default Button
