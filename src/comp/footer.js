import React from "react";

// Images
import twitter from "../assets/Twitter Icon.png";
import instagram from "../assets/Instagram Icon.png";
import facebook from "../assets/Facebook Icon.png";
import github from "../assets/GitHub Icon.png";


const Footer = () => (
  <div className="footer">
    <img src={twitter} />
    <img src={instagram} />
    <img src={facebook} />
    <img src={github} />
  </div>
);

export default Footer;
