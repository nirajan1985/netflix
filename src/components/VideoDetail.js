import React from "react";

const VideoDetail = ({ title, overview }) => {
  return (
    <div className="pt-48 mx-14 w-1/4 absolute text-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>{overview}</p>

      <div className="mt-2">
        <button className="bg-gray-500 hover:bg-gray-300 px-10 py-1 mr-2 ">
          Play
        </button>
        <button className="bg-gray-300 hover:bg-slate-400 px-10 py-1">
          See More
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;
