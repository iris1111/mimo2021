import * as React from "react";
import teamData from "../../data/team.json";
import "./team.css";
import imgUrl from "../../img/team1.png";
import imgUrl2 from "../../img/team2.jpg";
import imgUrl3 from "../../img/team3.jpg";

const Images: string[] = [];

Images.push(imgUrl);
Images.push(imgUrl2);
Images.push(imgUrl3);
const gameData = teamData.slice(0);

const startGame = () => {
  if (gameData.length == 0) {
    alert("Ура! Ты вы играл)");
  } else {
    let item = Math.floor(Math.random() * gameData.length);
    showFact(gameData[item].game);
    gameData.splice(item, 1);
  }
};
const showFact = (fact: string) => {
  alert(fact);
};

export default function TeamPage() {
  return (
    <div>
      <div className="teamPage">
        <h1>Команда проекта Эквайринг</h1>
        {/*<p>
          Можно познакомиться с ребятами поближе.
          <a href="#" onClick={() => startGame()}>
            Сыграем в интуицию?
          </a>
          </p>*/}
        <div className="teamList">
          {teamData.map(function (user) {
            return (
              <div className="teamUser" data-user={user.id} key={user.id}>
                <div className="teamUserPhoto">
                  <img src={Images[user.photo - 1]} />
                </div>
                <div className="teamUserName">{user.name}</div>
                <div className="teamUserMark">{user.mark}</div>
                <a className="teamUserMess" href="{user.mess}"></a>
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
