import { Link, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./TaskModal.css";
import img from "./modal1.png";
import imgHero from "../img/modalHero2.png";
import modalHero from "../img/modal-hero-large.svg";

export default function TaskModal(props?: any) {
  console.log(props.task.type);
  function toggleActive(event: any) {
    event.target.classList.toggle("modal-hero_active");
  }
  function getModal(task: any) {
    switch (task.type) {
      case "upload":
        return (
          <div className="modal-upload">
            <div className="modal-upload_top">
              <div className="modal-upload_title">{task.title}</div>

              <div className="modal-upload_descr">Основная задача</div>
              <div className="modal-upload_input">
                <div className="doc-icon"></div>
              </div>
            </div>
            <div className="modal-upload_bottom">
              <div className="modal-upload_dop">
                <div className="dop_text">Доп. квест-задача</div>
                <div className="dop_ball">100 баллов</div>
              </div>
              <div className="modal-upload_bottom_descr">
                Отправляйтесь в кабинет с принтером. Там познакомься с
                человеком, заведующим принетром. Спроси у него про кодовое слово
                и введи его ниже, чтобы получить дополнительные баллы и обменять
                их на крутой мерч, который не получить обычным способом!
              </div>
              <div className="bottom-form">
                <div className="bottom-input">
                  <input type="text" name="" id="" />
                </div>
                <div className="bottom-button">Проверить</div>
              </div>
              <div className="bottom-button-end">Выполнено</div>
            </div>
          </div>
        );
        break;

      case "hero":
        return (
          <div className="modal-hero modal-upload">
            <div className="modal-hero_top modal-upload_top">
              <div className="modal-hero_title modal-upload_title">
                Что тебя мотивирует
              </div>
              <div className="modal-hero_image">
                <img src={modalHero} alt="" />
              </div>
              <div className="modal-hero_close"></div>
              <div className="modal-hero_descr">Опрос</div>
              <div className="modal-hero_descr_small">
                Несколько варинтов ответа
              </div>
              <div className="modal-hero_checks">
                <div
                  onClick={toggleActive}
                  className="modal-hero_check modal-hero_active"
                >
                  Крутые задачи
                </div>
                <div onClick={toggleActive} className="modal-hero_check">
                  Атмосфера
                </div>
                <div
                  onClick={toggleActive}
                  className="modal-hero_check modal-hero_active"
                >
                  Коллектив
                </div>
                <div onClick={toggleActive} className="modal-hero_check">
                  Материальная мотивация
                </div>
                <div onClick={toggleActive} className="modal-hero_check">
                  Нематериальная мотивация
                </div>
              </div>
            </div>
            <div className="modal-hero_bottom">
              <div className="bottom-form-hero">
                <div className="bottom-input">
                  <input type="text" name="" id="" placeholder="Свой вариант" />
                </div>
                <div className="bottom-button-hero">Сохранить</div>
              </div>
              <div className="bottom-button-end-hero">Выполнено</div>
            </div>
          </div>
        );
        break;

      default:
        return <img src={imgHero} />;
        break;
    }
  }
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box className="modal-container">{getModal(props.task)}</Box>
    </Modal>
  );
}

/*
<h1>{props.task.title}</h1>
        <div className="modal-description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            debitis qui repudiandae blanditiis incidunt facilis ratione corrupti
            deleniti soluta dolores dolorum, at exercitationem facere non
            voluptates magnam aliquam officiis. Sed.
          </p>
        </div>
        <div className="modal-links">
          <Link className="modal-links_link" href="#">
            Document 1
          </Link>
          <Link className="modal-links_link" href="#">
            Document 2
          </Link>
        </div>
*/
