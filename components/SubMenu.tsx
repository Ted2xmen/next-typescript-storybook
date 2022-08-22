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
      border: 2px solid white;
      transition: all 0.2s ease-in;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
