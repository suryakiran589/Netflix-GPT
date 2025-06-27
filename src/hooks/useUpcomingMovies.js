import { useDispatch } from "react-redux"
import {   addUpcomingmovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"


const useUpcomingMovies = () =>{
    const dispatch = useDispatch()
  
  useEffect(()=>{
    handleTmdb()
    async function handleTmdb(){
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const json = await data.json()
    dispatch(addUpcomingmovies(json.results))
  }
  },[dispatch])
}

export default useUpcomingMovies