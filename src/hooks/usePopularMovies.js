import { useDispatch } from "react-redux"
import {  addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"


const usePopularMovies = () =>{
    const dispatch = useDispatch()
  async function handleTmdb(){
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
    // console.log("results",json)
  }
  useEffect(()=>{
    handleTmdb()
  },[])
}

export default usePopularMovies