"use client";

import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Checkbox } from "../ui/checkbox";
import { deleteTodo, updateTodo } from "@/app/actions";

type Props = {};

const TodoItem = ({ children, item }: Props) => {
  return (
    <li className="flex items-center gap-4">
      <div>
        <Checkbox
          id="toggleComplete"
          checked={item.isDone}
          onCheckedChange={(isDone) => {
            updateTodo({ ...item, isDone });
          }}
        />
        <label htmlFor="toggleComplete" className="sr-only -z-10">
          Toggle Complete Todo
        </label>
      </div>
      <p className="flex-1 line-clamp-2">{children}</p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteTodo(item.id)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  );
};

export default TodoItem;
