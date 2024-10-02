import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API)
    const data = await response.json()
    setVideos(data.items)
  }
  return (
    <>
    {videos.length === 0 ? (
      <div>Loading...</div> // Optional loading message while fetching videos
    ) : (
      <div className='flex flex-wrap mx-auto items-center justify-start h-[100vh] overflow-y-auto w-[100vw]' >
        
        {
          videos.map((data)=> <Link to={"/watch?v="+data.id}><VideoCard info={data} key={data.id} /></Link>)
        }
        
      </div>
    )}
  </>
  )
}

export default VideoContainer
