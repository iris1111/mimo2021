import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import Task from "../Task";
import "./style.css";

export default function TaskLine(props?: any) {
  const enum StatusColor {
    "success" = "success",
    "hold" = "secondary",
  }
  const tasks = [
    {
      id: 1,
      title: "Read text",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti autem, blanditiis commodi incidunt sapiente nesciunt earum delectus magni veritatis amet porro necessitatibus tempora velit excepturi ipsam, exercitationem ducimus quis!",
      type: "read",
      status: StatusColor.success,
    },
    {
      id: 2,
      title: "Upload document",
      type: "upload",
      status: StatusColor.hold,
    },
    {
      id: 3,
      title: "Meeting",
      type: "meeting",
      status: StatusColor.hold,
    },
    {
      id: 4,
      title: "Upload document",
      type: "upload",
      status: StatusColor.success,
    },
  ];
  return (
    <div className="">
      <h1 className="task-day">День {props.day}</h1>
      <div className="task-line">
        <Timeline position="alternate">
          {tasks.map((task) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={task.status} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className={"task-line-task-wrapper"}>
                    <Task
                      key={task.id}
                      className={task.id % 2 === 0 ? "task-left" : ""}
                      task={task}
                    ></Task>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
