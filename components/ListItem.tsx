import React, { ReactNode } from "react";
import styled from "styled-components";

const ListWrapper = styled.li`
  background-color: #083b97;
  color: #d7dce6;
  padding: 12px;
  display: inline-flex;
  align-items: center;
  border-radius: 15px;
  &:hover {
    background-color: ${(props) => (props.shadow === true ? "white" : "black")};
  }
`;

const Img = styled.img`
  padding-right: 5px;
  object-fit: contain;
  border-radius: 15px;
`;

interface Props extends JSX.Element {
  children: ReactNode;
  size?: "sm" | "lg";
  variant: "primary" | "secondary";
  rounded?: boolean;
  src?: string;
  hover: boolean;
}

const ListItem = ({ children, ...props }: Props) => {
  return (
    <ListWrapper {...props}>
      <Img {...props} />
      {children}
    </ListWrapper>
  );
};

export default ListItem;
