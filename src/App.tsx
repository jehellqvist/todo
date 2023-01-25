import { useEffect, useState } from "react";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";
import TodoForm from "./components/TodoForm/TodoForm";
import { TodoDraft, Todos } from "./types/global";
import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState<Todos>([]);

  useEffect(() => {
    // TODO: fetch & store todos
  }, []);

  const handleSubmit = (todoDraft: TodoDraft) => {
    setTodos([
      ...todos,
      {
        title: todoDraft.title,
        index: todos.length + 1,
      },
    ]);
  };

  const listItems = todos.map((todo, index) => (
    <ListItem key={index} index={index} title={todo.title}></ListItem>
  ));

  return (
    <div>
      <h1>My very useful, classic, life-changing todo application</h1>

      <TodoForm onSubmit={(todoDraft) => handleSubmit(todoDraft)} />
      <List>{listItems}</List>
    </div>
  );
};

export default App;
