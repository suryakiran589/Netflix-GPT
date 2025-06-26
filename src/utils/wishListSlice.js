import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addWishListItem:(state,action)=>{
            state.push(action.payload)
            console.log(action.payload.id)
        },
        removeWishListItem:(state,action) =>{
           return state.filter((movie) => {
            
               return movie.id !== action.payload.id }
            )
            
        }
    }
})

export const  {addWishListItem,removeWishListItem} = wishListSlice.actions

export default wishListSlice.reducer