import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  background-image: linear-gradient(
    to right,
    rgb(187, 247, 208),
    rgb(74, 222, 128),
    rgb(34, 197, 94)
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  position: static;
`;

const HeroSub = styled.h2`
  font-size: 2.5rem;
  font-family: "Indie Flower", cursive;
  transform: rotate(-20deg);
  right: 90px;
  top: -10px;
  position: relative;
`;


const HeroSection = ({ title }) => {
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      {/* <HeroSub>frontend developer </HeroSub> */}
    </HeroContainer>
  );
};

export default HeroSection;
