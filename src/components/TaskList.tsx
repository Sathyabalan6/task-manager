import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

class TaskList extends Component<Props> {
  render() {
    return (
      <ul className="task-list">
        {this.props.tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDeleteTask={this.props.onDeleteTask} />
        ))}
      </ul>
    );
  }
}

export default TaskList;
