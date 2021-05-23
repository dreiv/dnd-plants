import React, { useContext, Fragment } from "react";

import { AppContext } from "../../App";

export function Items() {
  const { data } = useContext(AppContext);

  const renderItem = (item) =>
    Object.entries(item).map(([key, value]) => (
      <li>
        {key} - {value}
      </li>
    ));

  return (
    <ul>
      {data.map((item, i) => (
        <Fragment key={i}>
          {renderItem(item)}
          <br />
        </Fragment>
      ))}
    </ul>
  );
}
