import React, { Component } from "react";
import { Task } from "../types";

interface Props {
  tasks: Task[];
}

class Reminder extends Component<Props> {
  componentDidMount() {
    this.checkReminders();
  }

  checkReminders() {
    setInterval(() => {
      const now = new Date().toISOString();
      this.props.tasks.forEach((task) => {
        if (task.dueDate === now) alert(`Reminder: ${task.title}`);
      });
    }, 60000);
  }

  render() {
    return <div>Reminder System Active</div>;
  }
}

export default Reminder;
