export function loadData(state, data) {
  const climatesTmp = { "All Climates": true };
  const localesTmp = { "All Locales": true };

  data.forEach((item) => {
    climatesTmp[item.climate] = true;
    localesTmp[item.locale] = true;
  });

  return {
    ...state,
    data: data,
    filteredData: data,
    climates: Object.keys(climatesTmp),
    locales: Object.keys(localesTmp),
  };
}
