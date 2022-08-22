import React from "react";

// import Lastfm from './Lastfm'

const LastfmCard = ({ albums }) => {
  return <div>{albums[0]?.artist.name}</div>;
};

export default LastfmCard;
