import React, { createContext, useEffect, useState } from "react";
import Tabletop from "tabletop";

import { Filters, Items } from './components';

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [climates, setClimates] = useState(['Loading...']);
  const [locales, setLocales] = useState(['Loading...']);

  useEffect(() => {
    Tabletop.init({
      key: "1joq6oGR_nb_mHa4-w2r-EC50qWim7mWvqiN_K1WxGRE",
      simpleSheet: true,
    })
      .then((data) => {
        setData(data);
        setFilteredData(data);

        const climatesTmp = { 'All Climates': true };
        const localesTmp = { 'All Locales': true };

        data.forEach(item => {
          climatesTmp[item.climate] = true
          localesTmp[item.locale] = true
        })

        setClimates(Object.keys(climatesTmp));
        setLocales(Object.keys(localesTmp));
      })
      .catch(console.warn);
  }, []);

  const defaultContext = {
    data,
    climates,
    locales,
    filteredData,
    setFilteredData,
  };

  return (
    <AppContext.Provider value={defaultContext}>
      <Filters />
      <Items />
    </AppContext.Provider>
  );
}

export default App;
