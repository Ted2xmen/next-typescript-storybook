import BookmarkCard from "../components/Cards/BookmarkCard";
import BookmarkContainer from "../components/Containers/BookmarkContainer";
import PageLayout from "../components/PageLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const React = ({reactData}: any) => {
  return (
    <PageLayout title="React 101">
       <div style={{ maxWidth: "744px" }}>
      <div>
        <h2>State Management</h2>
          {reactData.items.map((d: unknown, i: number) => (
          <BookmarkCard key={i} d={d} />
        ))}
      </div>
      
        </div>
    </PageLayout>
  );
};

export default React;


export async function getStaticProps() {
  const topicID = "26533738";
  const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${topicID}`;

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
    },
  };

  const res = await fetch(raindropUrl, options);
  const reactData = await res.json();

  return {
    props: {
      reactData,
    },
  };
}