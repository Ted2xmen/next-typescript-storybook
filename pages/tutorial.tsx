import React from "react";

import VideoContainer from "../components/containers/VideoContainer";
import PageLayout from "../components/LayoutRelated/PageLayout";

const tutorial = () => {
  return (
    <PageLayout title="Videos 101">
      <VideoContainer topic="Suggested  Videos" />
    </PageLayout>
  );
};

export default tutorial;
