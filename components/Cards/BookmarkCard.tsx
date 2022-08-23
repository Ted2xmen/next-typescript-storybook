import Image from "next/image";
import React from "react";
import styled from "styled-components";

import external from "../../public/external.svg";

type Props = {
  d?: any;
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
    width: 120px;
    height: 120px;
    object-fit: cover;
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

const BookmarkCard = ({ d }: Props) => {
  return (
    <Wrapper className="">
      <div>
        <img src={d.media[0].link} alt={d.title} />
      </div>
      <div className="info shadow">
        <div className="link">
          <span>
            {" "}
            {d.type} {d.important ? "🔴" : ""}
          </span>
          <a target="_blank" rel="noreferrer noopener" href={d.link}>
            {d.domain}{" "}
            <Image className="external" src={external} alt="external" />
          </a>
        </div>
        <h4>{d.title}</h4>
        {d.tags.map((s: any, i: number) => (
          <strong className="" key={i}>
            {s}
          </strong>
        ))}
      </div>
    </Wrapper>
  );
};

export default BookmarkCard;
