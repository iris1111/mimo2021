import React from "react";
import Task from "../Task";
import "./style.css";

export default function (props?: any) {
  const tasks = [
    {
      id: 1,
      title: "Read task",
      type: "text",
    },
    {
      id: 2,
      title: "Upload document task",
      type: "upload",
    },
  ];
  return (
    <div className="task-line-container">
      {tasks.map((task) => {
        return <Task className={"task-line_task"} data={task}></Task>;
      })}
    </div>
  );
}
