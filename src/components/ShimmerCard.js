import React from 'react';

const ShimmerCard = () => {
  return (
    <div className='w-[380px] h-[300px] m-2 flex flex-col gap-1 overflow-hidden border rounded-lg shadow-md bg-white'>
      <div className='h-[70%] animate-pulse bg-gray-200 rounded-xl' />
      <div className='flex gap-1 m-2'>
        <div className='w-[50px] flex items-center justify-center'>
          <div className='w-12 h-12 rounded-full bg-gray-200 animate-pulse' />
        </div>
        <div className='w-[80%]'>
          <div className='font-bold text-sm bg-gray-200 animate-pulse h-4 mb-1' />
          <div className='text-xs text-gray-600 bg-gray-200 animate-pulse h-3 mb-1' />
          <div className='text-xs text-gray-600 bg-gray-200 animate-pulse h-3' />
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
