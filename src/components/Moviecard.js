import React, { useState } from 'react'
import { IMG_URL } from '../utils/constants'
import { addWishListItem, removeWishListItem } from '../utils/wishListSlice'
import { useDispatch, useSelector } from 'react-redux'
import Shimmer from './Shimmer'

const Moviecard = ({id,poster,movie,isWishList}) => {
  const dispatch = useDispatch()
  const wishlist = useSelector((store) => store.wishlist);
  const isInWishlist = wishlist.some((item) => item.id === movie.id);
  const handleAddItemToWishList =()=>{
    dispatch(addWishListItem(movie))

  }
  const handleRemoveItem = () =>{

    dispatch(removeWishListItem(movie))
  }
   
  return movie ? (
    
  <div className="w-44 md:w-60 relative">
    <img className="rounded-[12px] p-2" src={IMG_URL + poster} alt={movie.title} />

    {!isWishList ? (
      <button
        className={`absolute text-xs top-2 left-2 p-2 rounded-md ${
          isInWishlist ? 'bg-green-600 text-white' : 'bg-white text-black'
        }`}
        onClick={handleAddItemToWishList}
        disabled={isInWishlist}
      >
        {isInWishlist ? '✔️ Added' : 'Add to WatchList'}
      </button>
    ) : (
      <button
        className="absolute text-sm text-white top-2 left-2 bg-red-500 p-2 rounded-md"
        onClick={handleRemoveItem}
      >
        Remove
      </button>
    )}
    
  </div>
) : (
  <Shimmer />
);

}

export default Moviecard
