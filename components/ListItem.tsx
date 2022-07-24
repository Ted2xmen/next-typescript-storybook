import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.li`
    background-color: green;
    color: white;
    padding: 10px;
    display: inline-flex;
`

const ListItem = (): any => {
  return <ListWrapper>List item</ListWrapper>;
}

export default ListItem