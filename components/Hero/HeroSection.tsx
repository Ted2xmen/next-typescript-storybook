import Image from "next/image";
import React from "react";
import styled from "styled-components";

import hero from "../../public/hero-read.jpg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .italic {
    font-style: italic;
  }

  .radius {
    border-radius: 20px;
    width: 50px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;

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
