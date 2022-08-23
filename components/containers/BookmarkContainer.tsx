import axios from "axios";
import { useState, useEffect } from "react";

import BookmarkCard from "../Cards/BookmarkCard";
import SkeletonBookmark from "../Cards/SkeletonBookmark";

type Props = {
  topic: string;
  topicID: string;
};

export default function BookmarkContainer({ topic, topicID }: Props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${topicID}`;
  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
      },
    };

    axios
      .get(raindropUrl, options)
      .then(function (response) {
        // handle success
        setData(response.data.items);
        setLoading(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [raindropUrl]);

  return (
    <div style={{ maxWidth: "744px" }}>
      <div>
        {loading ? (
          <ul>
            <h2>{topic}</h2>
            <h3> {loading ? "true" : "false"} </h3>

            {data.map((d: any) => (
              <BookmarkCard key={d.id} d={d} />
            ))}
          </ul>
        ) : (
          <SkeletonBookmark />
        )}
      </div>
    </div>
  );
}
