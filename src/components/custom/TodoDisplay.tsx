import TodoStruct from "./TodoStruct";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { todo } from "@/redux/slices/todoSlice";

export function getLocalTodos(): todo[] | null {
  const todolist = localStorage.getItem("tasks");
  if (todolist) {
    return JSON.parse(todolist);
  } else {
    return null;
  }
}

const TodoDisplay = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="mt-10">
      {todos && todos.map((todo) => <TodoStruct todo={todo} key={todo.id} />)}
    </div>
  );
};

export default TodoDisplay;
