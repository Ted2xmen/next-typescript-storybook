/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import external from "../../public/external.svg";

type Props = {
  video?: any;
};

const Wrapper = styled.li`
  display: flex;
  background-color: #3730a3;
  border-radius: 10px;
  padding: 10px;
  justify-items: center;
  flex-direction: row;
  list-style: none;
  margin-top: 25px;
  border: 1px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 10px;

  }
  .info {
    padding: 10px;
    flex: 1;
    border-radius: 5px;
    border:0.1px solid black;
    font-size: small;

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
 &:hover {
  border: white solid 1px;
transition: 0.3s ease-in-out;
 }

`;
const BookmarkCard = ({ video }: Props) => {
  return (
    <Wrapper>
      <div>
        <img
          src={video?.snippet?.thumbnails.medium.url}
          alt={video?.snippet?.title}
        />
      </div>
      <div className="info shadow">
        <div className="link">
          <span>{video?.snippet?.videoOwnerChannelTitle} </span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={
              "https://www.youtube.com/watch?v=" +
              video?.snippet?.resourceId.videoId
            }
          >
            <Image className="external" src={external} alt="external" />
          </a>
        </div>
        <h4>{video?.snippet?.title}</h4>
      </div>
    </Wrapper>
  );
};

export default BookmarkCard;
