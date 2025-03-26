import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Reminder from "./Reminder";
import { Task } from "../types";
import { loadTasks, saveTasks } from "../utils/localStorage";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const deleteTask = (id: string) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      <Reminder tasks={tasks} />
    </div>
  );
};

export default TaskManager;
