import React from "react";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-4">
      <img
        alt="movie name"
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
      />
    </div>
  );
};

export default MovieCard;
