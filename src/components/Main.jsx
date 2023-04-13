// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

// import image from "../assets/images/image.svg.jpg";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";

function Main() {
  const [count, setCount] = useState(0);
  const [sumCount, setSumCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setSumCount(sumCount + 1);
    if (count == 99) {
      setCount(0);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="smallContainer">
          <div className="left">
            <span>All:</span> {sumCount}
          </div>
          <div className="right">
            <div>{count}</div> / <div>99</div>
          </div>
        </div>
        <div className="circle" onClick={handleClick}>
          {count}
        </div>
      </div>
    </div>
  );
}

export default Main;
