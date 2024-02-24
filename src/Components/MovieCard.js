import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <img alt='moviePoster' src={IMG_CDN + posterPath}></img>
    </div>
  )
}

export default MovieCard
