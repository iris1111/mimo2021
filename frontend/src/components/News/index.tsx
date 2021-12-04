import * as React from "react";
import teamData from "../../data/team.json";
import "./team.css";

export default function TeamPage() {
  return (
    <div>
      <div className="teamPage">
        <h1>Сотрудники программы Онбординг</h1>
        <div className="newsList">
          {teamData.map(function (user) {
            return (
              <div className="new" data-user={user.id} key={user.id}>
                <div className="newName">
                  <b>{user.name} </b>
                  {user.part}
                </div>
                <div className="newMark">{user.mark}</div>
              </div>
            );
          })}
          <div className="bottom-button-end newButton">Добавить</div>
        </div>
      </div>
    </div>
  );
}

/*


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
*/
