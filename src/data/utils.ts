import { Todos } from "../types/global";

const id = "todo-app-list-items";
const archived_id = "todo-app-archived-list-items";

export const readTodos = (): Todos => {
  const storedTodos = localStorage.getItem(id) || "";
  const todos: Todos = (storedTodos && JSON.parse(storedTodos)) || [];
  return todos;
};

export const storeTodos = (todos: Todos): void => {
  localStorage.setItem(id, JSON.stringify(todos));
};

export const readArchivedTodos = (): Todos => {
  const storedTodos = localStorage.getItem(archived_id) || "";
  const todos: Todos = (storedTodos && JSON.parse(storedTodos)) || [];
  return todos;
};

export const storeArchivedTodos = (todos: Todos): void => {
  localStorage.setItem(archived_id, JSON.stringify(todos));
};
