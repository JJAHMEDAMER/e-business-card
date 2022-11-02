import React from "react";

// Images
import email from "../assets/Mail-Icon.png";
import linkedIn from "../assets/Vector.png";

const Body = () => (
  <div className="app-body">
    <h1 className="name">Laura Smith</h1>
    <h2 className="title">Frontend Developer</h2>
    <p>laurasmith.website</p>
    <div className="button-row">
      <button className="app-button email">
        <img src={email} />
        Email
      </button>
      <button className="app-button linkedin">
        <img src={linkedIn} />
        LinkedIn
      </button>
    </div>

    <h1 className="about">About</h1>
    <p>
      I am a frontend developer with a particular interest in making things
      simple and automating daily tasks. I try to keep up with security and best
      practices, and am always looking for new things to learn.
    </p>
    <h1 className="about">Interests</h1>
    <p>
      Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
    </p>

  </div>
);

export default Body;
