import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies = action.payload
        },
        addUpcomingmovies:(state,action) =>{
            state.upcomingMovies = action.payload
        },
        addTopRatedMovies:(state,action) =>{
            state.topRatedMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addUpcomingmovies,addTopRatedMovies} = movieSlice.actions

export default movieSlice.reducer