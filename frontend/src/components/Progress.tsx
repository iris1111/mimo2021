import React, { useState } from "react";
import tasks from "./TaskLine/tasks.json";

export default function Progress (props: any) {
    const progress = (all: any) => {
        let done = 0;
        
        return done;
    }
    
    
    return (
        <div className="progress">{progress(tasks.length)}
        </div>
    );
}
  