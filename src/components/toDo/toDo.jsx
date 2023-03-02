import { useDispatch } from "react-redux";
import { toggleCompleted } from "../../redux";

import s from "./toDo.module.css";

export const ToDo = ({ id, title, description, status, openModal }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleCompleted(id));
  };
  return (
    <tr className={s.item}>
      <td
        className={s.td}
        onClick={() => openModal(id, title, description, status)}
      >
        {id}
      </td>
      <td
        className={s.td}
        onClick={() => openModal(id, title, description, status)}
      >
        {title}
      </td>
      <td
        className={s.td}
        onClick={() => openModal(id, title, description, status)}
      >
        {description.slice()}
      </td>
      <td className={s.td}>
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={status}
          onChange={() => handleToggle(id)}
        />
      </td>
    </tr>
  );
};
