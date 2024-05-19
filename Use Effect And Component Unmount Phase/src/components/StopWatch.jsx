// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set an interval to increment the count every second
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        // If the count reaches 10, clear the interval to stop the stopwatch
        if (prevCount >= 9) {
          clearInterval(intervalId);
        }
        // Return the updated count
        return prevCount + 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
