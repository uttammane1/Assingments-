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

### Problem :

Explore how `BrowserRouter` component works in React to enable Routing.

**main.jsx**

```javascript
// src/main.jsx

import React from "react"; // Importing React library
import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering React components
import App from "./App.jsx"; // Importing the main App component
import "./index.css"; // Importing global CSS styles
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

// Rendering the main App component within BrowserRouter for enabling routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**App.jsx**

`App` has `Navbar` and `AllRoutes` components.

```javascript
// src/App.jsx

import "./App.css"; // Importing CSS styles for the App component
import Navbar from "./components/Navbar"; // Importing Navbar component
import AllRoutes from "./components/AllRoutes"; // Importing AllRoutes component for handling routes

export default function App() {
  return (
    <>
      <Navbar /> {/* Rendering Navbar component */}
      <AllRoutes /> {/* Rendering AllRoutes component to handle different routes */}
    </>
  );
}
```

**Navbar.jsx**

`Navbar` component displays links for navigation.

```javascript
// src/components/Navbar.jsx

import { Link } from "react-router-dom"; // Importing Link component for navigation

// Array of link objects containing path and label
const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/users",
    label: "USERS",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
];

// Navbar component definition
export default function Navbar() {
  return (
    <div className="navbar">
      {links?.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label} {/* Rendering each link */}
        </Link>
      ))}
    </div>
  );
}
```

**AllRoutes.jsx**

This is where we write the logic for handling different routes.

```javascript
// src/components/AllRoutes.jsx

import { Routes, Route } from "react-router-dom"; // Importing Routes and Route components
import Home from "../pages/Home"; // Importing Home component
import About from "../pages/About"; // Importing About component
import Contact from "../pages/Contact"; // Importing Contact component
import Users from "../pages/Users"; // Importing Users component
import Login from "../pages/Login"; // Importing Login component
import UserDetails from "../pages/UserDetails"; // Importing UserDetails component

// AllRoutes component definition
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for Home page */}
      <Route path="/about" element={<About />} /> {/* Route for About page */}
      <Route path="/contact" element={<Contact />} />{" "}
      {/* Route for Contact page */}
      <Route path="/users" element={<Users />} /> {/* Route for Users page */}
      <Route path="/login" element={<Login />} /> {/* Route for Login page */}
      <Route path="/users/:user_id" element={<UserDetails />} /> {/* Route for UserDetails page */}
    </Routes>
  );
}
```

In `pages` folder we will have different Pages `About`, `Contact`, `Home`, `Login`, `Users` and `UserDetails`

**About.jsx**

```javascript
// src/pages/About.jsx

// About component definition
export default function About() {
  return (
    <>
      <h1>About Page</h1> {/* Displaying About Page header */}
    </>
  );
}
```

**Contact.jsx**

```javascript
// src/pages/Contact.jsx

// Contact component definition
export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1> {/* Displaying Contact Page header */}
    </>
  );
}
```

**Home.jsx**

```javascript
// src/pages/Home.jsx

// Home component definition
export default function Home() {
  return (
    <>
      <h1>Home Page</h1> {/* Displaying Home Page header */}
    </>
  );
}
```

**Login.jsx**

```javascript
// src/pages/Login.jsx

import { useState } from "react"; // Importing useState hook
import axios from "axios"; // Importing axios for making HTTP requests

// Login component definition
export default function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  }); // State to manage form data

  function handleChange(e) {
    const { name, value } = e.target; // Extracting name and value from the input

    const newFormState = {
      ...formState,
      [name]: value,
    }; // Updating form state

    setFormState(newFormState);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Preventing default form submission behavior

    // Making a POST request to login endpoint
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: formState,
    }).then((res) => {
      console.log(res?.data?.token); // Logging the response token
    });
  }

  const { email, password } = formState; // Destructuring formState
  return (
    <>
      <h1>Login Page</h1> {/* Displaying Login Page header */}
      <form onSubmit={handleSubmit}>
        <label>
          Email :{" "}
          <input
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </label>
        <br />
        <br />
        <label>
          Password :{" "}
          <input
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
        </label>
        <br />
        <br />
        <input type="submit" value="LOGIN" /> {/* Submit button */}
      </form>
    </>
  );
}
```

**Users.jsx**

```javascript
// src/pages/Users.jsx

