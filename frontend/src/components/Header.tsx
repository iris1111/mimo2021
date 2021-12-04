import { Badge, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Swiper from "swiper";
import EventItem from "./EventItem";
import Progress from "./Progress";
import bonusDefault from "../data/bonus.json";

if (!localStorage.getItem("bonus")) {
  localStorage.setItem("bonus", bonusDefault.bonus.toString());
}

const bonus = localStorage.getItem("bonus");

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
  const toScreen = (data: any) => {
    if (document !== null) {
      let bulletMenu: HTMLElement = document.querySelectorAll(
        ".section-swiper .swiper-pagination-bullet"
      )[data] as HTMLElement;
      if (bulletMenu !== null) {
        bulletMenu.click();
      }
    }
  };
  return (
    <div className="header">
      <div className="search"></div>
      {props.bonus && <div className="bonusTotal">{bonus} Б</div>}
      <ul className="menu">
        <li onClick={() => toScreen(0)}>Задачи</li>
        {props.bonus ? (
          <li onClick={() => toScreen(1)}>Команда</li>
        ) : (
          <li onClick={() => toScreen(1)}>Сотрудники</li>
        )}
        <Badge className="events-badge" badgeContent={events.length}>
          <li onClick={(event) => handleClick(event)}>События</li>
        </Badge>
      </ul>
      {props.bonus && <Progress />}
      <a href="/" className="logo"></a>

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
