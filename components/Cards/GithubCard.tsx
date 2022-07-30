import React from 'react'
import styled from 'styled-components'

const GithubCardContainer = styled.div`
    background-color: blue;
    width: 40px;
    height: 50px;
`



const GithubCard = ({items}: any) => {
  return (
    <GithubCardContainer>
      <h1>{items.name}</h1>
    </GithubCardContainer>
  );
}

export default GithubCard