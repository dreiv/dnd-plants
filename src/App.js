import React from "react";

import { Filters, Items, Loader, Roll } from "./components";
import { useAppState } from "app-context";
import "./App.css";

function App() {
  const { isLoading } = useAppState();

  if (isLoading) {
    return (
      <div className="loading-container">
        <h1>Loading Plants...</h1>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <details className="filter-details" open>
        <summary>
          Filters <Roll />
        </summary>
        <Filters />
      </details>
      <Items />
    </>
  );
}

export default App;
