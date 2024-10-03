import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiDislike } from 'react-icons/bi'

const CommentsContainer = ({subdata}) => {
  console.log(subdata)
  return (
    <>
       <div className='flex gap-4 py-4'>
      <div>
        <div className='w-10 h-10 rounded-[50%] text-white bg-gray-500 text-center content-center text-2xl'>
          H
        </div>
      </div>
      <div>
      <div className='flex gap-2 items-center '>
        <div className='text-sm text-black font-semibold'>
          {subdata.username}
        </div>
        <div className='text-xs text-gray-500'>
        {subdata.time}
        </div>
      </div>
      <div>
        <div>
          <div className='text-black text-xs sm:text-sm font-normal my-3'>
          {subdata.comment}
          </div>
          <div className='flex gap-2 items-center'>
          <div className='flex gap-2 item-center'>
          <AiOutlineLike /> 
          <div className='text-sm'>{subdata.likes}</div>
          </div>
          <div>
          <BiDislike />
          </div>
          </div>
          
        </div>
      </div>
      </div>
    </div>

    </>
  )
}

export default CommentsContainer
