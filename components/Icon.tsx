import { Linkedin, Github, Medium } from "@styled-icons/fa-brands";
import React from "react";
import styled from "styled-components";

import { spacing } from "../styles/brand";

type Props = {
  widthProp?: number | undefined;
  position: "center" | "start" | "end";
};

const Icon: React.FC<Props> = ({ widthProp, position }) => {
  const width = widthProp ? widthProp + "px" : "20px";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconWrapper: any = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${position};
    gap: ${spacing.rowGap};
  `;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MediumIcon: any = styled(Medium)`
    width: ${width};
  `;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LinkedinIcon: any = styled(Linkedin)`
    width: ${width};
  `;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const GithubIcon: any = styled(Github)`
    width: ${width};
  `;

  return (
    <>
      <IconWrapper>
        <LinkedinIcon />
        <GithubIcon />
        <MediumIcon />
      </IconWrapper>
    </>
  );
};

export default Icon;
