import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const LayoutWrapper = styled.div`
  padding: 30px 20px;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
