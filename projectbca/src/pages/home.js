import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Navb from "../navbar/navb";

export default function Home() {
  return (
    <div className="main2">
      <Navb/>
      <div className="Main1">
        <table className="tablehome">
          <tr>
            <td rowspan="2">
              <img src={logo} alt="logo" className="logo1" />
            </td>
            <td className="name1">FSCXpert</td>
          </tr>
          <tr>
            <td className="sub1">FOREX - STOCK - CRYPTO</td>
          </tr>
        </table>
        <div className="centert1">
          <div className="tagline1">Your One-Stop Platform</div>
          <div className="tagline2">for Forex-Stock-Crypto</div>
          <button class="btn btn-dark mt-4 nbtn" className="nbtn2">
            <Link to="/login" class="h4 bt1 mt-2">
              Get Started
            </Link>
          </button>
          <div className="socail-2">
            <a
              href="https://www.facebook.com/FSCXpert-103008289063372"
              target="_blank"
            >
              <FaFacebookF className="social-3" />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/fscxpert-9ab1b017a/"
              target="_blank"
            >
              <ImLinkedin2 className="social-3" />
            </a>
            &nbsp;&nbsp;
            <a href="https://www.instagram.com/fscxpert/" target="_blank">
              <BsInstagram className="social-3" />
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/fsc_xpert" target="_blank">
              <AiOutlineTwitter className="social-3" />
            </a>
            &nbsp;&nbsp;
            <a href="https://in.pinterest.com/fsc_xpert/" target="_blank">
              <FaPinterestP className="social-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
