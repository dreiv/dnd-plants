import React, { useRef, useEffect, useState } from "react";

import { useAppState, appTypes, useAppDispatch } from "app-context";
import "./Filters.css";

const seasons = ["All Seasons", "Spring", "Summer", "Autumn", "Winter"];

export function Filters() {
  const dispatch = useAppDispatch();
  const didMount = useRef(false);

  const { data, climates, locales } = useAppState();
  const [season, setSeason] = useState(seasons[0]);
  const [climate, setClimate] = useState(climates[0]);
  const [locale, setLocale] = useState(locales[0]);

  useEffect(() => {
    if (didMount.current) {
      let filteredData = [...data];

      if (season !== seasons[0]) {
        filteredData = filteredData.filter((item) => item.season === season);
      }

      if (climate !== climates[0]) {
        filteredData = filteredData.filter((item) => item.climate === climate);
      }

      if (locale !== locales[0]) {
        filteredData = filteredData.filter((item) => item.locale === locale);
      }

      dispatch({ type: appTypes.filterData, filteredData });
    } else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [season, climate, locale]);

  return (
    <form>
      <label>
        Season
        <select
          value={season}
          onChange={({ target: { value } }) => setSeason(value)}
        >
          {seasons.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label>
        Climate
        <select
          value={climate}
          onChange={({ target: { value } }) => setClimate(value)}
        >
          {climates.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label>
        Locale
        <select
          value={locale}
          onChange={({ target: { value } }) => setLocale(value)}
        >
          {locales.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
