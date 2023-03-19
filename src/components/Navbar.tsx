import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "sports", color: "green" },
  { text: "live & real", color: "blue" },
  { text: "casino", color: "purple" },
  { text: "esports", color: "orange" },
  { text: "vegas", color: "red" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <>
      <nav className="nav nav-menu-list">
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
