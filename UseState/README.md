### React Assignment: `useState` Hook

#### Step-by-Step Guide

**Step 1 : Download the zip file**

**Step 2 : Unzip the zip file**

**Step 3: Navigate to Your Project**

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
  - `App.jsx`: The main React component. Open this file in VS Code.
  - `main.jsx`: The entry point for your application, where React is rendered into the DOM.
- `src/components`: This is where you'll find all the Child components of App.
- `index.html`: The base HTML file.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Lists your project dependencies and scripts.

### Assignment Problems on `useState` Hook

#### Problem 1: Number State

Here is a simple Counter component that increases and decreases by 1 each time respective buttons are clicked. The code is provided below:

```jsx
// src/components/Counter1.jsx

import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter1;
```

Now, you have to complete the code in the ScoreKeeper component. Clicking on the "Increase by 5" button should increase the value of score by 5, and clicking on the "Decrease by 5" button should decrease the value of score by 5.

```jsx
// src/components/ScoreKeeper.jsx

import { useState } from 'react';

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <button onClick={/*complete the missing code*/}>Increase by 5</button>
      <button onClick={/*complete the missing code*/}>Decrease by 5</button>
    </div>
  );
}

export default ScoreKeeper;
```

#### Problem 2: String State

Here is a TextInput component that updates a message based on the entered text in real-time. The code is provided below:

```jsx
// src/components/TextInput1.jsx

import { useState } from "react";

function TextInput1() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Entered text: {text}</p>
    </div>
  );
}

export default TextInput1;
```

Now, you have to complete the code in the UsernameInput component. The component should display the entered username in lowercase letters.

```jsx
// src/components/UsernameInput.jsx

import { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <input type="text" value={username} onChange={(e) => /*complete the missing code*/} />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;
```

#### Problem 3: Boolean State

Here is a ToggleMessage component that toggles the visibility of a text message when a button is clicked. The code is provided below:

```jsx
// src/components/ToggleMessage1.jsx

import { useState } from "react";

function ToggleMessage1() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default ToggleMessage1;
```

Now, you have to complete the code in the ShowHideText component. The component should initially hide the text and toggle its visibility when the button is clicked.

```jsx
// src/components/ShowHideText.jsx

import { useState } from 'react';

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => /*complete the missing code*/}>Show/Hide Text</button>
      {showText && <p>This is a toggled text!</p>}
    </div>
  );
}

export default ShowHideText;
```

#### Problem 4: Object State

Here is a UserInfo component that updates user information. The code is provided below:

```jsx
// src/components/UserInfo1.jsx

import { useState } from "react";

function UserInfo1() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleInputChange}
      />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserInfo1;
```

Now, you have to complete the code in the ProfileUpdater component. The component should also include a phone number field and update the state accordingly.

```jsx
// src/components/ProfileUpdater.jsx

import { useState } from "react";

function ProfileUpdater() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "", // Added phone number field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={profile.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={profile.phoneNumber}
        onChange={handleInputChange}
      />
      <p>First Name: {profile.firstName}</p>
      <p>Last Name: {profile.lastName}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
    </div>
  );
}

export default ProfileUpdater;
```

#### Problem 5: Array State

Here is an ItemList component that adds items to a list when a button is clicked. The code is provided below:

```jsx
// src/components/ItemList1.jsx

import { useState } from "react";

function ItemList1() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
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

Now, you have to complete the code in the TaskManager component. The component should include a button to remove the first item from the list.

```jsx
// src/components/TaskManager.jsx

import { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = () => {


 setTasks(tasks.slice(1));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={() => /*complete the missing code*/}>Remove First Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
```

### Submission Instructions

- Push your code to GitHub and share the repository link.
