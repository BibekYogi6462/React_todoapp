import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ id, data, checked, onHandleDeleteTodo }) => {
  return (
    <li className={`todo-item ${checked ? "checked" : ""}`}>
      <span>{data}</span>
      {/* <button className="check-btn" onClick={() => onHandleCheckedTodo(id)}>
        <MdCheck />
      </button> */}
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(id)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
