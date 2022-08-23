import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkeletonBookmark = () => {
  return (
    <Wrapper>
      <ContentLoader height="500" speed={2} width="1000" viewBox="60 0 300 230">
        <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
        <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
        <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
        <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
      </ContentLoader>
    </Wrapper>
  );
};

export default SkeletonBookmark;
