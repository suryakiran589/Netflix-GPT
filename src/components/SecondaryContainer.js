import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black w-screen min-h-screen'>
      <div className='-mt-[10%] sticky'>

      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
