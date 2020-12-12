import { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [search, saveSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultApi = async () => {
      if (consult) {
        const appId = "60adb92347f691c73b75f466c7570e79";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        saveResult(result);
        saveConsult(false);

        //check for correct results
        if (result.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    };

    consultApi();
  }, [city, consult, country]);

  return (
    <Fragment>
      <Header title="Weather React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>

            <div className="col m6 s12">
              {error ? <div className="error red darken-4" style={{textTransform: "capitalize"}}> {result.message}</div> : <Weather result={result} />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
