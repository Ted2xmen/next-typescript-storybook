import React from "react";
import styled from "styled-components";

const Paragraph = styled.h3`
  padding: 10px 20px;
  font-size: 1.5rem;
  font-family: "Cormorant Garamond", serif;
  background-image: radial-gradient(
    at 50% 0%,
    rgb(255, 251, 235),
    rgb(187, 247, 208),
    rgb(212, 212, 212)
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const HeroParag = () => {
  return (
    <Paragraph>
      Frontend Developer. Mostly Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Tempore minus quae cum placeat eum et amet sunt quidem
      aliquid voluptate. Mostly React, Vue and TailwindCSS. Voluptatibus saepe
      accusamus architecto, tempora sapiente doloremque aliquam adipisci dolor
      pariatur quod nihil magni, eos ducimus.
    </Paragraph>
  );
};

export default HeroParag;
