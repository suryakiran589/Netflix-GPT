import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
  async function handleTmdb(){
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
    console.log("results",json)
  }
  useEffect(()=>{
    handleTmdb()
  },[])
}

export default useNowPlayingMovies