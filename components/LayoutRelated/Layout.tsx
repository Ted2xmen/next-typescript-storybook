import React from "react";
import styled from "styled-components";
import SubMenu from "../SubMenu";

import Footer from "./Footer";
import Navigation from "./Navigation";

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
    <LayoutWrapper>
      <Navigation />
      <SubMenu />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
