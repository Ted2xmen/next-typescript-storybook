import React from "react";
import styled from "styled-components";

import SubMenu from "./SubMenu";

const LayoutWrapper = styled.div`
  padding: 30px 20px;
  width: 100%;
  height: 100%;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <SubMenu />
        <PageWrapper>{children}</PageWrapper>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
