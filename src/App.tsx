import React from "react";
import TaskManager from "./components/TaskManager";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskManager />
    </div>
  );
};

export default App;
