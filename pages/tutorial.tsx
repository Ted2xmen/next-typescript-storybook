import React from "react";

import VideoContainer from "../components/Containers/VideoContainer";
import PageLayout from "../components/PageLayout";

const tutorial = () => {
  return (
    <PageLayout title="Videos 101">
      <VideoContainer topic="Suggested  Videos" />
    </PageLayout>
  );
};

export default tutorial;
