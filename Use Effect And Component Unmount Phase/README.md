### React Assignment: Timer Component

### Step-by-Step Guide

### Step 1 :

Download the zip file.

### **Step 2** :

Unzip the zip file.

### **Step 3: Navigate to Your Project**

```bash
cd <name-of-project>
```

**Step 4: Install Dependencies**

```bash
npm install
```

This command installs all the necessary dependencies for your project.

**Step 5: Start the Development Server**

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to see your app running.

### Understanding the Project Structure

After creating your project, you'll see several files and folders:

- `node_modules/`: Contains all the packages and dependencies your project needs.
- `public/`: Stores static assets like images.
- `src/`: This is where you'll spend most of your time. It contains your React components.
  - `App.jsx`: The main React component.
  - `main.jsx`: The entry point for your application, where React is rendered into the DOM.
- `src/components`: This is where you'll find all the child components of App.
- `index.html`: The base HTML file.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Lists your project dependencies and scripts.

### Assignment Problems

### Problem 1: Timer Component

Here is an example of a `Timer` component that starts a countdown from a specified number of seconds (for this example, we have mentioned 10 seconds ). Notice

1. The Timer starts as soon as the component is mounted/attached/visible onto UI.
2. You can notice how we manage side effects using useEffect during mount phase and perform cleanup during unmount phase to prevent memory leakage.
3. Component Timer can be unmounted from UI by clicking on TOGGLE TIMER button (Available in App.jsx component ). You will notice that there is no interval running in the background when the component Timer is unmounted/removed from UI.

```jsx
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
```

```jsx
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
```

Now, you have to complete the code in the `Stopwatch` component. The `Stopwatch` component should start counting up from zero as soon as the component mounts and should stop at 10. The component StopWatch will be unmounted/removed from UI whenever user clicks on Toggle StopWatch button (available in App.jsx component ) .Complete the Missing code in StopWatch component. Make sure that cleanups are written so that effects are properly cleaned during unmount phase to avoid memory leakage.

```jsx
// src/components/Stopwatch.jsx

// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