import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import axios from "axios"; // Importing axios for making HTTP requests
import { Link } from "react-router-dom"; // Importing Link component for navigation

// Users component definition
export default function Users() {
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [users, setUsers] = useState([]); // State to manage users data
  const [err, setErr] = useState(false); // State to manage error status

  async function fetchAndUpdateData() {
    setLoading(true); // Setting loading to true before fetching data
    try {
      const res = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=2",
      }); // Making GET request to fetch users data

      setUsers(res?.data?.data); // Updating users state with fetched data
      setLoading(false); // Setting loading to false after data is fetched
    } catch (err) {
      setErr(true); // Setting error to true if there's an error
      setLoading(false); // Setting loading to false after error
    }
  }

  useEffect(() => {
    fetchAndUpdateData(); // Fetching data when component mounts
  }, []);

  if (loading) {
    return <h1>Loading...</h1>; // Displaying loading message if data is being fetched
  }

  if (err) {
    return <h1>something went wrong</h1>; // Displaying error message if there's an error
  }

  return (
    <>
      <h1>Users Page</h1> {/* Displaying Users Page header */}
      {users?.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px dashed black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>
            {user?.first_name} {user?.last_name}
          </h3>{" "}
          {/* Displaying user's name */}
          <Link to={`/users/${user?.id}`}>
            Click here for more details
          </Link> {/* Link to user details */}
        </div>
      ))}
    </>
  );
}
```

**UserDetails.jsx**

```javascript
// src/pages/UserDetails.jsx

import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import axios from "axios"; // Importing axios for making HTTP requests
import { useParams } from "react-router-dom"; // Importing useParams hook to get URL parameters

// UserDetails component definition
export default function UserDetails() {
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [user, setUser] = useState({}); // State to manage user data
  const [err, setErr] = useState(false); // State to manage error status
  const { user_id } = useParams(); // Getting user_id from URL parameters

  async function fetchAndUpdateData(user_id) {
    setLoading(true); // Setting loading to true before fetching data
    try {
      const res = await axios({
        method: "get",
        url: `https://reqres.in/api/users/${user_id}`,
      }); // Making GET request to fetch user data

      setUser(res?.data?.data); // Updating user state with fetched data
      setLoading(false); // Setting loading to false after data is fetched
    } catch (err) {
      setErr(true); // Setting error to true if there's an error
      setLoading(false); // Setting loading to false after error
    }
  }

  useEffect(() => {
    fetchAndUpdateData(user_id); // Fetching data when component mounts and user_id changes
  }, [user_id]);

  if (loading) {
    return <h1>Loading...</h1>; // Displaying loading message if data is being fetched
  }

  if (err) {
    return <h1>something went wrong</h1>; // Displaying error message if there's an error
  }
  return (
    <>
      <h1>User Details Page</h1> {/* Displaying User Details Page header */}
      <div>
        <img src={user?.avatar} alt="user" /> {/* Displaying user's avatar */}
        <p>
          Name : {user?.first_name} {user?.last_name}
        </p> {/* Displaying user's name */}
        <p>Email : {user?.email}</p> {/* Displaying user's email */}
        <p>ID : {user?.id}</p> {/* Displaying user's ID */}
      </div>
    </>
  );
}
```

# Task :

Your task is

1. To create 3 New pages `Courses`, `Learn`, `Fees`.
2. The routes for these pages are `/courses`, `/learn`, `/fees` respectively.
3. The `Courses` page should have a heading `Courses Page` and the `Learn` page should have a heading `Learn Page` and the `Fees` page should have a heading `Fees Page`.
4. Make sure that these pages are accessible from the navbar.

### Submission Instructions

- Push your code to GitHub and share the repository link.
