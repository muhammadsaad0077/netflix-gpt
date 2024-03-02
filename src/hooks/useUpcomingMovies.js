import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingrMovies} from "../utils/moviesSlice"
import { API_Options } from '../utils/constant';

// fetch data from tmdb api and update redux store
const useUpcomingMovies = ()=>{
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)
    const dispatch = useDispatch()
  const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Options);
    const json = await data.json()
    dispatch(addUpcomingrMovies(json.results))
    

  }

  useEffect(()=>{
    !upcomingMovies &&
    getUpcomingMovies()
  }, [])
}

export default useUpcomingMovies;