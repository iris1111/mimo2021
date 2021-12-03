import React, { useState } from "react";
import Progress from "./Progress";

export default function Header (props: any) {
    return (
        <div className="header">
            <div className="logo"></div>
            <Progress/>
        </div>
    );
  }
  