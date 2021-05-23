import React, { useRef, useEffect, useContext, useState } from "react";

import { AppContext } from "../../App";
import './Filters.css'

const seasons = ["All Seasons", "Spring", "Summer", "Autumn", "Winter"];

export function Filters() {
  const didMount = useRef(false);
  const [season, setSeason] = useState(seasons[0]);
  const [climate, setClimate] = useState('All Climates');
  const [locale, setLocale] = useState('All Locales');
  const { data, climates = [], locales = [], setFilteredData } = useContext(AppContext);

  useEffect(() => {
    if (didMount.current) {
      let filteredData = [...data];

      if (season !== season[0]) {
        filteredData = filteredData.filter((item) => item.season === season);
      }

      if (climate !== climates[0]) {
        filteredData = filteredData.filter((item) => item.climate === climate);
      }

      if (locale !== locales[0]) {
        filteredData = filteredData.filter((item) => item.locale === locale);
      }

      setFilteredData(filteredData);
    } else didMount.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [season, climate, locale]);

  return (
    <>
      <h2>Filters:</h2>
      <form>
        <label>
          Season
          <br />
          <select value={season} onChange={({ target: { value } }) => setSeason(value)}>
            {seasons.map((s, idx) => (
              <option key={idx} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label>
          Climate
          <br />
          <select value={climate} onChange={({ target: { value } }) => setClimate(value)}>
            {climates.map((s, idx) => (
              <option key={idx} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label>
          Locale
          <br />
          <select value={locale} onChange={({ target: { value } }) => setLocale(value)}>
            {locales.map((s, idx) => (
              <option key={idx} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </form>
    </>
  );
}
