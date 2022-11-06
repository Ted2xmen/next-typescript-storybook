import Image from "next/image";
import React from "react";
import styled from "styled-components";

import external from "../../public/external.svg";

type Props = {
  d?: any;
  video?: any;
};

const Wrapper = styled.li`
  display: flex;
  background-color: #3730a3;
  border-radius: 5px;
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
    border-radius: 5px;

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

const BookmarkCard = ({ d }: Props) => {
  return (
    <Wrapper>
        <img src={d?.media[0].link} alt="todo" />
      <div className="info">
        <div className="link">
          <span>
            {" "}
            {d.type}
            {d.important ? " ⭐" : ""}
          </span>
          <a target="_blank" rel="noreferrer noopener" href={d.link}>
            {d && d.domain}{" "}
            <Image className="external" src={external} alt="external" />
          </a>
        </div>
        <h4>{d.title}</h4>
        {d && d.tags.map((s: any, i: number) => <strong key={i}>{s}</strong>)}
      </div>
    </Wrapper>
  );
};

export default BookmarkCard;
