import React, { useState, useEffect, useRef } from "react";

const Interview = () => {
  const hoursMinSecs = { minutes: 0, seconds: 0 };
  const { minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[mins, secs], setTime] = useState([minutes, seconds]);
  const [isPause, setIsPause] = useState(false);
  const elmInputMin = useRef(null);
  const elmInputSecs = useRef(null);
  let timerId;

  const reset = () => {
    setTime([minutes, seconds]);
  };

  const tick = () => {
    if (mins === 0 && secs === 0) return;
    else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const handleStart = () => {
    const minute = elmInputMin.current.value;
    const seconds = elmInputSecs.current.value;
    setTime([minute, seconds]);
    timerId = setInterval(() => tick(), 1000);
  };

  useEffect(() => {
    if (!isPause) {
      timerId = setInterval(() => tick(), 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div>
      <div>Interview</div>
      <div>
        <label>Input minute</label>
        <input type="number" ref={elmInputMin} />
      </div>
      <div>
        <label>Input seconds</label>
        <input type="number" ref={elmInputSecs} />
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <br />
      <div>
        <div>{`${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`}</div>
      </div>
    </div>
  );
};

export default Interview;
