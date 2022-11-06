import axios from "axios";
import React from "react";

import VideoCard from "../components/Cards/VideoCard";
import PageLayout from "../components/PageLayout";

const tutorial = ({ytdata}: any) => {
  return (
    <PageLayout title="Tutorials & Videos">
       <div style={{ maxWidth: "744px" }}>
      <div>
        <h2>Tutorials & Videos</h2>
          {ytdata.items.reverse().map((d: unknown, i: number) => (
          <VideoCard key={i} video={d} />
        ))}
      </div>
      
        </div>
    </PageLayout>
  );
};

export default tutorial;

export async function getStaticProps() {


  const { NEXT_PUBLIC_YOUTUBE_API } = process.env;
  const latest = "PL74ZG4NnebTrLoz4fKX_k8DPKlC9z8he8";
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${latest}&key=${NEXT_PUBLIC_YOUTUBE_API}`;

    const res = await fetch(youtubeURL);
  const ytdata = await res.json();




  return {
    props: {
      ytdata,
    },
  };
}
