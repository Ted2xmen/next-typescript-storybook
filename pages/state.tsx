import React from "react";

import BookmarkCard from "../components/Cards/BookmarkCard";
import PageLayout from "../components/PageLayout";

const state = ({ bookmarks }: any) => {
  return (
    <PageLayout title="State Management">
     <div style={{ width: "744px" }}>
      <div>
        <h2>State Management</h2>
          {bookmarks.items.map((d: unknown, i: number) => (
          <BookmarkCard key={i} d={d} />
        ))}
      </div>
      
        </div>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const topicID = "26533682";
  const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${topicID}`;

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
    },
  };

  const res = await fetch(raindropUrl, options);
  const bookmarks = await res.json();

  return {
    props: {
      bookmarks,
    },
  };
}

export default state;
