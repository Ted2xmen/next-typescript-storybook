import BookmarkCard from "../components/Cards/BookmarkCard";
import PageLayout from "../components/PageLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Js = ({jsdata}: any) => {
  return (
    <PageLayout title="JavaScript 101">
     <div style={{ width: "744px" }}>
      <div>
        <h2>JavaScript 101</h2>
          {jsdata.items.map((d: unknown, i: number) => (
          <BookmarkCard key={i} d={d} />
        ))}
      </div>
      
        </div>
    </PageLayout>   
  );
};

export default Js;


export async function getStaticProps() {
  const topicID = "25919955";
  const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${topicID}`;

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
    },
  };

  const res = await fetch(raindropUrl, options);
  const jsdata = await res.json();

  return {
    props: {
      jsdata,
    },
  };
}
