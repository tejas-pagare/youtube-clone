import React from 'react'

const VideoCard = ({info}) => {
  const formatViews = (count) => {
    if (count >= 1e9) {
      return (count / 1e9).toFixed(1) + 'B'; // Billion
    } else if (count >= 1e6) {
      return (count / 1e6).toFixed(1) + 'M'; // Million
    } else if (count >= 1e3) {
      return (count / 1e3).toFixed(1) + 'K'; // Thousand
    }
    return count.toString(); // Return the count as-is if less than 1,000
  };
  const {snippet,statistics}=info;
  console.log(info)
   const {channelTitle,title,thumbnails }=snippet;
  return (
    <div className=' w-[400px] m-2  flex flex-col gap-1 overflow-hidden'>
      <img className='w-[full] rounded-xl' src={thumbnails.high.url}/>
     
        <div className='flex gap-1 m-2'>
          <div className='w-[50px] felx items-center justify-center'>
          <div className='w-12 h-12 rounded-[100%] bg-gray-100 text-center content-center'>
         A
          </div>

          </div>
      <ul className='w-80%'>
        <li className='font-bold text-sm tracking-tighter'>{title}</li>
        <li className='text-xs text-gray-600'>{channelTitle}</li>
        <li className='text-xs text-gray-600'>{formatViews(statistics.viewCount)} views</li>
      </ul>

        </div>
    </div>
  )
}

export default VideoCard
