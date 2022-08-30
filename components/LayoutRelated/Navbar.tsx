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
  padding: 12px;
  margin: 24px;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 6px;
  }

  li {
    margin-left: 14px;
    font-weight: medium;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid black;
    padding: 4px;
    border-radius: 8px;
    &:hover {
      border: 1px solid white;
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
    name: "TypeScript 101 (getStaticProps w revalidate)",
    path: "/ts",
  },
  {
    name: "Redux 101 (getstaticprops)",
    path: "/redux",
  },
  {
    name: "CSS 101 (getServerSideProps)",
    path: "/css",
  },
  {
    name: "Videos 101",
    path: "/tutorial",
  },
];

const Navbar: React.FC = () => {
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

export default Navbar;
