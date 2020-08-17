import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "./components/Head";
import DatePick from "./components/DatePick";
import { DateContext } from "./DateContext";

function App(props) {
  const [startDate, setStartDate] = useState(new Date(), 1);
  const [nasaImg, setNasaImg] = useState([]);
  let dateGrab = startDate.toISOString();
  let splitDate = dateGrab.split("T")[0];
  console.log(splitDate);
  useEffect(
    (props) => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?date=${splitDate}&hd=true&api_key=QqBB0MXdMYgdtsphkvSWDRlUjFtG29Ip2lFjypHG`
        )
        .then((res) => {
          console.log(res.data);
          setNasaImg(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [startDate]
  );

  return (
    <DateContext.Provider value={{ startDate, setStartDate }}>
      <div className="bg">
        <header>
          <h1 className="title">NASA PHOTO OF THE DAY</h1>
        </header>
        <DatePick />
        <Head
          title={nasaImg.title}
          url={nasaImg.hdurl}
          explanation={nasaImg.explanation}
          date={nasaImg.date}
        />
      </div>
    </DateContext.Provider>
  );
}

export default App;
