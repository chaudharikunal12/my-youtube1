import React, { useEffect, useState } from "react";
import { Youtube_Videos_API } from "../utils/Constants";
import VideosCart from "./VideosCart";

const VideoContainer = () => {
const [videos, setVideos]=useState([])

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_Videos_API);
    const json = await data.json();
    setVideos(json.items)
    console.log(json);
  };
  return <div>
    <VideosCart info={videos}/>
  </div>;
};

export default VideoContainer;
