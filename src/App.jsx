import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [city, setCity] = useState("");
  const [wdetails, setWdetails] = useState();
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&
appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalres) => {
        console.log(finalres.cod);
        if (finalres.cod == "404") {
          setWdetails(undefined);
        } else {
          setWdetails(finalres);
        }
      });
    console.log(city);
    setCity("");
  };

  return <>
  <div className="page">
  <div className="page-details">
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div className="showdata">
        {wdetails !== undefined ? (
          <div className="data">
            <h1>{wdetails.name}<span>{wdetails.sys.country}</span></h1>
            <h3>{wdetails.main.temp}°C</h3>
            <img src={`http://openweathermap.org/img/wn/${wdetails.weather[0].icon}@2x.png`}   alt="weather icon"></img>
            
            <h3>{wdetails.weather[0].description}</h3>
          </div>
        ) : (
          "no city found"
        )}
      </div>
      </div>
      </div>
    </>
  
}

export default App;
