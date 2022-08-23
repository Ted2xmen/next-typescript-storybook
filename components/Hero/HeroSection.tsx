import Image from "next/image";
import React from "react";
import styled from "styled-components";

import hero from "../../public/hero-read.jpg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .radius {
    border-radius: 20px;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;

// const HeroTitle = styled.h1`
//   background-image: linear-gradient(
//     to right,
//     rgb(64, 89, 73),
//     rgb(31, 96, 54),
//     rgb(2, 27, 11)
//   );
//   background-size: 100%;
//   background-repeat: repeat;
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -moz-background-clip: text;
//   -moz-text-fill-color: transparent;
//   position: static;
// `;

type Props = {
  title: string;
};
const HeroSection: React.FC<Props> = ({ title }) => {
  return (
    <HeroContainer>
      <Image className="radius" src={hero} alt="hero" />
      <h1 className="playfair">{title}</h1>
    </HeroContainer>
  );
};

export default HeroSection;
