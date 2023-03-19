import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Confetti, { ConfettiProps } from "react-dom-confetti";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import JoinNow from "@/components/JoinNow";
import SignupForm from "@/components/SignupForm";
import { AnyARecord } from "dns";

export default function Home() {
  const [loginActive, setLoginActive] = useState<boolean>(false);
  const [registerActive, setRegisterActive] = useState<boolean>(false);
  const [accentColor, setAccentColor] = useState<string>("green");
  const [isConfettiActive, setIsConfettiActive] = useState<boolean>(false);

  const confettiConfig = {
    angle: 180,
    spread: 360,
    startVelocity: 40,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: [
      "#00c811",
      "red",
      "rgb(0, 175, 202)",
      "rgb(162, 0, 255)",
      "rgb(255, 145, 0)",
    ],
  };

  const handleConfettiClick = () => {
    console.log("Activate Confetti");
    setIsConfettiActive(true);
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 2000);
  };

  return (
    <>
      <Confetti active={isConfettiActive} config={confettiConfig} />
      <div id="header">
        <header>
          <Header onLogin={setLoginActive} onRegister={setRegisterActive} />
          <Navbar changeAccent={setAccentColor} />
        </header>
      </div>

      <div id="content">
        <div className="row h-100">
          <div className="col-12 col-lg-6 col-xl-5 position-relative hero-image">
            {loginActive && (
              <LoginForm
                onClose={setLoginActive}
                onOpenReg={setRegisterActive}
              />
            )}
            {registerActive && <SignupForm onClose={setRegisterActive} />}
          </div>
          <div className="d-none d-lg-block col-lg-6 col-xl-7 position-relative">
            <JoinNow
              buttonColor={accentColor}
              onCelebrate={handleConfettiClick}
            />
          </div>
        </div>
      </div>

      <div id="footer">
        <Footer buttonColor={accentColor} onCelebrate={handleConfettiClick} />
      </div>
    </>
  );
}
