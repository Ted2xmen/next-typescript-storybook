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