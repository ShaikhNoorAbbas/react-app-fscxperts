import React, { useEffect } from "react";
import "./sidemenu.css";
import { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsCurrencyExchange,
  BsFillArrowRightSquareFill,
  BsGraphUp,
} from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { SiBlockchaindotcom, SiMicrostrategy } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import maleavatar from "../images/male_avatar.png";
import { CryptoState } from "../Context/cryptocontext";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useUserAuth } from "../Context/userAuthContext";
import { IoNewspaperSharp } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { MdOutlineSecurity, MdQuestionAnswer } from "react-icons/md";

const Sidemenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const [show, setShow] = useState(true);
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();
  const user = useUserAuth();
  console.log(currency);
  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);
  const logOut = () => {
    signOut(auth);
    navigate("/home");
  };
  const [shownote, setShownote] = useState(false);

  return (
    <>
      <div className={`side-menu ${!inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <Link to="/forex">
            <div>
              <img src={logo} alt="logoicon" className="logoicon" />
            </div>
            <div className="logoname">FSCXpert</div>
          </Link>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <BsFillArrowLeftSquareFill className="arr1" />
            ) : (
              <BsFillArrowRightSquareFill className="arr2" />
            )}
          </div>
        </div>
        <div className="divider" />
        <div className="mame">
          <ul
            onClick={() => setInactive(false)}
            onDoubleClick={() => setInactive(!false)}
            className="sili-container"
          >
            <li className="sili">
              <NavLink
                to="/forex"
                className="meit"
                onClick={() => setShow(true)}
              >
                <div className="meic">
                  <BsCurrencyExchange />
                </div>
                <span>Forex</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/stock"
                className="meit"
                onClick={() => setShow(true)}
              >
                <div className="meic">
                  <BsGraphUp />
                </div>
                <span>Stock</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/crypto"
                className="meit "
                onClick={() => setShow(true)}
              >
                <div className="meic">
                  <SiBlockchaindotcom />
                </div>
                <span>Crypto</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/strategy"
                className="meit "
                onClick={() => setShow(true)}
              >
                <div className="meic">
                  <SiMicrostrategy />
                </div>
                <span>Strategies</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/about"
                className="meit "
                onClick={() => setShow(true)}
              >
                <div className="meic">
                  <TiGroup />
                </div>
                <span>About Us</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/policy"
                className="meit"
                onClick={() => setShow(false)}
              >
                <div className="meic">
                  <IoNewspaperSharp />
                </div>
                <span>Policy</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/security"
                className="meit"
                onClick={() => setShow(false)}
              >
                <div className="meic">
                  <MdOutlineSecurity />
                </div>
                <span>Security</span>
              </NavLink>
            </li>
            <li className="sili">
              <NavLink
                to="/faq"
                className="meit"
                onClick={() => setShow(false)}
              >
                <div className="meic">
                  <MdQuestionAnswer />
                </div>
                <span>FAQ</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/support">
            <BiSupport className="sup" />
          </NavLink>
        <div
          className="side-menu-footer"
          onClick={() => setInactive(!false)}
          onDoubleClick={() => setInactive(false)}
        >
          <div className="avatar">
            <img
              src={
                user !== null
                  ? user.photoURL !== null
                    ? user.photoURL
                    : maleavatar
                  : maleavatar
              }
              alt="User Image"
            />
          </div>
          <div className="user-info">
            <h5>{user ? user.displayName : ""} </h5>
            <p>{user ? user.email : ""}</p>
          </div>
          <span className="logouticon" onClick={() => setShownote(true)}>
            <IoMdLogOut />
          </span>
          {shownote && (
            <div>
              <div className="exitb"></div>
              <div className="exit">
                <span className="exitt">Are you sure you want to exit?</span>
                <br />
                <button onClick={logOut} className="ebuty">
                  Yes
                </button>
                <button onClick={() => setShownote(false)} className="ebutn">
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Sidemenu;
