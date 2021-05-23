import React, { useContext } from "react";

import { AppContext } from "../../App";

export function Filters() {
  const { data } = useContext(AppContext);

  return <h1>filters</h1>;
}
