import React from "react";

import BookmarkContainer from "../components/containers/BookmarkContainer";
import PageLayout from "../components/LayoutRelated/PageLayout";

const ts = () => {
  return (
    <PageLayout>
      <div>
        <BookmarkContainer title="TypeScript 101" topic="26099349" />
      </div>
    </PageLayout>
  );
};

export default ts;
