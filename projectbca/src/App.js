import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LoginRegister from "./forms/LoginRegister";
import About from "./pages/about";
import Faq from "./pages/faq";
import Security from "./pages/security";
import Support from "./pages/support";
import Policy from "./pages/policy";
import Navb from "./navbar/navb";
import Menuroutes from "./components/menuroutes";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "./Context/userAuthContext";
import CryptoContext from "./Context/cryptocontext";
import Home from "./pages/home";
import ForgotPassword from "./forms/forgetpassword";

function App() {
  const user = useUserAuth();
  const [show, setShow] = useState(true);

  return (
    <div>
      <UserAuthContextProvider>
        {user && user.emailVerified ? (
          <CryptoContext>
            <Menuroutes />
          </CryptoContext>
        ) : (
          <BrowserRouter>
            <Navb />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<LoginRegister />} />
              <Route path="/forgetpassword" element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
        )}
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
