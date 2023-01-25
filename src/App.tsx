import "./App.scss";

import { Todo, TodoDraft, Todos } from "./types/global";
import {
  readArchivedTodos,
  readTodos,
  storeArchivedTodos,
  storeTodos,
} from "./data/utils";
import { useEffect, useState } from "react";

import List from "./Components/List/List";
import ListItem from "./Components/ListItem/ListItem";
import TodoForm from "./Components/TodoForm/TodoForm";

const App = () => {
  const [todos, setTodos] = useState<Todos>([]);
  const [archivedTodos, setArchivedTodos] = useState<Todos>([]);

  useEffect(() => {
    // fetch stored todos on initial render
    const initialTodos = readTodos();
    setTodos(initialTodos);

    const initialArchivedTodos = readArchivedTodos();
    setArchivedTodos(initialArchivedTodos);
  }, []);

  useEffect(() => {
    // store todos on update
    storeTodos(todos);
  }, [todos]);

  useEffect(() => {
    // store archived todos on update
    storeArchivedTodos(archivedTodos);
  }, [archivedTodos]);

  const handleSubmit = (todoDraft: TodoDraft) => {
    setTodos([
      ...todos,
      {
        title: todoDraft.title,
        createdTime: Date.now(),
      },
    ]);
  };

  const handleArchive = (todoToArchive: Todo) => {
    const updatedTodos = todos.filter(
      (todo) => todoToArchive.createdTime !== todo.createdTime
    );

    setTodos(updatedTodos);
    setArchivedTodos([...archivedTodos, todoToArchive]);
  };

  const handleDelete = (todoToDelete: Todo) => {
    const updatedTodos = todos.filter(
      (todo) => todoToDelete.createdTime !== todo.createdTime
    );
    const updatedArchivedTodos = archivedTodos.filter(
      (todo) => todoToDelete.createdTime !== todo.createdTime
    );

    setTodos(updatedTodos);
    setArchivedTodos(updatedArchivedTodos);
  };

  const activeListItems = todos.map((todo) => (
    <ListItem
      name="active_todos"
      key={todo.createdTime}
      id={todo.createdTime}
      title={todo.title}
      onArchive={() => handleArchive(todo)}
      onDelete={() => handleDelete(todo)}
    ></ListItem>
  ));

  const archivedListItems = archivedTodos.map((todo) => (
    <ListItem
      name="archived_todos"
      key={todo.createdTime}
      id={todo.createdTime}
      title={todo.title}
      disabled={true}
      onArchive={() => handleArchive(todo)}
      onDelete={() => handleDelete(todo)}
    ></ListItem>
  ));

  return (
    <div className="todo-container">
      <header>
        <h1>My very useful, classic, life-changing todo application</h1>
      </header>
      <main>
        <TodoForm onSubmit={(todoDraft) => handleSubmit(todoDraft)} />
        <h2>Todo</h2>
        <List>{activeListItems}</List>
        <h2>Archived</h2>
        <List archived>{archivedListItems}</List>
      </main>
    </div>
  );
};

export default App;
