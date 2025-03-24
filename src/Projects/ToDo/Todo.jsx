import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue.content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === inputValue.content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  const handleDeleteTodo = (id) => {
    setTask(task.filter((curTask) => curTask.id !== id));
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (id) => {
    setTask(
      task.map((curTask) =>
        curTask.id === id ? { ...curTask, checked: !curTask.checked } : curTask
      )
    );
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <TodoList
              key={curTask.id}
              id={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};

export default Todo; // ✅ Make sure this line is added!
