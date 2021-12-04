import { Link, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./TaskModal.css";
import img from "./modal1.png";
import imgHero from "../img/def.png";
import imgHero1 from "../img/modalHero0.jpg";
import imgHero2 from "../img/modalHero1.jpg";
import modalHero from "../img/modal-hero-large.svg";
import { isPropertyDeclaration } from "typescript";

export default function TaskModal(props?: any) {
  console.log(props.task.type);
  function toggleActive(event: any) {
    event.target.classList.toggle("modal-hero_active");
  }
  function getModal(task: any) {
    switch (task.modal) {
      case "adminOffice":
        return (
          <div className="modal-upload">
            <div className="modal-upload_top">
              <div className="modal-upload_title">{task.title}</div>

              <div className="modal-upload_descr">
                Основная задача
                <br />
                Вам необходимо назначить сотруднику встречу онлайн или офлайн.
              </div>
            </div>
            <div className="modal-upload_bottom">
              <div className="modal-upload_dop">
                <div className="dop_text">Доп. квест-задача</div>
              </div>
              <div className="modal-upload_bottom_descr">
                Внимание! У сотрудника будет дополнительное задание - получить
                от вас кодовое слово.
                <br /> Вы должны ему рассказать, что ваш любимый вид спорта -
                ФУТБОЛ
              </div>
              <div className="bottom-button-end">Выполнено</div>
            </div>
          </div>
        );
        break;

      case "adminDone":
        return (
          <div className="modal-upload">
            <div className="modal-upload_top">
              <div className="modal-upload_title">{task.title}</div>
            </div>
            <div className="modal-upload_bottom">
              <div className="modal-upload_dop"></div>
              <p>Задача выполнена</p>
            </div>
          </div>
        );
        break;

      case "upload":
        return (
          <div className="modal-upload">
            <div className="modal-upload_top">
              <div className="modal-upload_title">{task.title}</div>
              <div
                onClick={() => closeModal()}
                className="modal-hero_close close_def"
              ></div>
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
              <div
                onClick={() => closeModal()}
                className="modal-hero_close"
              ></div>
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
              <div className="bottom-button-end-hero">Готово</div>
            </div>
          </div>
        );
        break;

      case "hero1":
        return <img src={imgHero1} />;
        break;

      case "hero2":
        return <img src={imgHero2} />;
        break;

      default:
        return <img src={imgHero} />;
        break;
    }
  }

  const closeModal = () => {
    props.onClose();
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box className="modal-container">{getModal(props.task)}</Box>
    </Modal>
  );
}
