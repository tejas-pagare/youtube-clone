// Shimmer.js
import React from 'react';
import ShimmerCard from './ShimmerCard';

const Shimmer = ({count=10}) => {
  return (
    <div className='flex flex-wrap justify-center'>
    {Array.from({ length: count }).map((_, index) => (
      <ShimmerCard key={index} />
    ))}
  </div>
  );
};

export default Shimmer;
