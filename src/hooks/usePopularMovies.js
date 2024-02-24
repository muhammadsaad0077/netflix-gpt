import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addPopularMovies} from "../utils/moviesSlice"
import { API_Options } from '../utils/constant';

// fetch data from tmdb api and update redux store
const usePopularMovies = ()=>{
    const dispatch = useDispatch()
  const getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Options);
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
    

  }

  useEffect(()=>{
    getPopularMovies()
  }, [])
}

export default usePopularMovies;