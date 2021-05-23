import React, { useContext, useState } from "react";

import { AppContext } from "../../App";

const seasons = ["All Seasons", "Spring", "Summer", "Autumn", "Winter"];

export function Filters() {
  const [season, setSeason] = useState(seasons[0]);
  const { data, setFilteredData } = useContext(AppContext);

  const onSeasonChange = ({ target: { value } }) => {
    if (value === seasons[0]) {
      setFilteredData(data);
    } else {
      const filteredData = [...data].filter((item) => item.season === value);

      setFilteredData(filteredData);
    }

    setSeason(value);
  };

  return (
    <>
      <h2>Filters:</h2>
      <form>
        <label>
          Season
          <br />
          <select value={season} onChange={onSeasonChange}>
            {seasons.map((s) => (
              <option value={s}>{s}</option>
            ))}
          </select>
        </label>
      </form>
      {season}
    </>
  );
}
