import { Badge, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Swiper from "swiper";
import EventItem from "./EventItem";
import Progress from "./Progress";
import bonus from "./TaskLine/tasks.json";

export default function Header(props: any) {
  const [events, setEvents] = useState(props.events);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    if (events.length > 0) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setEvents([]);
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <a href="/" className="logo"></a>
      <Progress />

      <ul className="menu">
        <li>Задачи</li>
        <Badge className="events-badge" badgeContent={events.length}>
          <li onClick={(event) => handleClick(event)}>События</li>
        </Badge>
        <li>Команда</li>
      </ul>
      {props.bonus && <div className="bonusTotal">2 220 Б</div>}

      <div className="search"></div>

      <Menu
        id="basic-menu"
        sx={{ borderRadius: 0 }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {events.map((event: any) => {
          return <EventItem event={event}></EventItem>;
        })}
      </Menu>
    </div>
  );
}
