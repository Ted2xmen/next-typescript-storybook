import React from "react";

import VideoContainer from "../components/Containers/VideoContainer";
import PageLayout from "../components/PageLayout";

const tutorial = () => {
  return (
    <PageLayout title="Suggested Videos">
      <VideoContainer topic="Suggested  Videos" />
    </PageLayout>
  );
};

export default tutorial;
