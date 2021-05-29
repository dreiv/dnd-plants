import React from "react";

import { Filters, Items } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <details className="filter-details" open>
        <summary>Filters</summary>
        <Filters />
      </details>
      <Items />
    </>
  );
}

export default App;
