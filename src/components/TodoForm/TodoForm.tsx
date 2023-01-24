import { useState } from "react";
import { TodoDraft } from "../../types/global";

type TodoFormProps = {
  onSubmit: (todo: TodoDraft) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [todo, setTodo] = useState<TodoDraft>({ title: "" });

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onSubmit(todo);
  };
  return (
    <form>
      <input
        name="title"
        onChange={(e) => setTodo({ title: e.target.value })}
        type="text"
        value={todo.title}
        placeholder="Add todo"
      />
      <button type="submit" onClick={handleSubmit}>
        Add +
      </button>
    </form>
  );
};

export default TodoForm;
