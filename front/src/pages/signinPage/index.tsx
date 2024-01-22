import { Link, useNavigate } from "react-router-dom";
import ArrowImg from "../../assets/icons/arrow-back.svg";
import "./index.css";
import { feachSignUp } from "../../api";
import React, { useState } from "react";
import { IconsImgs } from "../../assets/icons";

interface IHelpear {
  text: string;
  setText: any;
}

function SignInPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [isOpenEyes, handleEyes] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  return (
    <div className="signin-page">
      <Link to="/" className="signip">
        <img src={ArrowImg} alt="arrow" />
      </Link>
      <div className="signin_header">
        <h3>Sign in</h3>
        <span className="description">Select login method</span>
        <div className="email">Email</div>
        <div className="input_email">
          <input
            className="username"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="box-password">
          <span> Password</span>
          <div className="box-input">
            <img
              src={
                !isOpenEyes ? IconsImgs.EyeBlackClose : IconsImgs.EyeBlackOpen
              }
              alt="EyeBlackOpen"
              onClick={() => handleEyes(!isOpenEyes)}
            />
            <input
              type={!isOpenEyes ? "password" : ""}
              className={
                error ? "input_password error-input " : "input_password"
              }
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          {error && <span className="error-valid">{error}</span>}
        </div>
      </div>
      <div className="wrapper_signup">
        <span>Forgot your password? </span> <Link to="/"> Restore</Link>
      </div>

      <div className="box-buttons">
        <button
          onClick={() => {
            if (email && password) {
              setError("");
              feachSignUp({ email, password });
            } else {
              setError("Sorry, the password is too simple");
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
