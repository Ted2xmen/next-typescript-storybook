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
`;

const BookmarkCard = ({ d }: Props) => {
  return (
    <Wrapper className="">
      <div>
        <img src={d.media[0].link} alt={d.title} />
      </div>
      <div className="info shadow">
        <div className="link">
          <span> {d.type} </span>
          <a target="_blank" rel="noreferrer noopener" href={d.link}>
            {d.domain}
            <Image src={external} alt="external" />
          </a>
        </div>
        <h3>{d.title}</h3>
        {d.tags.map((s: any, i: number) => (
          <strong key={i}>{s}</strong>
        ))}
      </div>
    </Wrapper>
  );
};

export default BookmarkCard;
