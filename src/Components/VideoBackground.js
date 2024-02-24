import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  
  const trailerVideo = useSelector((store)=>store?.movies?.nowAddTrailerVideo)
  useMovieTrailer(movieId); 

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

// 933131

export default VideoBackground;
