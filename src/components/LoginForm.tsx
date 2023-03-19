import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

const LoginForm = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className="login-form center-in-parent">
      <IconButton className="close-icon" href="/">
        <CloseIcon  />
      </IconButton>
      <div className="login-intro">
        <h4>Login</h4>
        <p>
          New customer? <a href="/">Register Here</a>
        </p>
      </div>
      <div>
        <label className="login-label">Username</label> <br />
        <input
          className="input-box"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <label className="login-label">Password</label> <br />
      <input
        className="input-box"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="button login"> Login </button>
    </form>
  );
};

export default LoginForm;
