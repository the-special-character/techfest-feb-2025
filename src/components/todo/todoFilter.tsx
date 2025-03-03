import React from "react";
import { Button } from "../ui/button";

const TodoFilter = () => {
  return (
    <div className="w-full flex">
      <Button className="flex-1 rounded-none">All</Button>
      <Button className="flex-1 rounded-none">Pending</Button>
      <Button className="flex-1 rounded-none">Completed</Button>
    </div>
  );
};

export default TodoFilter;
