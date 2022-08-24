import Image from "next/image";
import React from "react";
import styled from "styled-components";

import external from "../../public/external.svg";

type Props = {
  video?: any;
};

const Wrapper = styled.li`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  justify-items: center;
  flex-direction: row;
  list-style: none;
  margin-top: 25px;
  border: 1px solid black;

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    border-radius: 10px;
    margin-right: 15px;
  }

  .info {
    padding: 10px;
    flex: 1;
    border-radius: 10px;
    background-color: #eec438;

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  h4 {
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }
  strong {
    margin-right: 8px;
    font-size: 0.7rem;
    border: 1px solid;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: #1f0e01ad;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }
`;

const BookmarkCard = ({ video }: Props) => {
  return (
    <Wrapper>
      <div>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="info shadow">
        <div className="link">
          <span>{video.snippet.videoOwnerChannelTitle} </span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={
              "https://www.youtube.com/watch?v=" +
              video.snippet.resourceId.videoId
            }
          >
            <Image className="external" src={external} alt="external" />
          </a>
        </div>
        <h4>{video.snippet.title}</h4>
      </div>
    </Wrapper>
  );
};

export default BookmarkCard;
