import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  function tick() {
    setTime(new Date());
  }

  return (
    <div>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
