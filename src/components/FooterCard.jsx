import React from "react";
import "./style.css";
import call from "../assets/callIcon.png";
import facebook from "../assets/facebook.png";
import web from "../assets/webIcon.png";

function FooterCard() {
  return (
    <div className="footerCont">
      <div className="call">
        <img src={call} className="icon" />
        <a href="tel:18002001234">
          Toll free <b>18002001234</b>
        </a>
      </div>
      <div className="facebook">
        <img src={facebook} className="icon" />
        <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
      </div>
      <div className="web">
        <img src={web} className="icon" />
        <a href="www.crigroups.com">www.crigroups.com</a>
      </div>
    </div>
  );
}

export default FooterCard;
