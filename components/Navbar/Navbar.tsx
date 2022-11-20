import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


import { Wrapper } from "./NavbarStyle";

const SubMenuList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "JavaScript",
    path: "/javascript",
  },
  {
    name: "React",
    path: "/react",
  },
    {
    name: "Next JS 101",
    path: "/next",
  },
  {
    name: "State Management",
    path: "/state",
  },
  {
    name: "Tutorials & Videos",
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
            <li
              className={router.pathname === link.path ? "active" : ""}>
              {link.name}
            </li>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Navbar;
