import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Home() {
  const res = await fetch("http://localhost:3000/todoList");
  const json = await res.json();

  return (
    <main className="flex flex-col items-center gap-10 h-screen">
      <h1 className="text-4xl font-semibold">Todo App</h1>
      <form className="flex flex-row">
        <div>
          <Label htmlFor="todo-text" className="sr-only">
            Simple input
          </Label>
          <Input id="todo-text" required className="rounded-r-none" />
        </div>
        <Button className="rounded-l-none">Add Todo</Button>
      </form>
      <ScrollArea className="w-full flex-1">
        <div className="flex items-center gap-4 m-4">
          <div className="flex items-center gap-2">
            <Checkbox id="todo-isdone" />
            <Label htmlFor="todo-isdone" className="sr-only">Toggle Complete Todo</Label>
          </div>
          <p className="flex-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nihil quas tempora ipsum eos totam voluptates quibusdam voluptate est.</p>
          <Button>Delete</Button>
        </div>
        <div className="flex items-center gap-4 m-4">
          <div className="flex items-center gap-2">
            <Checkbox id="todo-isdone" />
            <Label htmlFor="todo-isdone" className="sr-only">Toggle Complete Todo</Label>
          </div>
          <p className="flex-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nihil quas tempora ipsum eos totam voluptates quibusdam voluptate est.</p>
          <Button>Delete</Button>
        </div>
        <div className="flex items-center gap-4 m-4">
          <div className="flex items-center gap-2">
            <Checkbox id="todo-isdone" />
            <Label htmlFor="todo-isdone" className="sr-only">Toggle Complete Todo</Label>
          </div>
          <p className="flex-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nihil quas tempora ipsum eos totam voluptates quibusdam voluptate est.</p>
          <Button>Delete</Button>
        </div>
        <div className="flex items-center gap-4 m-4">
          <div className="flex items-center gap-2">
            <Checkbox id="todo-isdone" />
            <Label htmlFor="todo-isdone" className="sr-only">Toggle Complete Todo</Label>
          </div>
          <p className="flex-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nihil quas tempora ipsum eos totam voluptates quibusdam voluptate est.</p>
          <Button>Delete</Button>
        </div>
      </ScrollArea>
      <div className="w-full flex">
        <Button className="flex-1 rounded-none">All</Button>
        <Button className="flex-1 rounded-none">Pending</Button>
        <Button className="flex-1 rounded-none">Completed</Button>
      </div>
    </main>
  );
}
