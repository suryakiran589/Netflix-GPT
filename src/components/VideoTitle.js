import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = ({title,overview}) => {  
    

  return (
    <div className=' pt-[20%] px-4 md:px-20 aspect-video absolute text-white  bg-gradient-to-r from-black w-screen '>
      <h3 className='ml-1  text-lg md:ml-3 md:text-5xl '>{title}</h3>
      <p className='ml-1 text-[10px] md:text-lg py-2 md:ml-3 md:py-10 w-[70%] md:w-1/3'>{overview}</p>
      <div className='flex w-[90%] ml-1 md:w-1/4 md:ml-3'>
        <button className=' text-[10px] py-1 px-5 bg-white md:py-2 md:px-10 mr-4 rounded-md text-black md:text-[20px]'>▶ Play</button>
        <button className='text-[10px] px-5 bg-slate-500 py-2 md:px-10 rounded-md bg-opacity-40 text-white md:text-[20px]'>ℹ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
