import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "../Cards/VideoCard";
import Loader from "../UI/Loader";

const VideoContainer = ({ topic }: any) => {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { NEXT_PUBLIC_YOUTUBE_API } = process.env;
    const latest = "PL74ZG4NnebTrLoz4fKX_k8DPKlC9z8he8";
    const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${latest}&key=${NEXT_PUBLIC_YOUTUBE_API}`;

    axios.get(youtubeURL).then((res) => {
      setVideo(res.data.items.reverse());
      setLoading(true);
    });
  }, []);

  return (
    <div style={{ maxWidth: "744px" }}>
      <div>
        {loading ? (
          <ul>
            <h2>{topic}</h2>
            {video.map((video: any, i: number) => (
              <VideoCard video={video} key={i} />
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
