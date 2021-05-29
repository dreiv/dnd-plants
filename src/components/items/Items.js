import React, { Fragment } from "react";

import { useAppState } from "app-context";
import "./Items.css";

export function Items() {
  const { filteredData } = useAppState();

  const renderItem = (item) => (
    <li className="item">
      <h3>{item.name}</h3>
      <p class="detail-container">Season: {item.season.join(", ")}</p>
      <p class="detail-container">Climate: {item.climate.join(", ")}</p>
      <p class="detail-container">Locale: {item.locale.join(", ")}</p>
    </li>
  );

  return (
    <ul className="items-container">
      {filteredData.map((item, i) => (
        <Fragment key={i}>
          {renderItem(item)}
        </Fragment>
      ))}
    </ul>
  );
}
