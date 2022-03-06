import React from "react";
import "./LoginRow.css";

const LoginRows = (props) => {
  return (
    <div className="loginRow">
      {props.right && (
        <div className="wrap">
          <div className="left">
            <h1>{props.title}</h1>
            <h2>{props.para}</h2>
          </div>
          <div className="right">
            <img src={props.image} alt="tv" className="rowsImage" />
            <div className={props.saif ? "lowerVideo" : "vdo"}>
              {props.video && (
                <video
                  src={props.video}
                  muted
                  autoPlay={"autoplay"}
                  preLoad="auto"
                  loop
                />
              )}
            </div>
          </div>
        </div>
      )}
      {props.left && (
        <div className="wrap">
          <div className="right">
            <img src={props.image} alt="tv" className="rowsImage" />
            <div className="vdo">
              {props.video && (
                <video
                  src={props.video}
                  muted
                  autoPlay={"autoplay"}
                  preLoad="auto"
                  loop
                />
              )}
            </div>
          </div>
          <div className="left">
            <h1>{props.title}</h1>
            <h2>{props.para}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRows;
