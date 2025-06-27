

const VideoTitle = ({title,overview}) => {  
    

  return (
    <div className='pt-[20%] md:pt-[23%] px-4 md:px-20 aspect-video absolute text-white  bg-gradient-to-r from-black w-screen '>
      <h3 className='ml-1  text-lg md:ml-3 md:text-5xl '>{title}</h3>
      <p className='ml-1 h-[30%] w-[70%] text-xs md:text-lg py-1 md:ml-3 md:py-10 overflow-y-scroll scrollbar-hide'>{overview}</p>
      <div className='flex w-[90%] ml-1 md:w-3/4 md:ml-3'>
        <button className=' text-[10px] py-1 px-5 bg-white md:py-2 md:px-10 mr-4 rounded-md text-black md:text-[20px]'>▶ Play</button>
        <button className='text-[10px] px-5 bg-slate-500 py-2 md:px-10 rounded-md bg-opacity-40 text-white md:text-[20px]'>ℹ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
