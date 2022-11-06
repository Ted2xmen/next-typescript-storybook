import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components"; 

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  shadow?: boolean;
}


const BaseButton = styled.button`
  padding: 0.7rem;
  cursor: pointer;
  border: none;
  box-shadow: ${(props: Props) =>
    props.shadow === true
      ? "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
      : "none"};
`

const Btn = styled(BaseButton)`
  background-color: 
    ${(props: Props) => props.variant === "primary" ? "black" : "yellow"};
  color: 
    ${(props: Props) => (props.variant === "primary" ? "white" : "black")};

  &:hover {
    border: inset solid black;
    background-color: ${(props: Props) =>
      props.variant === "primary" ? "white" : "green"};
    color: ${(props: Props) =>
      props.variant === "primary" ? "black" : "white"};
  }
`;



const Button = ({ children, ...props }: Props) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;
