import React from "react";

import BookmarkCard from "../components/Cards/BookmarkCard";
import PageLayout from "../components/LayoutRelated/PageLayout";

const css = ({ bookmarks }: any) => {
  return (
    <PageLayout title="CSS 101">
      <div>
        {bookmarks.items.map((d: unknown, i: number) => (
          <BookmarkCard key={i} d={d} />
        ))}
      </div>
    </PageLayout>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const topicID = "26533836";
  const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${topicID}`;

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
    },
  };

  const res = await fetch(raindropUrl, options);
  const bookmarks = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      bookmarks,
    },
  };
}

export default css;
