import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { addTodo } from "@/app/actions";

const TodoForm = () => {
  return (
    <form className="*:not-first:mt-2 min-w-sm" action={addTodo}>
      <Label htmlFor="todo-text" className="sr-only">
        Input with end button
      </Label>
      <div className="flex rounded-md shadow-xs">
        <Input
          id="todo-text"
          name="todoText"
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Enter your todo here..."
          type="text"
          required
        />
        <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
