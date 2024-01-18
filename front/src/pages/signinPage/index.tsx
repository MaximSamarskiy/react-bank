import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";

function SignInPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="signin-page">
      <div className="arrow_button">
        <button onClick={goBack} className="go_back"></button>
      </div>
      <div className="signin_header">
        <h3>Sign in</h3>
        <span className="description">Select login method</span>
        <div className="email">Email</div>
        <div className="input_email">
          <input className="username"></input>
        </div>
        <div className="email">Password</div>
        <input className="input_password"></input>
      </div>

      <div className="box-buttons">
        <Link to="/" className="signip">
          Continue
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;
