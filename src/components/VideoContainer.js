import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from '../utils/constant'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard';
import { Link, useNavigate } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  const navigate = useNavigate();



  useEffect(()=>{
    const fetchVideos = async () => {
      const url = new URL('https://v3.api-youtube.com/youtube/search');
      url.searchParams.append('key', GOOGLE_API_KEY);
      url.searchParams.append('q', 'Rick Astley'); // Replace with your search query

      try {
        const response = await fetch(url);
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        console.log(data.items); // Assuming the response structure has an 'items' property
      } catch (err) {
       console.log(err.message);
      } finally {
        console.log(false);
      }
    };

    fetchVideos();
    getVideos()
  },[])

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API)
    const data = await response.json()
    setVideos(data.items)
  }
  return (
    <>
    {videos.length === 0 ? <Shimmer/> : (
      <div className='flex flex-wrap mx-auto items-center justify-center h-[100vh] overflow-y-auto w-[100vw]' >
        
        {
          videos.map((data)=> <Link state={data} to={"/watch?v="+data.id}>< VideoCard info={data} key={data.id} /></Link>)
        }
        
      </div>
    )}
  </>
  )
}

export default VideoContainer
