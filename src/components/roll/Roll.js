import React from "react";

import { useAppState } from "app-context";
import "./Roll.css";

export function Roll() {
  const { filteredData } = useAppState();

  const handleClick = () => {
    const loot = [...filteredData].reduce((acc, item) => {
      const rand = Math.floor(Math.random() * 100 + 1);

      if (rand <= +item.probability) acc.push(item.name);

      return acc;
    }, []);

    alert(`loot: ${loot.toString()}`);
  };

  return (
    <button className="roll-button" onClick={() => handleClick()}>
      🎲 Roll
    </button>
  );
}
