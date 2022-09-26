import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Sidemenu from "../navbar/sidemenu";
import About from "../pages/about";
import Faq from "../pages/faq";
import Security from "../pages/security";
import Support from "../pages/support";
import Policy from "../pages/policy";
import Forex from "./forex";
import Crypto from "./crypto";
import { BiSupport } from "react-icons/bi";
import Graph from "./graph";
import Stock from "./stock";
import Strategy from "./strategy";
import "../navbar/sidemenu.css";

export default function Menuroutes() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="pagesbg">
      <BrowserRouter>
        <Sidemenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container11 ${inactive ? "notactive" : ""}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/forex" />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/crypto/:id" element={<Graph />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/support" element={<Support />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
