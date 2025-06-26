import React from 'react'
import { useSelector } from 'react-redux'
import Moviecard from './Moviecard'
import Header from './Header'

const WatchList = () => {
  const movies = useSelector((store) => store.wishlist)
  console.log(movies)
  return (
    <div className='  bg-gradient-to-b from-black to-slate-600 h-screen'> 
    <Header />
    <div className='relative top-16 p-4 pt-10'>

    <h4 className='text-white text-3xl font-bold font text-center'>WatchList</h4>
    <div className='flex flex-wrap'>

{movies.map((movie) => <Moviecard key={movie.name} id={movie.id} poster={movie.poster_path} movie={movie} isWishList={true} />)}
</div>
</div>
    </div>
  )
}

export default WatchList
