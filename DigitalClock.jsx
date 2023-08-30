import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const updateCtime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateCtime, 1000);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{ctime}</h1>
    </div>
  );
};

export default DigitalClock;
