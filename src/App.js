import React, { createContext, useEffect, useState } from "react";
import Tabletop from "tabletop";

import { Filters, Items } from './components';

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1joq6oGR_nb_mHa4-w2r-EC50qWim7mWvqiN_K1WxGRE",
      simpleSheet: true,
    })
      .then(setData)
      .catch(console.warn);
  }, []);

  const defaultContext = {
    data,
    setData
  }

  return (
    <AppContext.Provider value={defaultContext}>
      <Filters />
      <Items />
    </AppContext.Provider>
  );
}

export default App;
