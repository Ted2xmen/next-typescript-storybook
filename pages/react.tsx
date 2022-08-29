import BookmarkContainer from "../components/containers/BookmarkContainer";
import PageLayout from "../components/LayoutRelated/PageLayout";
import { useState, useEffect } from "react";

const React = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()));
  }, [dateState]);
  return (
    <PageLayout title="React 101">
      <p> {dateState.getSeconds()} </p>
      <BookmarkContainer topic="React 101" topicID="26533738" />
    </PageLayout>
  );
};

export default React;
