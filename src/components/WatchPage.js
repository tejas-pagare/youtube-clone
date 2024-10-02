import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  return (
    <div className='p-2'>
      <iframe width="600" height="380" src={`https://www.youtube.com/embed/`+params.get("v")+`/?si=oiWlNm0xY9I6ovMP`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
