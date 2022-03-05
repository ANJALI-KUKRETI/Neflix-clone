import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
import "./Navbar.css";

const Navbar = () => {
  const [showBlack, setShowBlack] = useState(false);

  const showBlackNavbarHandler = () => {
    if (window.scrollY > 100) {
      setShowBlack(true);
    } else {
      setShowBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showBlackNavbarHandler);
    return () => window.removeEventListener("scroll", showBlackNavbarHandler);
  }, []);

  return (
    <div className={`nav ${showBlack && "showBlack"}`}>
      <div className="nav-content">
        <img
          className="logo"
          src="https://beat-netflix-clone.vercel.app/static/media/logo.5787551b.svg"
          alt="logo"
        />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
