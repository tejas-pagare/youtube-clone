import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { PiShareFatThin } from 'react-icons/pi';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import VideoContainer from './VideoContainer';

const WatchPage = () => {
  const [params] = useSearchParams();
  const location = useLocation();
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
  const {snippet,statistics}= location.state;
  const {channelTitle,localized
  } = snippet;
  const {viewCount,likeCount}  = statistics;
  console.log(statistics);
  return (
    <div className='max-h-screen overflow-y-auto'>
    <div className='w-full mx-auto my-8 '>

      <div className='p-2 w-[90%] h-[30vh] md:h-[50vh] lg:h-[80vh] mx-auto overflow-hidden rounded-lg' >
        <iframe className='w-full h-full rounded-xl' width="600" height="380" src={`https://www.youtube.com/embed/` + params.get("v") + `/?si=oiWlNm0xY9I6ovMP`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className='w-[90%] mx-auto overflow-hidden'>
        <h1 className='text-lg m-2 md:text-2xl w-full tracking-tighter text-start font-bold'>{localized.title}</h1>
        <div className='px-4'>
          <div className='flex flex-col sm:flex-row gap-4 justify-between items-center'>
            <div className='flex gap-6 items-center'>
            <div className='w-[50px] h-[50px] rounded-full '>
              <img className='w-full h-full object-cover' src={'https://yt3.ggpht.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s88-c-k-c0x00ffffff-no-rj'} />
            </div>
            <div>
              <h1 className='text-xs tracking-tighter'>{channelTitle}</h1>
              <h6 className='text-xs'>{formatViews(viewCount)} subscribers</h6>
            </div>

            <div>
              <button className='bg-black rounded-[50px] p-2 px-4 font-semibold text-lg text-white'>Subscribe</button>
            </div>
            </div>
            <div className='flex items-center gap-5'>
            <div className='flex'>
            <h1 className='flex items-center cursor-pointer bg-gray-100 gap-1 p-2 px-3 rounded-l-full'><AiOutlineLike className='text-2xl' /> <span className='text-sm'>{formatViews(likeCount)}</span></h1>
            <h1 className='bg-gray-100 flex items-center'>|</h1>
            <h1 className='bg-gray-100 p-2 px-3 cursor-pointer flex items-center rounded-r-full'>
            <BiDislike className='text-2xl' />

            </h1>
            </div>
            <div className='flex items-center cursor-pointer bg-gray-100 gap-1 p-2 px-4 rounded-full'>
            <PiShareFatThin /> Share
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoContainer/>
      </div>
  )
}

export default WatchPage
