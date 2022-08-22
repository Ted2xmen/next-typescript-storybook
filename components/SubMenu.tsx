import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { SubMenuList } from "../pages/pageList";

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 20px;
  li {
    margin-left: 36px;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    border: 2px solid black;
    padding: 6px;
    border-radius: 10px;
    &:hover {
      color: white;
      border: 2px solid white;
      transition: all 0.2s ease-in;
    }
  }
`;

const SubMenu: React.FC = () => {
  return (
    <Wrapper>
      {SubMenuList.map((link, i) => {
        return (
          <Link key={i} href={link.path}>
            <li className="anton">{link.name}</li>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default SubMenu;
