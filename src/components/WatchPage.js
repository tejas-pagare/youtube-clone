import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { PiShareFatThin } from 'react-icons/pi';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import VideoContainer from './VideoContainer';
import { GOOGLE_API_KEY } from '../utils/constant';
import CommentsSection from './CommentsSection';

const WatchPage = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const [seeDes, setDes] = useState(false);
  const [seeComments,setSeeComments] = useState(false);
  const [commentData,setCommentData] = useState([]);
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
  const { snippet, statistics } = location.state;
  const { channelTitle, localized } = snippet;
  const { viewCount, likeCount } = statistics;
  const id = location.state.id;

 const logourl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${GOOGLE_API_KEY}`;

 const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${GOOGLE_API_KEY}`
 

  useEffect(()=>{
    const fetchComments = async()=>{
      const response = await fetch(commentsUrl);
      const data = await response.json();
      
      setCommentData(data.items)
    }
    fetchComments()
   

  },[])
  return (
    <div className='max-h-screen overflow-y-auto'>
      <div className='w-full mx-auto my-8 '>

        <div className='p-2 w-[90%] h-[30vh] md:h-[50vh] lg:h-[80vh] mx-auto overflow-hidden rounded-lg' >
          <iframe className='w-full h-full rounded-xl' width="600" height="380" src={`https://www.youtube.com/embed/` + params.get("v") + `/?si=oiWlNm0xY9I6ovMP`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-[90%] mx-auto overflow-hidden'>
          <h1 className='text-lg m-2 md:text-2xl w-full tracking-tighter text-start font-bold'>{localized.title}</h1>
          <div className='px-2 py-2'>
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
            <div className='bg-gray-100 rounded-lg mt-2 '>
              <button onClick={() => setDes((prev) => !prev)} className='w-full bg-transparent text-xs text-black p-2 rounded-lg'>
                <h1 className='text-start text-black text-md font-semibold '>{formatViews(viewCount)+"\tviews"}</h1>
                <h3 className='text-start text-black text-md font-semibold'>{localized.title}</h3>
                {!seeDes && <h4 className='text-black font-bold cursor-pointer text-end '>more...</h4>}
              </button>
              {seeDes && <div className='bg-gray-100 rounded-lg p-4'>
                {snippet.description.split('\n').map((line, index) => (
                  <p key={index} className='text-sm'>
                    {line}
                  </p>
                ))}

                {seeDes && <h4 onClick={() => setDes((prev) => !prev)} className='text-black font-bold cursor-pointer text-end text-xs '>Show less...</h4>}
              </div>}
            </div>
            <div className=' overflow-hidden'>
            <h1 className='text-xl text-black font-bold my-2 '>152 Comments</h1>
              <div className=' w-[200px] text-start rounded-[50px] py-2'>
                <button onClick={()=>setSeeComments(p=>!p)} className='w-full text-start bg-transparent border-none text-black text-sm cursor-pointer'>See comments..</button>
              </div>
              <div className='flex gap-8 w-full'>
        <div className='w-[5%]'>
        <div className=' h-10 w-10 text-white font-semibold text-2xl bg-purple-800 text-center content-center rounded-[100%]'>
          T
        </div>
          </div>
        
        <div className='w-[80%]'>
          <input placeholder='Add Some Comment' className='w-full sm:w-[60%] border-b-[1px] border-gray-700 p-2 outline-none placeholder-gray-600 text-sm'></input>
        </div>
      </div>
              {
              seeComments&& <CommentsSection commentData={commentData} />
              }
             
            </div>
          </div>
        </div>
      </div>
      <VideoContainer />
    </div>
  )
}

export default WatchPage
