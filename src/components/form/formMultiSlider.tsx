import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Slider } from "../ui/slider";

type Props = {};

const FormMultiSlider = ({
  control,
  name,
  rules,
  label,
  className,
  hideMessage,
  ...props
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Slider
              onBlur={field.onBlur}
              onValueChange={(value) => {
                const event = {
                  target: {
                    value,
                  },
                };
                field.onChange(event);
              }}
              {...props}
            />
          </FormControl>
          {!hideMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormMultiSlider;
