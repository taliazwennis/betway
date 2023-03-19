import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import JoinNow from "@/components/JoinNow";

export default function Home() {
  const [loginActive, setLoginActive] = useState<boolean>(false);
  return (
    <>
    {console.log("login: ", loginActive)}
      <div id="header">
        <header>
          <Header onLogin={setLoginActive}/>
          <Navbar />
        </header>
      </div>

      <div id="content">
        <div className="row h-100">
          <div className="col-12 col-lg-6 col-xl-5 position-relative hero-image">
            {loginActive && <LoginForm/>}
          </div>
          <div className="d-none d-lg-block col-lg-6 col-xl-7 position-relative">
            <JoinNow />
          </div>
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
