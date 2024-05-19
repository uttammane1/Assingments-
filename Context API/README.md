### React Assignment: Context API with Functional Components and useContext Hook

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

### Problems :

Your `main.jsx` file has two context providers. Your App component is wrapped with these two context provider

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import { BulbContextProvider } from "./context/BulbContextProvider.jsx";

{
  /* Wrapping App component with context providers */
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BulbContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BulbContextProvider>
);
```

The App.jsx component has three child components: `<Navbar />`, `<Middle />`, and` <Footer />`. The `<Middle />` component, in turn, has two child components: `<LeftSidebar />` and `<RightSection />`.

You can examine the AuthContextProvider component, where we maintain the isLoggedIn state. There are two functions, login and logout, which update the isLoggedIn state:

```jsx
src / context / AuthContextProvider;
import { createContext, useState } from "react";

// Step 1: Create Context
export const AuthContext = createContext();

// Step 2.A : Provide Context
export function AuthContextProvider(props) {
  // State to manage loggedin status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in

  const login = () => setIsLoggedIn(true);

  // Function to log out

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      // Providing authentication state and functions to children components
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
```

Your can also observe how these values are consumed in `LeftSideBar.jsx` component

```jsx
import { useContext } from "react"; // Importing necessary libraries
import { AuthContext } from "../context/AuthContextProvider";

export default function LeftSidebar() {
  // Getting isLoggedin value, login and logout function from AuthContext

  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="left-sidebar">
      <p>Left Sidebar</p>
      <h4> Is User Logged In : {isLoggedIn ? "Yes" : "No"}</h4>
      <button onClick={login}>LOGIN</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
```

Now, you need to complete the `BulbContextProvider` component. The `BulbContextProvider` should maintain the `isOn` state, with functions `switchOn` and `switchOff` to update this state. You can also observe how the `BulbContextProvider` component is exported here and is imported in `main.jsx`; the values passed in the value attribute of `BulbContext.Provider` are available throughout the application since we have wrapped the `App` component within `BulbContextProvider`.

```jsx
// src/context/BulbContextProvider.jsx
import { createContext, useState } from "react";

// Step 1: Create Context
export const BulbContext = createContext();

// Step 2.A : Provide Context
export function BulbContextProvider(props) {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
    /*complete the missing code*/
  };

  const switchOff = () => {
    /*complete the missing code*/
  };

  return (
    <BulbContext.Provider
      value={
        {
          /*complete the missing code*/
        }
      }
    >
      {props.children}
    </BulbContext.Provider>
  );
}
```

You need to consume the values in the `RightSection.jsx` component. The `RightSection` component should consume the values of `isOn`, `switchOn`, and `switchOff`, with functionality such that clicking on the "SWITCH ON" button should turn the bulb on, and clicking on the "SWITCH OFF" button should turn the bulb off.

```jsx
// src/components/RightSection.jsx
import { useContext } from "react";
import { BulbContext } from "../context/BulbContextProvider";

export default function RightSection() {
  const { isOn, switchOn, switchOff } = {
    /*complete the missing code*/
  };

  return (
    <div className="right-section">
      <p>Right Section ( Bulb ) </p>
      <div className="light-bulb-container">
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        <button
          onClick={
            {
              /*complete the missing code*/
            }
          }
        >
          SWITCH ON
        </button>
        <button
          onClick={
            {
              /*complete the missing code*/
            }
          }
        >
          SWITCH OFF
        </button>
      </div>
    </div>
  );
}
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
