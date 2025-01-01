import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { addTodo } from "@/redux/slices/todoSlice";
import { useToast } from "@/hooks/use-toast";

const InputField = () => {
  const [todoIn, setTodoIn] = useState<string>("");
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoIn(e.target.value);
  };

  const addTodoo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (todoIn.trim() === "") {
      toast({
        title: "enter a valid todo",
        variant: "destructive",
      });
    } else {
      dispatch(addTodo({ id: id, title: todoIn, completed: false }));
      setTodoIn("");
    }
  };

  return (
    <form className="flex mt-20 gap-3 " onSubmit={addTodoo}>
      <Input
        type="text"
        name="todo"
        value={todoIn}
        placeholder="enter a todo"
        onChange={handleTodo}
        className="dark:border-white"
      />
      <Button>Add Todo</Button>
    </form>
  );
};

export default InputField;
