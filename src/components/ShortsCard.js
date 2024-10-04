import React, { useState } from 'react'
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const ShortsCard = ({id,videos,setCurrShorts}) => {
  const [count, setCount] = useState(0);
  const handleNext = () => {
    if (count < videos.length - 1) { // Make sure you don't go out of bounds
      setCount(count + 1);
      setCurrShorts(videos[count + 1]);
    }
  };

  const handlePrevious = () => {
    if (count > 0) { // Make sure you don't go below 0
      setCount(count - 1);
      setCurrShorts(videos[count - 1]);
    }
  };
  return (
    <div className='w-[100vw] h-[100vh] rounded-lg lg:w-[300px] lg:h-[550px] relative'>
<iframe
  className="h-full w-full lg:rounded-lg"
  src={`https://www.youtube.com/embed/${id}?autoplay=1&start=0&end=60&loop=1&playlist=${id}`}   
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

<div className='bg-black opacity-[50%] flex flex-row justify-between items-center absolute top-0 left-0 right-0 bottom-0 rounded-lg z-10'>

    <MdArrowBackIosNew
          onClick={handlePrevious}
          className='text-3xl cursor-pointer text-gray-300'
        />
         <MdArrowForwardIos
          onClick={handleNext}
          className='text-3xl cursor-pointer  text-gray-300'
        />
        
</div>
    </div>
  )
}

export default ShortsCard
