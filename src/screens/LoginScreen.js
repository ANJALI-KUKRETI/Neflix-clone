import React, { useState } from "react";
import Accordion from "../components/Accordion";
import EnterEmail from "../components/EnterEmail";
import Footer from "../components/Footer";
import LoginRows from "../components/LoginRows";
import SignUpScreen from "./SignUpScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="login_background">
        <div className="loginHeader">
          <img
            className="loginLogo"
            src="https://beat-netflix-clone.vercel.app/static/media/logo.5787551b.svg"
            alt="bg"
          />
          <button className="login" onClick={() => setSignIn(true)}>
            Sign In
          </button>
        </div>
      </div>
      <div className="gradientBg" />
      {signIn ? (
        <SignUpScreen />
      ) : (
        <>
          <div className="loginBody">
            <div className="written">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <EnterEmail onSubmit={() => setSignIn(true)} />
            </div>
          </div>
          <LoginRows
            title="Enjoy on your TV."
            para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            right
          />
          <LoginRows
            title="Download your shows to watch offline."
            para="Save your favourites easily and always have something to watch."
            image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            left
          />
          <LoginRows
            title="Watch everywhere."
            para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.."
            image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            saif
            right
          />
          <LoginRows
            title="Create profiles for children."
            para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
            image="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            left
          />
          <Accordion />
          <div className="lowerEmail">
            <div className="in">
              <EnterEmail onSubmit={() => setSignIn(true)} />
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default LoginScreen;
