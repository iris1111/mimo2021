import * as React from "react";
import teamData from "../../data/team.json";
import "./team.css";
import imgUrl from "../../img/team1.png";

export default function TeamPage() {
  console.log(teamData);

  return (
    <div>
      <div className="teamPage">
        <h1>Команда</h1>
        <div className="teamList">
          {teamData.map(function (user) {
            return (
              <div className="teamUser" key={user.id}>
                <div className="teamUserPhoto">
                  <img src={imgUrl} />
                </div>
                <div className="teamUserName">{user.name}</div>
                <div className="teamUserMark">{user.mark}</div>
                <div className="teamUserMess"></div>
              </div>
            );
          })}
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
