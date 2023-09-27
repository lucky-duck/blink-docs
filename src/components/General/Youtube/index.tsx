import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Youtube({ videoId }: { videoId: string }) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "480",
    width: "854",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}
