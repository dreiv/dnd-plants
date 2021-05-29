import React from "react";

import "./Roll.css";

export function Roll() {
  const handleClick = () => {
    alert("Not implemented!");
  };

  return (
    <button className="roll-button" onClick={() => handleClick()}>
      🎲 Roll
    </button>
  );
}
