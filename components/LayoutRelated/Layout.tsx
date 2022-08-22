import React from "react";
import styled from "styled-components";

import { brandColors } from "../../styles/brand";

import Footer from "./Footer";
import Navigation from "./Navigation";

const LayoutWrapper = styled.div`
  color: white;
  background-color: ${brandColors.main};
  padding: 30px 20px;
  width: 100%;
  height: 100%;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
