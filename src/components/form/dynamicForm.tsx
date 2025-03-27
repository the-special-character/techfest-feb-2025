import React from "react";
import { Form } from "../ui/form";
import FormInput from "./formInput";
import { cn } from "@/lib/utils";

type Props = {};

const DynamicForm = ({ form, onSubmit, formFields, id, className }: Props) => {
  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-5 min-w-xs sm:min-w-md p-4 grid gap-4", className)}
      >
        {formFields.map(({ component: Component, ...item }) => {
          return <Component key={item.name} control={form.control} {...item} />;
        })}
      </form>
    </Form>
  );
};

export default DynamicForm;
