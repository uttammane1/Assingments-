### React Assignment: JSX in React

### Step-by-Step Guide

### Step 1 :

Download the zip file

### **Step 2** :

Unzip the zip file

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
- - `src/components`: This is where you'll find all the Child components of App.
- `index.html`: The base HTML file.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Lists your project dependencies and scripts.

### Assignment Problems

### Problem 1: Basic JSX

Here is a simple component that displays a greeting message using JSX. The code is provided below:

```jsx
// src/components/Greeting1.jsx

import React from "react";

function Greeting1() {
  const name = "Aspiring Developer";
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting1;
```

Now, you have to complete the code in the Welcome component. It should display a welcome message with the provided name in a paragraph tag.

```jsx
// src/components/Welcome.jsx

import React from "react";

function Welcome() {
  const name = "React Developer";
  return (
    <div>
      <p>Welcome, {/* complete the missing code */}!</p>
    </div>
  );
}

export default Welcome;
```

### Problem 2: Conditional Rendering with JSX

Here is a component that displays a message based on a condition using JSX. The code is provided below:

```jsx
// src/components/ConditionalMessage1.jsx

import React from "react";

function ConditionalMessage1({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}

export default ConditionalMessage1;
```

Now, you have to complete the code in the LoginMessage component. It should display "Hello, User!" if the user is logged in, otherwise display "Access Denied".

```jsx
// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{/* complete the missing code */}</div>;
}

export default LoginMessage;
```

### Problem 3: Rendering Lists with JSX

Here is a component that renders a list of items using JSX. The code is provided below:

```jsx
// src/components/ItemList1.jsx

import React from "react";

function ItemList1() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList1;
```

Now, you have to complete the code in the FruitList component. It should render a list of fruit names.

```jsx
// src/components/FruitList.jsx

import React from "react";

function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{/* complete the missing code */}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
```

### Problem 4: Handling Events with JSX

Here is a component that handles a button click event using JSX. The code is provided below:

```jsx
// src/components/ButtonClick1.jsx

import React, { useState } from "react";

function ButtonClick1() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ButtonClick1;
```

Now, you have to complete the code in the ToggleButton component. It should toggle the message between "ON" and "OFF" when the button is clicked.

```jsx
// src/components/ToggleButton.jsx

import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default ToggleButton;
```

### Problem 5: Basic Component

Here is a simple Welcome1 component that accepts a name prop and displays a welcome message. The code is provided below:

```jsx
// src/components/Welcome1.jsx

import React from "react";

function Welcome1({ name }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default Welcome1;
```

Now, you have to complete the code in the Greeting component. It should accept a greeting message as a prop and display it inside an h2 tag.

```jsx
// src/components/Greeting.jsx

import React from "react";

function Greeting({ message }) {
  return (
    <div>
      <h2>{/* complete the missing code */}</h2>
    </div>
  );
}

export default Greeting;
```

### Problem 6: Component with Multiple Props

Here is a UserCard component that accepts name and email props

and displays user information. The code is provided below:

```jsx
// src/components/UserCard1.jsx

import React from "react";

function UserCard1({ name, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard1;
```

Now, you have to complete the code in the ProfileCard component. It should accept name, age, and location props and display them appropriately.

```jsx
// src/components/ProfileCard.jsx

import React from "react";

function ProfileCard({ name, age, location }) {
  return (
    <div>
      <h3>{/* complete the missing code */}</h3>
      <p>Age: {/* complete the missing code */}</p>
      <p>Location: {/* complete the missing code */}</p>
    </div>
  );
}

export default ProfileCard;
```

### Problem 7: Component with Children

Here is a Card component that accepts children props and displays them inside a card. The code is provided below:

```jsx
// src/components/Card1.jsx

import React from "react";

function Card1({ children }) {
  return <div className="card">{children}</div>;
}

export default Card1;
```

Now, you have to complete the code in the Container component. It should accept children props and display them inside a div with a className of "container".

```jsx
// src/components/Container.jsx

import React from "react";

function Container({ children }) {
  return <div className="container">{/* complete the missing code */}</div>;
}

export default Container;
```

### Problem 8: Rendering List of Objects

Here is a component that renders a list of user objects with unique keys. The code is provided below:

```jsx
// src/components/UserList1.jsx

import React from "react";

function UserList1() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList1;
```

Now, you have to complete the code in the ProductList component. It should render a list of product objects with unique keys.

```jsx
// src/components/ProductList.jsx

import React from "react";

function ProductList() {
  const products = [
    { id: 101, name: "Product A" },
    { id: 102, name: "Product B" },
    { id: 103, name: "Product C" },
  ];
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{/* complete the missing code */}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

### Problem 9: Conditional Rendering and Conditional Styling in List

Here is a component that renders a list of items and highlights them based on a condition. The code is provided below:

```jsx
// src/components/HighlightList1.jsx

import React from "react";

function HighlightList1() {
  const items = ["Item 1", "Item 2", "Item 3", "Special Item"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ color: item === "Special Item" ? "red" : "black" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightList1;
```

Now, you have to complete the code in the HighlightTaskList component. It should render a list of tasks and highlight the task named "Urgent Task" in bold.

```jsx
// src/components/HighlightTaskList.jsx

import React from "react";

function HighlightTaskList() {
  const tasks = ["Task 1", "Urgent Task", "Task 3"];
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ fontWeight: task === "Urgent Task" ? "bold" : "normal" }}
          >
            {/* complete the missing code */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightTaskList;
```

### Problem 10: Rendering Nested Lists

Here is a component that renders a nested list of items. The code is provided below:

```jsx
// src/components/NestedList1.jsx

import React from "react";

function NestedList1() {
  const categories = [
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Broccoli", "Spinach"],
    },
  ];
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h4>{category.name}</h4>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList1;
```

Now, you have to complete the code in the NestedTaskList component. It should render a nested list of tasks grouped by status.

```jsx
// src/components/NestedTaskList.jsx

import React from "react";

function NestedTaskList() {
  const taskGroups = [
    {
      status: "Pending",
      tasks: ["Task 1", "Task 2"],
    },
    {
      status: "Completed",
      tasks: ["Task 3", "Task 4"],
    },
  ];
  return (
    <div>
      {taskGroups.map((group, index) => (
        <div key={index}>
          <h4>{group.status}</h4>
          <ul>
            {group.tasks.map((task, idx) => (
              <li key={idx}>{/* complete the missing code */}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedTaskList;
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
