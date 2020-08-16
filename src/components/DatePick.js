import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { DateContext } from "../DateContext";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = (props) => {
  const { startDate, setStartDate } = useContext(DateContext);
  return (
    <div>
      <p className="title">Select date to view previous images</p>
      <DatePicker
        selected={startDate}
        dateFormat={"yyyy-MM-dd"}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DatePick;
