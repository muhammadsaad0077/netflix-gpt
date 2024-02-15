import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;  // if movies are not present then return from here
    const mainMovie = movies[0];
    console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} movieId={mainMovie.id}/>
      <VideoBackground />
    </div>
  )
}

export default MainContainer
