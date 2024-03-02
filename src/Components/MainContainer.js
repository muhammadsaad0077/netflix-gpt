import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;  // if movies are not present then return from here
    const mainMovie = movies[0];
  return (
    <div className="md:pt-0 pt-[40%] bg-black">
      
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer
