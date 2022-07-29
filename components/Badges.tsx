import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

import { badgeColors } from "../styles/brand";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: "sm" | "lg";
  variant?: "success" | "danger" | "warning" | "info";
  rounded?: boolean;
}

const Badge = styled.span`
  background-color: ${(props: BadgeProps) =>
    (props.variant === "success" && badgeColors.success) ||
    (props.variant === "danger" && badgeColors.danger) ||
    (props.variant === "warning" && badgeColors.warning) ||
    (props.variant === "info" && badgeColors.info)};
  border-radius: ${(props: BadgeProps) =>
    props.rounded === true ? "20px" : "none"};
  color: ${(props: BadgeProps) => (!props.variant ? "black" : "white")};
  border: ${(props: BadgeProps) => (!props.variant ? "1px solid black" : "none")};

  font-size: 0.8rem;
  font-weight: bold;
  font-family: monospace;
  padding: ${(props: BadgeProps) =>
    props.size === "sm" ? "5px 10px" : "12px 18px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Badges = ({ children, ...props }: BadgeProps) => {
  return (
    <Badge {...props}>
      {" "}
      {props.variant === "warning" && "⚠️"} {children}{" "}
    </Badge>
  );
};

export default Badges;
