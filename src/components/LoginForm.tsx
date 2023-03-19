import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

const LoginForm = () => {
  interface FormData {
    username: string;
    password: string;
  }

  const emailExpression: RegExp =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  const passwordExpression: RegExp = /^\S{8,}$/m;
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValidEmail(emailExpression.test(formData.username));
    setIsValidPassword(passwordExpression.test(formData.password));
    if (isValidEmail && isValidPassword) {
      setIsSubmitted(true)
      submitData(e);
    }
  };

  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(formData),
    };
    try {
      const response = await fetch("/api/sign-in", options);
      const data = await response.json();
      {
        data.accountStatus === "verified" &&
          console.log(`Welcome, ${data.name}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="login-form center-in-parent" onSubmit={handleSubmit}>
      <IconButton className="close-icon" href="/">
        <CloseIcon />
      </IconButton>
      <div className="login-intro">
        <h4>Login</h4>
        <p>
          New customer? <Link href="/">Register Here</Link>
        </p>
      </div>
      <label className="login-label" htmlFor="username">
        Username
      </label>
      <input
        className="input-box"
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      {!isValidEmail && (
        <p className="error-message">Please enter a valid email address</p>
      )}
      <label className="login-label" htmlFor="password">
        Password
      </label>
      <input
        className="input-box"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {!isValidPassword && (
        <p className="error-message">
          Password must be at least 8 characters long
        </p>
      )}
      <button className="button login" type="submit">
        Login
      </button>
      {isSubmitted && (
        <p className="success-message">
          You have been successfully logged in!
        </p>
      )}
    </form>
  );
};

export default LoginForm;
