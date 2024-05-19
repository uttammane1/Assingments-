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
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedTaskList;
