import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "#E04025" : "white"};
  color: ${(props) => (props.variant === "primary" ? "white" : "#E04025")};
  padding: ${(props) => (props.size === "sm" ? "8px 14px" : "14px 22px")};
  cursor: pointer;
  border: none;
  border-radius: ${(props) => (props.rounded === true ? "15px" : "none")};
  box-shadow: ${(props) =>
    props.shadow === true
      ? "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
      : "none"};
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "white" : "#E04025"};
    color: ${(props) => (props.variant === "primary" ? "#E04025" : "white")};
  }
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "lg";
  variant: "primary" | "secondary";
  rounded?: boolean;
  shadow?: boolean;
}

const Button = ({ children, ...props }: Props) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;
