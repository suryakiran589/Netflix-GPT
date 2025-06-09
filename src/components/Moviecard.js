import React from 'react'
import { IMG_URL } from '../utils/constants'

const Moviecard = ({id,poster}) => {
   
  return (
    <div className='w-60 '>
      <img className='rounded-[12px] p-2' src={IMG_URL + poster}></img>
    </div>
  )
}

export default Moviecard
