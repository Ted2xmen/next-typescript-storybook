import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

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

  .active {
    color: #eec028;
    border: 2px solid black;
    background-color: black;
  }
`;

const SubMenuList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "JavaScript 101",
    path: "/js",
  },
  {
    name: "React 101",
    path: "/react",
  },
  {
    name: "TypeScript 101",
    path: "/ts",
  },
  {
    name: "Videos 101",
    path: "/tutorial",
  },
];

const SubMenu: React.FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      {SubMenuList.map((link, i) => {
        return (
          <Link key={i} href={link.path}>
            <li className={router.pathname === link.path ? "active" : ""}>
              {link.name}
            </li>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default SubMenu;
