import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulargMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopulargMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          -VideoBackground
          -VideoTitle
        SecondaryContainer
          -MoviesList*n
            -MoviesCard*n  
      */}
    </div>
  );
};

export default Browse;
