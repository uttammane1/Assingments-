### React Assignment: useRef Hook

### Step-by-Step Guide

### Step 1:

Download the zip file.

### **Step 2**:

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

### Problem 1: Focusing an Input Field

Here is an example of a `FocusInput1` component that focuses an input field when a button is clicked using the `useRef` hook.

```jsx
// src/components/FocusInput1.jsx

import { useRef } from "react";

function FocusInput1() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput1;
```

Now, you have to complete the code in the `FocusInput2` component. The `FocusInput2` component should automatically focus the input field when the component mounts.

```jsx
// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  useEffect(() => {
    // complete the missing code
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on component mount"
      />
    </div>
  );
}

export default FocusInput2;
```

### Problem 2: Changing Background Color

Here is an example of a `ChangeColor1` component that changes the background color of a div to yellow after 3 seconds using the `useRef` hook.

```jsx
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
```

Now, you have to complete the code in the `ChangeColor2` component. The `ChangeColor2` component should change the background color of a div to blue when a button is clicked.

```jsx
// src/components/ChangeColor2.jsx

import { useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);

  const handleChangeColor = () => {
    // complete the missing code
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
