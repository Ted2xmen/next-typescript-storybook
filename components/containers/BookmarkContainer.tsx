import axios from "axios";
import { useState, useEffect } from "react";

type Props = {
  topic: string;
  topicID: string;
};

export default function BookmarkContainer({ topic, topicID }: Props) {
  const [data, setData] = useState([]);
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
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div style={{ maxWidth: "744px" }}>
      <div>
        <ul>
          <h2>{topic}</h2>
          {data.map((d: any) => (
            <li key={d._id} className="block h-24">
              <a href={d.link}>
                <div>
                  {/* <img
                    src={d.media[0].link}
                    className=" h-20 w-20 rounded-xl object-contain p-1"
                    alt={d.title}
                  /> */}
                  <h5>{d.title}</h5>{" "}
                </div>
                {d.tags.map((s: any, i: number) => (
                  <strong key={i}>{s}</strong>
                ))}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
