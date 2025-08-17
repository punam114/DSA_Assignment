import React from "react";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul style={{ marginTop: "20px" }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {task.description} ({task.priority})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
