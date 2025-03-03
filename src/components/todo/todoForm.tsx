"use client"

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { addTodo } from "@/app/actions";

const TodoForm = () => {
  const form = useForm();

  const onSubmit = (value) => addTodo(value)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  className="flex flex-row">
        <FormField
          control={form.control}
          name="todoItem"
          rules={{
            required: {
                message: "Todo Text is mendatory",
                value: true
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Todo Text</FormLabel>
              <FormControl>
                <Input placeholder="Enter your todo Here.." className="rounded-r-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="rounded-l-none">Add Todo</Button>
      </form>
    </Form>
  );
};

export default TodoForm;
