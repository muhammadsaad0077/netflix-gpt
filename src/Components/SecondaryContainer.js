import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
    return(
   <div className="bg-black">
    <div className="mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"TopRated Movies"} movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;
