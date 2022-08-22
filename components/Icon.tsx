import { Linkedin, Github, Medium } from "@styled-icons/fa-brands";
import React from "react";
import styled from "styled-components";

import { spacing } from "../styles/brand";

type Props = {
  widthProp?: number | undefined;
  position: "center" | "start" | "end";
};

const Icon = ({ widthProp, position }: Props) => {
  const width = widthProp ? widthProp + "px" : "20px";

  const IconWrapper: unknown = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${position};
    gap: ${spacing.rowGap};
  `;

  const MediumIcon: unknown = styled(Medium)`
    width: ${width};
  `;

  const LinkedinIcon: unknown = styled(Linkedin)`
    width: ${width};
  `;
  const GithubIcon: unknown = styled(Github)`
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
