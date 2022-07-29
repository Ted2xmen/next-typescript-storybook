import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components"; 

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "lg";
  variant: "primary" | "secondary";
  rounded?: boolean;
  shadow?: boolean;
}

const TWgreen = "#15803D";


const Btn = styled.button`
  background-color: ${(props: Props) =>
    props.variant === "primary" ? TWgreen : "white"};
  color: ${(props: Props) => (props.variant === "primary" ? "white" : TWgreen)};
  padding: ${(props: Props) =>
    props.size === "sm" ? "8px 14px" : "14px 22px"};
  cursor: pointer;
  border: ${(props: Props) =>
    props.variant === "primary" ? "none" : "1px solid" +TWgreen};
  border-radius: ${(props: Props) =>
    props.rounded === true ? "15px" : "none"};
  box-shadow: ${(props: Props) =>
    props.shadow === true
      ? "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
      : "none"};
  &:hover {
    background-color: ${(props: Props) =>
      props.variant === "primary" ? "white" : TWgreen};
    border: 1px solid ${TWgreen}; // ?
    color: ${(props: Props) =>
      props.variant === "primary" ? TWgreen : "white"};
  }
`;



const Button = ({ children, ...props }: Props) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;
