import React, { useEffect, useState } from "react";
import axios from "axios";
import LastfmCard from "./LastfmCard";

const Lastfm = () => {
  const [album, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=ted2xmen&api_key=b5522ce05818e5ed68fbba79b236ca50&period=7day&limit=5&format=json"
      )
      .then((res) => {
        setData(res.data.topalbums.album);
      });
  }, []);

  return (
    <div>
      <LastfmCard albums={album} />
    </div>
  );
};

export default Lastfm;
