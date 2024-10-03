import React, { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiDislike } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import CommentsContainer from './CommentsContainer'

const Comments = ({data}) => {
  const [seeReply,setSeeReply] = useState(false);
  return (
    <div className='flex gap-4 py-4'>
      <div>
        <div className='w-10 h-10 rounded-[50%] text-white bg-gray-500 text-center content-center text-2xl'>
          {data.username[1]}
        </div>
      </div>
      <div>
      <div className='flex gap-2 items-center '>
        <div className='text-sm text-black font-semibold'>
          {data.username}
        </div>
        <div className='text-xs text-gray-500'>
        {data.time}
        </div>
      </div>
      <div>
        <div>
          <div className='text-black text-xs sm:text-sm font-normal my-3'>
         {data.comment}
          </div>
          <div className='flex gap-2 items-center'>
          <div className='flex gap-2 item-center'>
          <AiOutlineLike /> 
          <div className='text-sm'>{data.likes}</div>
          </div>
          <div>
          <BiDislike />
          </div>
          </div>
          <div>
            <div>
              <button onClick={()=>setSeeReply(p=>!p)} className='bg-transparent border-none hover:bg-blue-100 p-2 rounded-[50px] flex gap-2 items-center'><IoIosArrowDown className='text-blue-600 text-xs'/><span className='text-blue-600 text-sm'>2 Reply</span></button>
            </div>
          {
          data.replies.map((subdata)=>seeReply&&<CommentsContainer subdata = {subdata}/>)  
          } 
         
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Comments
