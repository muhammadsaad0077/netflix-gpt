import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from "../utils/moviesSlice"
import { API_Options } from '../utils/constant';

// fetch data from tmdb api and update redux store
const useNowPlayingMovies = ()=>{
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const dispatch = useDispatch()
  const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_Options);
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
    

  }

  useEffect(()=>{
    !nowPlayingMovies &&
    getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies;