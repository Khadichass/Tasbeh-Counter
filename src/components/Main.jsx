// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import image from "../assets/images/image.svg.jpg";
import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="smallContainer">
          <div className="left">
            <span>All:</span> 99
          </div>
          <div className="right">
            <div>0</div> / <div>99</div>
          </div>
        </div>
        <div className="circle">99</div>
      </div>
    </div>
  );
}

export default Main;
