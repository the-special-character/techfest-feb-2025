import FormInput from "@/components/form/formInput";

const loginFormFields = [
  {
    component: FormInput,
    name: "email",
    label: "Email Address",
    placeholder: "elon@musk.com",
    rules: {
      required: {
        value: true,
        message: "Email is mendetory",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter valid email address",
      },
    },
  },
  {
    component: FormInput,
    name: "password",
    label: "Password",
    placeholder: "Enter strong password",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password is mendetory",
      },
    },
  },
];

export default loginFormFields;
