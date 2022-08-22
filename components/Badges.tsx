import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Lastfm } from "@styled-icons/fa-brands/Lastfm";

import { badgeColors, brandColors } from "../styles/brand";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: "sm" | "lg";
  variant?: "success" | "danger" | "warning" | "info" | "now";
  rounded?: boolean;
}

const Badge = styled.span`
  background-image: ${(props: BadgeProps) =>
    props.variant === "now"
      ? "linear-gradient(to right, rgb(58, 80, 65), rgb(6, 51, 23))"
      : "none"};

  background-color: ${(props: BadgeProps) =>
    (props.variant === "success" && badgeColors.success) ||
    (props.variant === "danger" && badgeColors.danger) ||
    (props.variant === "warning" && badgeColors.warning) ||
    (props.variant === "now" && brandColors.main) ||
    (props.variant === "info" && badgeColors.info)};
  border-radius: ${(props: BadgeProps) =>
    props.rounded === true ? "20px" : "none"};
  color: ${(props: BadgeProps) => (!props.variant ? "black" : "white")};
  border: ${(props: BadgeProps) =>
    props.variant === "now" ? "1px solid" + `${badgeColors.success}` : "none"};

  font-size: 0.8rem;
  font-weight: bold;
  font-family: monospace;
  padding: ${(props: BadgeProps) =>
    props.size === "sm" ? "5px 10px" : "12px 18px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const LastfmIcon = styled(Lastfm)`
  display: flex;
  align-items: center;
  width: 40px;
  padding-right: 10px;
`;

const Badges = ({ children, ...props }: BadgeProps) => {
  return (
    <Badge {...props}>
      {props.variant === "now" && <LastfmIcon />} {children}
    </Badge>
  );
};

export default Badges;
