import React from "react";
import "../screens/LoginScreen.css";

const EnterEmail = ({ onSubmit }) => {
  return (
    <div>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="loginInput">
        <form onSubmit={onSubmit}>
          <input className="email" type="email" placeholder="Email Address" />
          <button className="getStart">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default EnterEmail;
