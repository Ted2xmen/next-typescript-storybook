import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const PageLayout: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageLayout;
