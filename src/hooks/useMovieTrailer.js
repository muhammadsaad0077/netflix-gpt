import { addTrailerVideo } from "../utils/moviesSlice";
import { API_Options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";


const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store => store.movies.nowAddTrailerVideo);

  const getMovieVideos = useCallback(async () => {
      const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_Options
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]);

  useEffect(() => {
      if (!movieTrailer) {
          getMovieVideos();
      }
  }, [getMovieVideos, movieTrailer]);
};

export default useMovieTrailer