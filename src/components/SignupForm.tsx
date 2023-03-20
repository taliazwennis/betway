import Link from "next/link";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  onClose: () => void;
  onOpenLogin: () => void;
}

const SignupForm = ({ onClose, onOpenLogin }: Props) => {
  interface FormData {
    name: string;
    username: string;
    password: string;
  }

  const emailExpression: RegExp =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  const passwordExpression: RegExp = /^\S{8,}$/;
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    name: "",
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
    const isEmailValid = emailExpression.test(formData.username);
    const isPasswordValid = passwordExpression.test(formData.password);

    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      submitData(e);
    } else {
      setIsSubmitted(false);
    }
  };

  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch("/api/sign-in", options);
      const data = await response.json();

      console.log(`Welcome, ${data.name}`);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsSubmitted(false);
    }
  };

  return (
    <form className="login-form center-in-parent" onSubmit={handleSubmit}>
      <IconButton className="close-icon" onClick={() => onClose()}>
        <CloseIcon />
      </IconButton>
      <div className="login-intro">
        <h4>Register</h4>
        <p>
          Already a customer?&nbsp;
          <Link
            href={"#"}
            onClick={() => {
              onOpenLogin(), onClose();
            }}
          >
            Login Here
          </Link>
        </p>
      </div>
      <label className="login-label" htmlFor="name">
        Full Name
      </label>
      <input
        className="input-box"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
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
        Register
      </button>
      <div className="forgot-details">
        <Link href="/">Forgot Username/Password</Link>
      </div>
      {isSubmitted && (
        <p className="success-message">
          Welcome {formData.name}! Thank you for registering at Betway
        </p>
      )}
    </form>
  );
};

export default SignupForm;
