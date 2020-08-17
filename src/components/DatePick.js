import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { DateContext } from "../DateContext";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = (props) => {
  const { startDate, setStartDate } = useContext(DateContext);
  console.log(startDate);
  return (
    <div>
      <p className="title">Select date to view previous images</p>
      <DatePicker
        selected={startDate}
        dateFormat={"yyyy-MM-dd"}
        onChange={(date) => setStartDate(date)}
        className="red-border"
        excludeDates={[new Date()]}
        placeholderText="Select a date other than today or yesterday"
      />
    </div>
  );
};

export default DatePick;
