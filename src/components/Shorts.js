import React, { useEffect, useState } from 'react';
import ShimmerCard from './ShimmerCard';
import ShortsCard from './ShortsCard';
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';
import { BiSolidDislike } from 'react-icons/bi';
import { BsChatRightTextFill } from 'react-icons/bs';
import { IoMdShareAlt } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';

const Shorts = () => {
  const [videos, setVideos] = useState([]);
  const [currShorts, setCurrShorts] = useState(null);
   // Use state for count

  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch(YOUTUBE_VIDEO_API);
      const data = await response.json();
      setVideos(data.items);
      console.log(data.items)
      setCurrShorts(data.items[0]); // Set the first video as the initial short
    };

    getVideos();
  }, []);

 

  if (videos.length <= 0) {
    return <div>No Videos Found</div>;
  }

  return (
    <div className='w-full h-fit items-start justify-center flex scroll-m-0  gap-4'>

      <ShortsCard id={currShorts?.id} videos={videos} setCurrShorts={setCurrShorts} />


        <div className='sm:flex sm:flex-col pt-8 sm:gap-12 hidden '>
        <div className='bg-gray-100  text-2xl rounded-[50%] p-4 cursor-pointer flex item-center justify-center'>
        <AiFillLike  />
        </div>
        <div className='bg-gray-100  text-2xl rounded-[50%] p-4 cursor-pointer flex item-center justify-center'>
        <BiSolidDislike  />
        </div>
        <div className='bg-gray-100  text-2xl rounded-[50%] p-4 cursor-pointer flex item-center justify-center'>
        <BsChatRightTextFill classname="text-4xl" />
        </div>
        <div className='bg-gray-100  text-2xl rounded-[50%] p-3 cursor-pointer flex item-center justify-center'>
        <IoMdShareAlt  />
        </div>
        <div className='bg-gray-100 text-xl font-normal rounded-[50%] p-4 cursor-pointer flex item-center justify-center'>
        <SlOptionsVertical  />
        </div>
        </div>
    </div>
  );
};

export default Shorts;
