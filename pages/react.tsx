import BookmarkContainer from "../components/containers/BookmarkContainer";
import PageLayout from "../components/LayoutRelated/PageLayout";

const React = () => {
  return (
    <PageLayout>
      <div>
        <BookmarkContainer title="React 101" topic="26533738" />
      </div>
    </PageLayout>
  );
};

export default React;
