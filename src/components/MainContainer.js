import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const videoInfo = useSelector((store) => store?.movies?.nowPlayingMovies);

  const { original_title, overview } = videoInfo[0];
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
