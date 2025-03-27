import FormInput from "@/components/form/formInput";
import FormRadioGroup from "@/components/form/formRadioGroup";
import FormSelect from "@/components/form/formSelect";

const loginFormFields = [
  {
    component: FormInput,
    name: "name",
    label: "Name",
    placeholder: "elon@musk.com",
    rules: {
      required: {
        value: true,
        message: "Name is mendetory",
      },
    },
    className: "col-span-2"
  },
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
  {
    component: FormSelect,
    name: "age",
    label: "Age",
    placeholder: "Please Select Age",
    options: [
      {
        value: "male",
        text: "Male"
      },
      {
        value: "female",
        text: "Female"
      }
    ],
    rules: {
      required: {
        value: true,
        message: "Age is mendetory",
      },
    },
    className: "col-span-full"
  },
  {
    component: FormRadioGroup,
    name: "status",
    label: "Status",
    options: [
      {
        value: "married",
        text: "Married"
      },
      {
        value: "unmarried",
        text: "Unmarried"
      }
    ],
    rules: {
      required: {
        value: true,
        message: "Status is mendetory",
      },
    },
    className: "col-span-full"
  },
];

export default loginFormFields;
