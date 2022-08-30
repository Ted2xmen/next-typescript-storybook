import Image from "next/image";
import React from "react";
import styled from "styled-components";

import hero from "./hero.svg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 375px) {
    width: 100%;
    background-color: red;
    font-size: 0.7rem;
  } */
`;

type Props = {
  title: string;
};
const HeroSection: React.FC<Props> = ({ title }) => {
  return (
    <HeroContainer>
      <Image width={400} height={200} src={hero} alt="hero" />
      <h1 className="playfair">{title}</h1>
    </HeroContainer>
  );
};

export default HeroSection;
