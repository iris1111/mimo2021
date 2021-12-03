import { ScheduleOutlined } from "@material-ui/icons";
import React from "react";

export default function (props?: any) {
  function getColor(event: any) {
    switch (event.status) {
      case "В процессе":
        return "text-gold";
        break;
      case "Завершено":
        return "text-green";
        break;
      default:
        break;
    }
  }
  return (
    <div className="event-item">
      <div className="event-item_datetime">
        <div className="event-item_datetime_date">12.02</div>
        <div className="event-item_datetime_time">14:50</div>
        <div className="event-item_status">
          <div className="event-item_icon">
            <ScheduleOutlined
              className={getColor(props.event)}
              style={{ fontSize: "14px" }}
            ></ScheduleOutlined>
          </div>
          <div
            className={"event-item_status_title" + " " + getColor(props.event)}
          >
            {props.event.status}
          </div>
        </div>
      </div>
      <div className="event-item_content">
        <div className="event-item_content_title">{props.event.title}</div>
      </div>
    </div>
  );
}
