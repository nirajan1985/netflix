import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard moviePoster={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
