import React, { useState } from "react";
import tasks from "./TaskLine/tasks.json";
const renderDays = () => {
  let num = 0;
  let template;

  template = tasks.map((day) => {
    num++;
    if (day.tasks && num != tasks.length) {
      return <span className="doneDay">День {num}</span>;
    } else {
      return <span>День {num}</span>;
    }
  });

  return template;
};

export default function Progress() {
  return <div className="progress">{renderDays()}</div>;
}
