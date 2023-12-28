import React from "react";

import "./index.css";

function WellcomePage() {
  return (
    <div className="wellcome-page">
      <div className="header">
        <h3>Hellow!</h3>
        <span className="description">Welcome to Bank App</span>
      </div>
      <div className="box-buttons">
        <button>Sing Up</button>
        <button>Sing In</button>
      </div>
    </div>
  );
}

export default WellcomePage;
