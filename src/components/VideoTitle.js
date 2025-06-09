import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = ({title,overview}) => {  
    

  return (
    <div className='pt-[20%] px-20 aspect-video absolute text-white  bg-gradient-to-r from-black w-screen '>
      <h3 className='ml-3 text-5xl '>{title}</h3>
      <p className='ml-3 py-10 w-1/3'>{overview}</p>
      <div className='flex  w-1/4'>
        <button className='p-4 bg-white py-2 px-10 mx-4 rounded-md text-black text-[20px]'>▶ Play</button>
        <button className='p-4 bg-slate-500 py-2 px-10 rounded-md bg-opacity-40 text-white text-[20px]'>ℹ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
