import React from "react";
import "./about.css";
import avatar from "../images/male_avatar.png";

export default function About() {
  return (
    <div>
      <div className="about-section1">
        <h1>About Us</h1>
        <p>
          We are Programmers. Trained in React JS, CSS, HTML, ANDROID STUDIO &
          FIREBASE
        </p>
        <p>
          FSCXpert is an one-stop platform for forex-stock-crypto. This is the
          most convenient platform for investors.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row1">
        <div className="column1">
          <div className="card1">
            <img
              src={avatar}
              alt="Jane"
              style={{ width: "100%", padding: "3rem", borderRadius:"12rem"}}
            />
            <div className="container1">
              <h1>Shaikh Noor Abbas</h1>
              <div className="title1">
                <p>Project Partner</p>
                <p>Of</p>
                <p>FSCXpert</p>
              </div>
              <p>shaikhnoor1512@gmail.com</p>
              <p>
                <a
                  href="mailto:shaikhnoor1512@gmail.com"
                  target="_blank"
                >
                  <button className="button1">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="column1">
          <div className="card1">
            <img
              src={avatar}
              alt="Jane"
              style={{ width: "100%", padding: "3rem", borderRadius:"12rem"}}
            />
            <div className="container1">
              <h1>Chirag Jathan</h1>
              <div className="title1">
                <p>Project Partner</p>
                <p>Of</p>
                <p>FSCXpert</p>
              </div>
              <p>chiragjathan16@gmail.com</p>
              <p>
                <a
                  href="mailto:chiragjathan16@gmail.com"
                  target="_blank"
                >
                  <button className="button1">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="column1">
          <div className="card1">
            <img
              src={avatar}
              alt="Jane"
              style={{ width: "100%", padding: "3rem", borderRadius:"12rem"}}
            />
            <div className="container1">
              <h1>Bhavesh Suthar</h1>
              <div className="title1">
                <p>Project Partner</p>
                <p>Of</p>
                <p>FSCXpert</p>
              </div>
              <p>sutharbhavesh03@gmail.com</p>
              <p>
                <a
                  href="mailto:sutharbhavesh03@gmail.com"
                  target="_blank"
                >
                  <button className="button1">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
