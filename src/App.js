import React from "react";

import { Filters, Items } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <details class="filter-details" open>
        <summary>Filters</summary>
        <Filters />
      </details>
      <Items />
    </>
  );
}

export default App;
