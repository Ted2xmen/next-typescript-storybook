import Head from "next/head";
import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-items: center;
  margin: auto;
`;

const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Wrapper>
  );
};

export default PageLayout;
