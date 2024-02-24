import { addTrailerVideo } from "../utils/moviesSlice";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    //fetch trailer video and updating the store with movie trailer data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))

    //setTrailerVideo(trailer.key)
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;