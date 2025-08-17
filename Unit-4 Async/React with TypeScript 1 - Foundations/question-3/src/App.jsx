import React, { useState } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!description.trim()) return;
    const newTask = {
      id: Date.now(),
      description,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setDescription("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      {/* Add Task */}
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Filter */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      {/* Task List */}
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
