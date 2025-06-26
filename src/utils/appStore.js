import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import gptReducer from "../utils/gptSlice"
import wishListReducer from "../utils/wishListSlice"

const appStore =configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        wishlist:wishListReducer,
    },
})

export default appStore