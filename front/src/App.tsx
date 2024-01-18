import React from "react";
import WelcomePage from "./pages/wellcomePage";
import SignupPage from "./pages/signupPage";
import SignInPage from "./pages/signinPage";
import SignupConfirmPage from "./pages/signupConfirmPage";

import { AuthProvider } from "./hoc/AuthProvider";

import {
  BrowserRouter,
  Routes,
  Route,
  // AuthRoute,
  // PrivateRoute,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<WelcomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup-confirm" element={<SignupConfirmPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
