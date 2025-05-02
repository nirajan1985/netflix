import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterTrailerVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideo = filterTrailerVideo[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    fetchMovieVideos();
  }, []);
};
export default useTrailerVideo;
