import "./TodoForm.scss";

import Button from "../Button/Button";
import { TodoDraft } from "../../types/global";
import { useState } from "react";

type TodoFormProps = {
  onSubmit: (todo: TodoDraft) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [todo, setTodo] = useState<TodoDraft>({ title: "" });

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setTodo({ title: "" });
    onSubmit(todo);
  };

  return (
    <form className="todo-form">
      <input
        name="title"
        onChange={(e) => setTodo({ title: e.target.value })}
        type="text"
        value={todo.title}
        placeholder="Add todo"
      />

      <Button type="submit" onClick={handleSubmit}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
