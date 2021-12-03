import React from "react";

export default function (props?: any) {
  return (
    <div className="event-item">
      <div className="event-item_datetime">
        <div className="event-item_datetime_date">12.02</div>
        <div className="event-item_datetime_time">14:50</div>
      </div>
      <div className="event-item_content">
        <div className="event-item_content_title">{props.event.title}</div>
      </div>
    </div>
  );
}
