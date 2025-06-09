import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { options } from "../utils/constants";

const VideoBackground = ({ id }) => {
    const [trailerid,setTrailerId] =useState("")
  const getBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options
    );
    const json = await data.json();
    console.log(json);
    setTrailerId(json.results[6].key)
  };
  useEffect(() => {
    getBackgroundVideo();
  }, []);
  return (
    <div className="w-screen z-10">
      <iframe
        className="w-screen aspect-video"
        
        src={"https://www.youtube.com/embed/" +trailerid +"?&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&modestbranding=1&loop=1&playlist="+trailerid}
        title="YouTube video player"
        allow=" autoplay; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
