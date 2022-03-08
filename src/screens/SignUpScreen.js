import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(alert(error.message));
      });
  };
  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" className="signInBtn" onClick={signIn}>
          Sign In
        </button>
        <div>
          <span style={{ color: "gray" }}>New to Netflix? </span>
          <span className="signup_link" onClick={register}>
            SignUp Now
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpScreen;
