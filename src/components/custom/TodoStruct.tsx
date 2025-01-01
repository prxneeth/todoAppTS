import { Checkbox } from "../ui/checkbox";
import { Delete, Pencil, Save } from "lucide-react";
import { todo } from "@/redux/slices/todoSlice";
import { deleteTodo } from "@/redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import { completeTodo } from "@/redux/slices/todoSlice";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { updateTodo } from "@/redux/slices/todoSlice";

const TodoStruct = ({ todo }: { todo: todo }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");

  const { toast } = useToast();
  const dispatch = useDispatch();

  const toggleComplete = (id: string) => {
    if (todo.completed) return;
    dispatch(completeTodo(id));
    toast({
      title: "todo completed",
      description: `you've finished doing ${todo.title} `,
      variant: "default",
    });
  };

  const handleEdit = (id: string) => {
    setIsEdit(true);
    if (editTodo.trim() === "") {
      toast({
        title: "invalid",
        variant: "destructive",
      });
      handleEdit(id);
    } else {
      dispatch(updateTodo({ id, title: editTodo, completed: false }));
      toast({
        title: "successfully edited",
        variant: "success",
      });
      setIsEdit(false);
    }
  };

  return (
    <div className="flex mt-4 justify-between  p-1 border-b-2  dark:border-white">
      <div className="flex items-center gap-2">
        <Checkbox
          onClick={() => toggleComplete(todo.id)}
          checked={todo.completed}
        />

        <h3
          className={`font-semibold outline-none capitalize ${
            todo.completed ? "text-green-600 line-through italic text-sm" : ""
          } ${isEdit && "font-extralight italic text-sm"}`}
          contentEditable={isEdit}
          onInput={(e) => setEditTodo(e.currentTarget.innerText)}
        >
          {todo.title}
        </h3>

        {/* {isEdit ? (
          <input
            value={todo.title}
            onChange={(e) => setEditTodo(e.target.value)}
            className=" focus:outline-none "
          />
        ) : (
          <h3
            className={`font-semibold capitalize ${
              todo.completed ? "text-green-600 line-through italic text-sm" : ""
            }`}
          >
            {todo.title}
          </h3>
        )} */}
      </div>

      {todo.completed ? null : (
        <div className="flex gap-2 items-center">
          {isEdit ? (
            <Save
              size={20}
              cursor="pointer"
              onClick={() => handleEdit(todo.id)}
            />
          ) : (
            <>
              {" "}
              <Pencil
                size={20}
                cursor="pointer"
                onClick={() => setIsEdit(true)}
              />
              <Delete
                size={20}
                cursor="pointer"
                onClick={() => dispatch(deleteTodo(todo.id))}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoStruct;
