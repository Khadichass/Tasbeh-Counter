// import { useState } from "react";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  // const [day, setDay] = useState(true);
  // const [night, setNight] = useState(false);

  // const toogleClick = () => {
  //   if (day) {
  //     setDay(false);
  //   } else {
  //     setDay(true);
  //   }
  //   if (night) {
  //     setNight(false);
  //   } else {
  //     setNight(true);
  //   }
  // };

  const [isDay, setIsDay] = useState(true);

  const toggleClick = () => {
    setIsDay(!isDay);
  };

  const resetClick = () => {
    setIsDay(!isDay);
  };

  // const resetClick = () => {
  //   setCount(0);
  //   setSumCount(0);
  // };

  return (
    <div className={`header ${isDay ? "day" : "night"}`}>
      <div className="btn">
        <button
          className={isDay ? "defaultColor" : "pressColor"}
          onClick={resetClick}
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
  );
}

export default Header;
