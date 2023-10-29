import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 pl-12 absolute w-screen aspect-video">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 w-96 text-white">{overview}</p>
      <div>
        <button className=" bg-white py-2 px-8 rounded-md mr-8 text-black hover:opacity-70">
          ▶️ Play
        </button>
        <button className="  bg-white py-2 px-4 rounded-md mr-8 text-black hover:opacity-70">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
