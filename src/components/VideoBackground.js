import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { options } from "../utils/constants";
import openai from "../hooks/useOpenai"

const VideoBackground = ({ id }) => {
    const [trailerid,setTrailerId] =useState("")
  const getBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options
    );
    const json = await data.json();
    console.log("trailer",json);
    setTrailerId(json.results[1].key)
  };
  useEffect(() => {
    getBackgroundVideo();
    // main();
  }, []);
  async function main() {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324:free",
    messages: [
      {
        "role": "user",
        "content": "best indian movies of the year 2024 give only names of movies for movie recommendation system.give output like [pushpa,RRR,kalki,sanju,PK] nothing extra and remove array braces"
      }
    ],
    
  });

  console.log(completion.choices[0].message.content);
}

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
