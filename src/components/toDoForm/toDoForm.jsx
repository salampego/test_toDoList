import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../redux";

import s from "./toDoForm.module.css";

export const ToDoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [emptyTitle, setEmptyTitle] = useState(false);

  const dispatch = useDispatch();

  const todo = useSelector((s) => s.todo);
  const inputCorrect = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value.trim() === "") {
      setEmptyTitle(true);
      return;
    }

    dispatch(
      addToDo({ title, description, id: todo.length + 1, status: false })
    );

    setEmptyTitle(false);
    setTitle("");
    setDescription("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.formField}>
        <label htmlFor="title" className={s.formLabel}>
          <span className={s.labelText}>Title</span>
        </label>
        <input
          placeholder="Enter title"
          name="title"
          id="title"
          className={`${emptyTitle ? s.borderRed : ""}`}
          onChange={inputCorrect}
          value={title}
        />
        {emptyTitle ? (
          <span style={{ color: "red" }}>This field is empty</span>
        ) : null}
      </div>

      <div className={s.formField}>
        <label htmlFor="description" className={s.formLabel}>
          <span className={s.labelText}>Description</span>
        </label>
        <input
          placeholder="Enter description"
          className={s.formInput}
          id="description"
          name="description"
          onChange={inputCorrect}
          value={description}
        ></input>
      </div>

      <div>
        <button type="submit" className={s.formButton}>
          Create
        </button>
      </div>
    </form>
  );
};
