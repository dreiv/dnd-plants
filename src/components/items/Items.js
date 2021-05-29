import React, { Fragment } from "react";

import { useAppState } from "app-context";

export function Items() {
  const { filteredData } = useAppState();

  const renderItem = (item) =>
    Object.entries(item).map(([key, value], idx) => (
      <li key={idx}>
        {key} - {value}
      </li>
    ));

  return (
    <ul>
      {filteredData.map((item, i) => (
        <Fragment key={i}>
          {renderItem(item)}
          <br />
        </Fragment>
      ))}
    </ul>
  );
}
