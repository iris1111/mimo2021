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

import {
  AttachFileOutlined,
  DescriptionOutlined,
  GroupOutlined,
  MeetingRoomOutlined,
} from "@material-ui/icons";

export default function TaskLine(props?: any) {
  const enum StatusColor {
    "success" = "success",
    "hold" = "secondary",
  }

  function renderIcon(task: any) {
    switch (task.type) {
      case "upload":
        return <span className="i-icon"></span>;
        break;
      case "read":
        return <span className="study-icon"></span>;
        break;
      case "meeting":
        return <GroupOutlined></GroupOutlined>;
        break;
      case "hero":
        return <span className="timeHero"></span>;
        break;
      default:
        break;
    }
  }
  return (
    <div className="">
      <div className="task-line">
        <div className="task-day">{props.day}</div>
        <Timeline position="alternate">
          {props.tasks.map((task: any) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                ></TimelineOppositeContent>
                <TimelineSeparator className="task-line_line">
                  <TimelineConnector />
                  {renderIcon(task)}
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className={"task-line-task-wrapper"}>
                    <Task
                      key={task.id}
                      className={
                        task.color +
                        " " +
                        (task.id % 2 === 0 ? "task-left" : "")
                      }
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
