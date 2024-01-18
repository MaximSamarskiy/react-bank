import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";

function SignupPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="signup-page">
      <div className="arrow_button">
        <button onClick={goBack} className="go_back"></button>
      </div>
      <div className="signup_header">
        <h3>Sign up</h3>
        <span className="description">Choose a registration method</span>
        <div className="email">Email</div>
        <div className="input_email">
          <input className="username"></input>
        </div>
        <div className="email">Password</div>
        <input className="input_password"></input>
      </div>

      <div className="box-buttons">
        <Link to="/" className="signup">
          Continue
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
