export type Todos = Todo[];

export type Todo = {
  title: string;
  index?: number;
  description?: string;
};

export type TodoDraft = {
  title: string;
  description?: string;
};
