import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
    return(
   <div className="bg-black">
    <div className="-mt-[280px] pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"TopRated Movies"} movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
}

// Popular API
// https://api.themoviedb.org/3/movie/popular

// Top Rated
// https://api.themoviedb.org/3/movie/top_rated

// Upcoming
// https://api.themoviedb.org/3/movie/upcoming

export default SecondaryContainer;
