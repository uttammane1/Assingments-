// src/components/FocusInput1.jsx

// Import necessary hook from React
import { useRef } from "react";

function FocusInput1() {
  // Create a ref object to directly access the input element
  const inputRef = useRef(null);

  // Function to set focus on the input element
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Apply the ref to the input element to access it directly */}
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      {/* Button to trigger the focus on the input element */}
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

// Export the FocusInput1 component for use in other parts of the app
export default FocusInput1;
