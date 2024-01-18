import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

function WellcomePage() {
  return (
    <div className="wellcome-page">
      <div className="header">
        <h3>Hellow!</h3>
        <span className="description">Welcome to Bank App</span>
      </div>
      <div className="box-buttons">
        <Link to="/signup" className="signup">
          Sign Up
        </Link>

        <Link to="/signin" className="signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default WellcomePage;
