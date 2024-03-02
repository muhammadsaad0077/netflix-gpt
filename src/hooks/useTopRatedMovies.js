import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTopRatedMovies} from "../utils/moviesSlice"
import { API_Options } from '../utils/constant';

// fetch data from tmdb api and update redux store
const useTopRatedMovies = ()=>{
   const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
    const dispatch = useDispatch()
  const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options);
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
    

  }

  useEffect(()=>{
    !topRatedMovies &&
    getTopRatedMovies()
  }, [])
}

export default useTopRatedMovies;