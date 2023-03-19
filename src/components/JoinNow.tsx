import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

interface Props {
  buttonColor: string;
  onCelebrate: () => void;
}

const JoinNow = ({ buttonColor, onCelebrate }: Props) => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <div className="join-now-side center-in-parent">
      <h3>SPORTS NEW CUSTOMER OFFER</h3>
      <h2>Get up to £10 in Free Bets </h2>
      <button
        onClick={() => {
          onCelebrate();
        }}
        className={`button ${buttonColor} join-now`}
      >
        {" "}
        Join Now{" "}
      </button>
    </div>
  );
};

export default JoinNow;
