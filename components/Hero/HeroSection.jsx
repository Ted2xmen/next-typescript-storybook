import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const HeroTitle = styled.h1`
  background-image: linear-gradient(
    to right,
    rgb(64, 89, 73),
    rgb(31, 96, 54),
    rgb(2, 27, 11)
  );
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  position: static;
`;

const HeroSection = ({ title }) => {
  return (
    <HeroContainer>
      <HeroTitle className="anton">{title}</HeroTitle>
    </HeroContainer>
  );
};

export default HeroSection;
