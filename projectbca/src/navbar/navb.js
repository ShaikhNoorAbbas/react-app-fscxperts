import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { IoNewspaperSharp } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { MdOutlineSecurity, MdQuestionAnswer } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
export default function Navb() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && (
        <div className="main-menu">
          <ul className="slc navclose" onClick={() => setVisible(false)}>
            <li className="sl">
              <i className="mi active">
                <AiOutlineClose className="menuicon" />
              </i>
            </li>
            <li className="sl">
              <NavLink to="/home" className="mi">
                <AiFillHome className="menuicon" />
                &nbsp;&nbsp;Home
              </NavLink>
            </li>
            <li className="sl">
              <NavLink to="/about" className="mi ">
                <TiGroup className="menuicon" />
                &nbsp;&nbsp;About
              </NavLink>
            </li>
            <li className="sl">
              <NavLink to="/policy" className="mi ">
                <IoNewspaperSharp className="menuicon" />
                &nbsp;&nbsp;Policy
              </NavLink>
            </li>
            <li className="sl">
              <NavLink to="/security" className="mi">
                <MdOutlineSecurity className="menuicon" />
                &nbsp;&nbsp;Security
              </NavLink>
            </li>
            <li className="sl">
              <NavLink to="/faq" className="mi">
                <MdQuestionAnswer className="menuicon" />
                &nbsp;&nbsp;FAQ
              </NavLink>
            </li>
            <li className="sl">
              <NavLink to="/support" className="mi">
                <BiSupport className="menuicon" />
                &nbsp;&nbsp;Support
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <GiHamburgerMenu className="navicon" onClick={() => setVisible(true)} />
    </div>
  );
}

// <ul className="cj">
//   <li className="pd">
//     <Link className="nl active">
//       <AiOutlineClose
//         onClick={() => setVisible(false)}
//         className="menuicon"
//       />
//     </Link>
//   </li>
//   <li className="pd">
//     <Link to="/home" className="nl">
//       <AiFillHome className="menuicon" />
//       &nbsp;&nbsp;Home
//     </Link>
//   </li>
//   <li className="pd">
//     <Link to="/about" className="nl">
//       <TiGroup className="menuicon" />
//       &nbsp;&nbsp;About
//     </Link>
//   </li>
//   <li className="pd">
//     <Link to="/policy" className="nl">
//       <IoNewspaperSharp className="menuicon" />
//       &nbsp;&nbsp;Policy
//     </Link>
//   </li>
//   <li className="pd">
//     <Link to="/security" className="nl">
//       <MdOutlineSecurity className="menuicon" />
//       &nbsp;&nbsp;Security
//     </Link>
//   </li>
//   <li className="pd">
//     <Link to="/faq" className="nl">
//       <MdQuestionAnswer className="menuicon" />
//       &nbsp;&nbsp;FAQ
//     </Link>
//   </li>
//   <li className="pd">
//     <Link to="/support" className="nl">
//       <BiSupport className="menuicon" />
//       &nbsp;&nbsp;Support
//     </Link>
//   </li>
// </ul>
