import React from 'react'
import Icon from '../Icon'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding-left: 20px;
`

const HeroLinks = () => {
  return (
    <Wrapper>
      <Icon widthProp="30px" position="start" />
    </Wrapper>
  );
}

export default HeroLinks