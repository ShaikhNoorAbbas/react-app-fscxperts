import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./faq.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Faq() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  return (
    <div className="faqpage">
      <div className="faqpage1">
        <img src={logo} alt="logo" className="logo5" />
        <Link to="/home" className="webname">
          FSCXpert
        </Link>
        <div className="faqhead">FREQUENTLY&nbsp;&nbsp;ASKED&nbsp;&nbsp;QUESTIONS</div>
        <div className="quest">
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen1(!open1)}
              aria-controls="example-collapse-text"
            >
              How to start a journey with FSCXpert ?
            </button>
            <Collapse in={open1}>
              <div id="example-collapse-text">
                Click on the Get Started button in home screen. You will be
                redirected to login page.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
            >
              How many methods are there for Signup / Login ?
            </button>
            <Collapse in={open2}>
              <div id="example-collapse-text">
                There are two methods for Signup / Login.
                <br />
                1. Signup with ( Name, Email, Password ) / Login with ( Email,
                Password ).
                <br />
                2. Signup / Login with Google.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
            >
              Is there any type of charge ?
            </button>
            <Collapse in={open3}>
              <div id="example-collapse-text">
                No. FSCXpert is a free platform to make it accessible for all
                users.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
            >
              Which countries do you accept ?
            </button>
            <Collapse in={open4}>
              <div id="example-collapse-text">
                We accept users from all countries as long as FSCXpert's Terms
                of Service comply with their local laws.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen5(!open5)}
              aria-controls="example-collapse-text"
            >
              How many accounts can I register ?
            </button>
            <Collapse in={open5}>
              <div id="example-collapse-text">
                We allow strictly two accounts per one individual. Registering
                more than two accounts may result in a permanent ban.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen6(!open6)}
              aria-controls="example-collapse-text"
            >
              I did not receive my confirmation or password reset email.
            </button>
            <Collapse in={open6}>
              <div id="example-collapse-text">
                If you are trying to confirm your email or reset password but
                the email never arrives, check your junk folder
                <br />
                and mark the message as important (move to your inbox) to ensure
                that you will receive our communication in the future.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen7(!open7)}
              aria-controls="example-collapse-text"
            >
              I forgot my password.
            </button>
            <Collapse in={open7}>
              <div id="example-collapse-text">
                You can use password reminder function (click "Forgot password"
                when logging in). You need to be logged out to request a new
                password.
                <br />
                A link will be send on your email to reset your password.
                Clicking on the link will redirect you to password reset page.
                <br />
                Where you can create you new password.
              </div>
            </Collapse>
          </div>
          <div className="drop">
            <button
              className="butt9"
              onClick={() => setOpen8(!open8)}
              aria-controls="example-collapse-text"
            >
              The link in my email says "incorrect or expired".
            </button>
            <Collapse in={open8}>
              <div id="example-collapse-text">
                This can happen in several occasions:
                <br />
                1. When you have already clicked that verification or password
                reset link before.
                <br />
                2. When you request a new link but then you click an older link
                in your email (which arrived earlier and is no longer active).
                <br />
                In both situations just click the most recent link in your
                email, or request a new one (you need to wait several minutes
                between requests).
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}
