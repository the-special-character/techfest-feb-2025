import TodoFilter from "@/components/todo/todoFilter";
import TodoForm from "@/components/todo/todoForm";
import TodoList from "@/components/todo/todoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 h-screen">
      <h1 className="text-4xl font-semibold">Todo App</h1>
      <TodoForm />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
      <TodoFilter />
    </main>
  );
}
