import React from "react";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <div>
          <span style={{ color: "gray" }}>New to Netflix? </span>{" "}
          <span className="signup_link"> SignUp Now</span>
        </div>
      </form>
    </div>
  );
};

export default SignUpScreen;
