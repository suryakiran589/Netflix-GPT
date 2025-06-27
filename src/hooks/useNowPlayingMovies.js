import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"


const useNowPlayingMovies = () =>{
  const dispatch = useDispatch()
  const movies = useSelector((store) => store.movies.nowPlayingMovies
)

  
  useEffect(()=>{
    async function handleTmdb(){
    if(movies){
  return ;
}
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }
    handleTmdb()
  },[dispatch,movies])
}

export default useNowPlayingMovies