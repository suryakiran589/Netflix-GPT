import { useDispatch } from "react-redux"
import {   addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"


const useTopRatedMovies = () =>{
    const dispatch = useDispatch()
  
  useEffect(()=>{
    handleTmdb()
    async function handleTmdb(){
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
    // console.log("results",json)
  }
  },[dispatch])
}

export default useTopRatedMovies