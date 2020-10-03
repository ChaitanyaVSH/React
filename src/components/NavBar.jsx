import React from "react";

const BioData = () => {
  var timeNow = calculateTimeNow();

  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "lightgreen" }}
    >
      <div className="container">
        <h1 className="display-1">
          Hey, <br /> Good {timeNow} <br /> Chaitu Maverick
        </h1>
        <p>Affirm the good and the bad will vanish...!</p>
      </div>
    </div>
  );

  function calculateTimeNow() {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) timeNow = "Morning";
    else if (hours >= 12 && hours < 17) timeNow = "afternoon";
    else if (hours >= 17 && hours < 20) timeNow = "evening";
    else timeNow = "night";

    return timeNow;
  }
};

export default BioData;
