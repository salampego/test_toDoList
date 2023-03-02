import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted } from "../../redux";

import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ closeModal, id, title, description, status }) => {
  const isChecked = useSelector((s) => s.todo[id - 1].status);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(id));
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <div className={s.block}>
          <div className={s.title}>
            <b>{title}</b>
          </div>
          <b>Description:</b>
          <div className={s.description}>
            <p>{description}</p>
          </div>
          <div>
            <label htmlFor="status">Status :</label>
            <input
              type="checkbox"
              name="status"
              id="status"
              checked={isChecked}
              onChange={() => handleToggle()}
            />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
