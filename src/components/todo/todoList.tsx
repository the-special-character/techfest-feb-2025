import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const TodoList = async () => {
  const res = await fetch("http://localhost:3000/todoList", {
    next: { tags: ["todo"] },
  });
  const json = await res.json();

  return (
    <ScrollArea className="w-full flex-1">
      {json.map((item) => {
        return (
          <div key={item.id} className="flex items-center gap-4 m-4">
            <div className="flex items-center gap-2">
              <Checkbox id="todo-isdone" />
              <Label htmlFor="todo-isdone" className="sr-only">
                Toggle Complete Todo
              </Label>
            </div>
            <p className="flex-1">{item.todoItem}</p>
            <Button>Delete</Button>
          </div>
        );
      })}
    </ScrollArea>
  );
};

export default TodoList;
