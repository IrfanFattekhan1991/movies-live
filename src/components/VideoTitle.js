import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 pl-16">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 w-96">{overview}</p>
      <div>
        <button className="border border-black py-2 px-8 rounded-md mr-8">
          ▶️ Play
        </button>
        <button className="border border-black py-2 px-4 rounded-md mr-8">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
