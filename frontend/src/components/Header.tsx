import React, { useState } from "react";
import Progress from "./Progress";
import bonus from "./TaskLine/tasks.json";

export default function Header (props: any) {
    return (
        <div className="header">
            <div className="logo"></div>
            <Progress/>

            <ul className="menu">
                <li>Задачи</li>
                <li>События</li>
                <li>Команда</li>
            </ul>
            <div className="bonusTotal">2 220 б.</div>
            <div className="search"></div>
        </div>
    );
  }
  