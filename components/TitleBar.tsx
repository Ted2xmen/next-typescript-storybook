import React from 'react'
import styled from 'styled-components'

const TitleBar = ({title}) => {

    const Wrapper = styled.h2`
        font-size: 2rem;
        color: white;
        padding-left: 10px;

    `
    
  return <Wrapper>{title}</Wrapper>;
}

export default TitleBar