import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ moviePoster }) => {
  return (
    <div className="w-36 mr-4">
      <img src={IMG_URL + moviePoster} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
