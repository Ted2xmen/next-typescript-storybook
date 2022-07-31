import React from 'react'
import Icon from '../Icon'
import styled from 'styled-components'
import Badges from '../Badges'
import { spacing } from "../../styles/brand";


const Wrapper = styled.div`
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: ${spacing.rowGap};
`

const HeroLinks = () => {
  return (
    <Wrapper>
      <Icon widthProp="30px" position="start" />
      <Badges size="sm" variant="now">
        Machine Gun Kelly play this when i'm gone
      </Badges>
    </Wrapper>
  );
}

export default HeroLinks