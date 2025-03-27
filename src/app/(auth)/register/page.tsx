"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import DynamicForm from "@/components/form/dynamicForm";
import formFields from "./registerFormFields";

const Register = () => {
  const form = useForm({
    defaultValues: formFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {}),
    mode: "all",
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center">
      <DynamicForm
        form={form}
        onSubmit={onSubmit}
        formFields={formFields}
        id="login-form"
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />
      <Button className="w-full" type="submit" form="login-form">
        Sign in
      </Button>
    </div>
  );
};

export default Register;
