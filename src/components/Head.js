import React from "react";

const Head = (props) => {
  return (
    <div className="bgCont">
      <h1 className="title">{props.title}</h1>
      <h2 className="title">{props.date}</h2>
      <img className="image" src={props.url} alt="NASA POTD" />
      <div className="info">
        <h3 className="info">What this amazing image shows</h3>
        <p className="info">{props.explanation}</p>
      </div>
    </div>
  );
};

export default Head;
