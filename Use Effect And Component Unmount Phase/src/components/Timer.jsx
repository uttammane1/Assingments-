// src/components/Timer.jsx
// Import necessary hooks from React
import { useState, useEffect } from "react";

function Timer() {
  // Declare a state variable for the countdown timer, initialized to 10
  const [count, setCount] = useState(10);

  // useEffect hook to start a countdown timer when the component mounts
  useEffect(() => {
    // Set an interval to decrement the count every second
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        // If the count reaches 1, clear the interval to stop the timer
        if (prevCount <= 1) {
          clearInterval(intervalId);
        }
        // Return the updated count
        return prevCount - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    function cleanupFunction() {
      clearInterval(intervalId);
    }
    return cleanupFunction;
  }, []);

  return (
    <div
      style={{ border: "1px dashed black", padding: "10px", margin: "10px" }}
    >
      <h1>Count Down Timer</h1>
      {/* Display the current count */}
      <h4>{count}</h4>
    </div>
  );
}

// Export the Timer component for use in other parts of the app
export default Timer;
