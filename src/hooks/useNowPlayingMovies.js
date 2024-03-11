import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_Options } from '../utils/constant';

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_Options);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        };

        if (!nowPlayingMovies) {
            getNowPlayingMovies();
        }
    }, [dispatch, nowPlayingMovies]); // Include dispatch and nowPlayingMovies in the dependency array
};

export default useNowPlayingMovies;
