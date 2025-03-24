const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  return rawTodos ? JSON.parse(rawTodos) : [];
};

export const setLocalStorageTodoData = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
