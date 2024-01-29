import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowImg from "../../assets/icons/arrow-back.svg";
import "./index.css";
import { IconsImgs } from "../../assets/icons";
import { feachSignUpPage } from "../../api";

function SignupPage() {
  const [isOpenEyes, handleEyes] = useState<boolean>(false);
  const [isOpenEyesError, setOpenEyesError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  return (
    <div className="signup-page">
      <Link to="/" className="signip">
        <img src={ArrowImg} alt="arrow" />
      </Link>
      <div className="signup_header">
        <h3>Sign up</h3>
        <span className="description">Choose a registration method</span>
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
            {!error && (
              <img
                src={
                  !isOpenEyes ? IconsImgs.EyeBlackClose : IconsImgs.EyeBlackOpen
                }
                alt="EyeBlackOpen"
                onClick={() => handleEyes(!isOpenEyes)}
              />
            )}
            {error && (
              <img
                src={
                  !isOpenEyesError
                    ? IconsImgs.EyeRedClose
                    : IconsImgs.EyeRedOpen
                }
                alt="EyeRedClose"
                onClick={() => setOpenEyesError(!isOpenEyesError)}
              />
            )}

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
        </div>
      </div>
      <div className="wrapper_signup">
        <span>Already have an account? </span> <Link to="/signin">Sign In</Link>
      </div>

      {error && <span className="error-valid">{error}</span>}
      <div className="box-buttons">
        <button
          onClick={() => {
            if (email && password) {
              setError("");
              feachSignUpPage({ email, password });
            } else {
              setError("Заполните все поля !!!!");
            }
          }}
        >
          Continue
        </button>
      </div>
      <div className="box-error">
        <img src={IconsImgs.Danger} alt="danger" />
        <h2 className="desription_error">
          A user with the same name is already exist
        </h2>
      </div>
    </div>
  );
}

export default SignupPage;
