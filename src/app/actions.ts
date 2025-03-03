"use server";

import { revalidateTag } from "next/cache";

export async function addTodo(data) {
  const res = await fetch("http://localhost:3000/todoList", {
    method: "POST",
    body: JSON.stringify({ ...data, isDone: false }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await res.json();
  if (!res.ok) {
    return { message: json };
  }
  revalidateTag("todo")
}
