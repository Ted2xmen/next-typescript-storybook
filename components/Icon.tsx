import React from "react";
import styled from "styled-components";
import { Linkedin, Github, Medium } from "@styled-icons/fa-brands";

const Icon = ({ widthProp, position }) => {

  const width = widthProp ? widthProp : "20px";

  const MediumIcon: any = styled(Medium)`
    width: ${width};
  `;

  const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${position};
    gap: 25px;
  `;

  const LinkedinIcon: any = styled(Linkedin)`
    width: ${width};
  `;
  const GithubIcon: any = styled(Github)`
    width: ${width};
  `;

  return (
    <IconWrapper>
      <LinkedinIcon />
      <GithubIcon />
      <MediumIcon />
    </IconWrapper>
  );
};

export default Icon;
