import React from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

const FormFieldArray = ({ control, name, fieldArray, className }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <ul className={cn("flex flex-col gap-4",className)}>
      {fields.map((item, index) => (
        <li key={item.id} className="flex items-end gap-4">
          {fieldArray.map(({ component: Component, name: itemName, ...item }) => {
            return <Component key={item.name} control={control} name={`${name}.${index}.${itemName}`} {...item} />;
          })}
          <Button size="icon" type="button" onClick={() => remove(index)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
      <Button type="button" className="w-full" onClick={() => {
        append(fieldArray.reduce((p, c) => ({ ...p, [c.name]: "" }), {}))
      }}>Add Item</Button>
    </ul>
  );
};

export default FormFieldArray;
