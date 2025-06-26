import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
   const movies=useSelector((store) => store.movies?.nowPlayingMovies)
    if(movies === null) return;
    // console.log(movies)
    const firstMovie = movies[6]
    const id=movies[6].id
    // console.log(firstMovie)
    const {original_title,overview}=firstMovie
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
