import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const title = "All"
  const sliderTitles = [
    "Trending",
    "Music",
    "Movies",
    "Sports",
    "Comedy Shows",
    "Kapil Sharma Show",
    "News",
    "Live",
    "Gaming",
    "Podcasts",
    "Fashion & Beauty",
    "Technology",
    "Travel",
    "Health & Fitness",
    "Education",
    "Documentaries",
    "Short Films",
    "DIY & Crafts",
    "Food & Cooking",
    "Motivational Talks"
  ];
  
  return (
    <div className='flex overflow-auto whitespace-nowrap w-[100vw] no-scrollbar p-2'>
    {sliderTitles.map((title, index) => (
      <Button key={index} title={title} />
    ))}
  </div>
  
  )
}

export default ButtonList
