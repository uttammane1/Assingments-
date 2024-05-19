// src/components/ChangeColor1.jsx

// Import necessary hooks from React
import { useRef, useEffect } from "react";

function ChangeColor1() {
  // Create a ref object to directly access the DOM element
  const divRef = useRef(null);

  // useEffect hook to set an interval for changing the background color
  useEffect(() => {
    // Set an timeout to change the background color of the div after 3 seconds
    setTimeout(() => {
      divRef.current.style.backgroundColor = "yellow";
    }, 3000);
  }, []);

  return (
    <div>
      {/* Apply the ref to the div element to access it directly */}
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "teal" }}
      >
        Color Box
      </div>
    </div>
  );
}

// Export the ChangeColor1 component for use in other parts of the app
export default ChangeColor1;
