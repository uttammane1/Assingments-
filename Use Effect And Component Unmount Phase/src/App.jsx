// src/App.jsx
// Import the necessary CSS file
import "./App.css";
// Import the StopWatch and Timer components
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";
// Import useState hook from React
import { useState } from "react";

function App() {
  // Declare state variables to control the visibility of Timer and StopWatch
  const [showTimer, setShowTimer] = useState(true);
  const [showStopWatch, setShowStopWatch] = useState(true);

  return (
    <div className="App">
      {/* Conditionally render Timer component based on showTimer state */}
      {showTimer ? <Timer /> : null}
      {/* Button to toggle the visibility of Timer */}
      <button onClick={() => setShowTimer(!showTimer)}>TOGGLE TIMER</button>
      <br />
      <br />
      <hr />
      {/* Conditionally render StopWatch component based on showStopWatch state */}
      {showStopWatch && <StopWatch />}
      {/* Button to toggle the visibility of StopWatch */}
      <button onClick={() => setShowStopWatch(!showStopWatch)}>
        TOGGLE STOPWATCH
      </button>
    </div>
  );
}

// Export the App component for use in other parts of the app
export default App;
