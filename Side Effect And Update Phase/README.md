### Step-by-Step Guide

### Step 1 :

Download the zip file

### Step 2 :

Unzip the zip file

### Step 3:

Navigate to Your Project

```bash
cd <name-of-project>
```

### Step 4:

Install Dependencies

```bash
npm install

```

This command installs all the necessary dependencies for your project.

### Step 5:

Start the Development Server\*\*

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
- `src/components`: This is where you'll find all the Child components of App.
- `index.html`: The base HTML file.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Lists your project dependencies and scripts.

### Assignment Problems

**Note : Please note that axios library is also installed within the template (gets installed when you do `npm install` ) and need not be installed again**

### Problem 1: Fetching and Displaying Data with Axios

Here in this example; you can see how side effects are handled during update phase. ( Basically API call that is being made here as soon as component mounts or whenever page state changes )

```jsx
// src/components/Users.jsx

// Import necessary hooks from React
import { useState, useEffect } from "react";
// Import axios for making HTTP requests
import axios from "axios";
// Import custom components
import User from "./User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Users() {
  // Declare state variables
  const [loading, setLoading] = useState(false); // to manage loading state
  const [users, setUsers] = useState([]); // to store the fetched users
  const [error, setError] = useState(false); // to manage error state
  const [page, setPage] = useState(1); // to track the current page
  const [totalPages, setTotalPages] = useState(1); // to store total number of pages

  // Function to fetch and update data from the API
  async function fetchAndUpdateData(page) {
    setLoading(true); // set loading to true when starting the request
    try {
      // Make a GET request to the API
      let res = await axios({
        method: "get",
        url: `https://reqres.in/api/users?page=${page}`, // URL with dynamic page number
      });

      // Update users and totalPages state with the response data
      setUsers(res?.data?.data);
      setTotalPages(Number(res?.data?.total_pages));
      setLoading(false); // set loading to false after the request is successful
    } catch (error) {
      setError(true); // set error to true if there's an error
      setLoading(false); // set loading to false after the request fails
    }
  }

  // useEffect hook to fetch data whenever the page state changes
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  // If loading is true, display the LoadingIndicator component
  if (loading) {
    return <LoadingIndicator />;
  }

  // If error is true, display the ErrorIndicator component
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <div id="pagination">
        {/* Button to go to the previous page, disabled if already on the first page */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        {/* Display the current page number */}
        <p>{page}</p>
        {/* Button to go to the next page, disabled if already on the last page */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      <h1>List of users</h1>
      {/* Map through the users array and render a User component for each user */}
      {users?.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}

export default Users; // Export the Users component for use in other parts of the app
```

```jsx
// src/components/User.jsx

function User({ avatar, email, first_name, last_name }) {
  return (
    <div>
      <img src={avatar} alt={first_name} />
      <div>
        Name : {first_name} {last_name}
      </div>
      <div>Email : {email}</div>
    </div>
  );
}

export default User;
```

Now, you have to complete the code in the `Posts` and `Post` components. Complete the missing part in Post component such that the side effects are performed as soon as component or whenever page state changes ( Basically API calls are made during mount phase or whenever page state changes )

```jsx
// src/components/Posts.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchAndUpdateData(page) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/posts?_limit=10&page=${page}`,
      });

      setTotalPages(Math.ceil(Number(res?.headers["x-total-count"]) / 10));
      /*Complete the missing code*/
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    /*Complete the missing code*/
  }, [page]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <div id="pagination">
        {/* Button to go to the previous page, disabled if already on the first page */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREVIOUS
        </button>
        {/* Display the current page number */}
        <p>{page}</p>
        {/* Button to go to the next page, disabled if already on the last page */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
      <h1>List of Posts</h1>

      {posts?.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
```

```jsx
// src/components/Post.jsx

function Post({ title, body }) {
  return (
    <div>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
