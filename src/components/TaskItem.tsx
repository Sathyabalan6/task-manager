import React from "react";
import { Task } from "../types";

interface Props {
  task: Task;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDeleteTask }) => {
  return (
    <li>
      {task.title} - {task.dueDate}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
