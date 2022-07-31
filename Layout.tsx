import React from "react";
import styled from "styled-components";

import { brandColors } from "./styles/brand";
import Navigation from "./components/LayoutRelated/Navigation";
import Footer from "./components/LayoutRelated/Footer";
import Icon from "./components/Icon";


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
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
      <Icon position="center" />
    </LayoutWrapper>
  );
};

export default Layout;
