import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";

 const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
