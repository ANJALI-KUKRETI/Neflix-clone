import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footWrap">
        <div className="one">
          <div>FAQ</div>
          <div>Investor Relations</div>
          <div>Privacy</div>
          <div>Speed Test</div>
        </div>
        <div className="one">
          <div>Help Centre</div>
          <div>Jobs</div>
          <div>Cookie Preferences</div>
          <div>Legal Notices</div>
        </div>
        <div className="one">
          <div>Account</div>
          <div>Ways to Watch</div>
          <div>Corporate Information</div>
          <div>Only on Netflix</div>
        </div>
        <div className="one">
          <div>Media Centre</div>
          <div>Terms of Use</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
