// import { useState } from "react";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [day, setDay] = useState(true);
  const [night, setNight] = useState(false);

  const toogleClick = () => {
    if (day) {
      setDay(false);
    } else {
      setDay(true);
    }
    if (night) {
      setNight(false);
    } else {
      setNight(true);
    }
  };
  return (
    <div className="header">
      <div className="btn">
        <button>Reset</button>
      </div>
      <div className="theme">
        <div className="themeContainer">
          <div className="sun">
            {/* {day ? (
              <FaMoon onClick={toogleClick} />
            ) : (
              <FaMoon onclick={toogleClick} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
