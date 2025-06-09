import React from "react";
import { IMG_URL } from "../utils/constants";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" pl-2  my-10">
      <h2 className="font-bold text-3xl p-2 text-white">{title}</h2>
      {movies && (
        <div className="overflow-x-scroll flex">
          <div className="flex  ">
            {movies.map((movie) => (
              <Moviecard id={movie.id} poster={movie.poster_path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
