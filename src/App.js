import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1joq6oGR_nb_mHa4-w2r-EC50qWim7mWvqiN_K1WxGRE",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>URL -- {item.URL}</li>
            <li>Email - {item.email}</li>
            <li>Token - {item.token}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}

export default App;
