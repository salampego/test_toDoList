import { useState } from "react";
import { useSelector } from "react-redux";

import { ToDo } from "../toDo/toDo";
import { Modal } from "../modal/modal";

import s from "./toDoList.module.css";

export const ToDoList = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const todo = useSelector((s) => s.todo);

  const openModal = (id, title, description, status) => {
    setShowModal(true);
    setId(id);
    setTitle(title);
    setDescription(description);
    setStatus(status);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.th}>ID</th>
            <th className={s.th}>TITLE</th>
            <th className={s.th}>DESCRIPTION</th>
            <th className={s.th}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todo.map(({ id, title, description, status }) => (
            <ToDo
              key={id}
              id={id}
              title={title}
              description={description}
              status={status}
              openModal={openModal}
              showModal={showModal}
              closeModal={closeModal}
            />
          ))}
        </tbody>
      </table>

      {showModal ? (
        <Modal
          closeModal={closeModal}
          id={id}
          title={title}
          description={description}
          status={status}
        />
      ) : null}
    </>
  );
};
