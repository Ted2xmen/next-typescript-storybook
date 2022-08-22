import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { pageList } from "../../pages/pageList";

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 10px;
  font-size: 1.9rem;
  padding-top: 10px;
  padding-right: 20px;
`;

const ListItem = styled.li`
  margin-left: 36px;
  list-style: none;
  text-decoration: none;
  font-size: 1.2rem;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      {pageList.map((item, i) => {
        return (
          <ListItem className="anton" key={i}>
            <Link href={item.path}>{item.name}</Link>
          </ListItem>
        );
      })}
    </NavWrapper>
  );
};

export default Navigation;
