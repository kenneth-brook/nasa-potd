import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "./components/Head";

function App() {
  const [nasaImg, setNasaImg] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-08-11&hd=true&api_key=QqBB0MXdMYgdtsphkvSWDRlUjFtG29Ip2lFjypHG"
        //"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      )
      .then((res) => {
        console.log(res.data);
        setNasaImg(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg">
      <header>
        <h1 className="title">NASA PHOTO OF THE DAY</h1>
      </header>
      <Head
        title={nasaImg.title}
        url={nasaImg.hdurl}
        explanation={nasaImg.explanation}
        date={nasaImg.date}
      />
    </div>
  );
}

export default App;
