// import { useState } from "react";
import React, { useState } from "react";

function Header() {
  const [isDay, setIsDay] = useState(true);

  const toggleClick = () => {
    console.log(isDay);
    setIsDay(!isDay);
    console.log(isDay);
  };

  const [count, setCount] = useState(0);
  const [sumCount, setSumCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setSumCount(sumCount + 1);
    // eslint-disable-next-line eqeqeq
    if (count == 99) {
      setCount(1);
    }
  };

  return (
    <div>
      <div className={`header ${isDay ? "day" : "night"}`}>
        <div className="btn">
          <button
            className={isDay ? "defaultColor" : "pressColor"}
            style={{
              backgroundColor: isDay ? "#fc2947 " : "#ff7a8a",
              borderColor: isDay ? "#fc2947 " : "#ff7a8a",
            }}
          >
            Reset
          </button>
        </div>
        <div className={`theme ${isDay ? "defaultColor" : "pressColor"}`}>
          <div className="themeContainer">
            <div
              className={`sun ${isDay ? "suncolor" : "night"}`}
              onClick={toggleClick}
            ></div>
          </div>
        </div>
      </div>

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
      <div className={`footer ${isDay ? "day" : "night"}`}>
        <div>©2023. All rights reserved</div>
      </div>
    </div>
  );
}

export default Header;
