import React, { useState } from "react";
import tasks from "./TaskLine/tasks.json";

export default function Progress (props: any) {
    const progress = () => {
        let done = 0;
        let all = 0;
        tasks.map((day) => {
            day.tasks.map((task) => {
                if(task.status == 'success') {
                    done++;
                }
                all++;
            })            
        })
        done = done / all * 100;
        return done;
    }
    
    
    return (
        <div className="progress">
            <div style={{width: progress() + '%'}}></div>
        </div>
    );
}
  