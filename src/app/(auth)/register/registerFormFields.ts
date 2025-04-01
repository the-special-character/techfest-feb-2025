import FormFieldArray from "@/components/form/formFieldArray";
import FormInput from "@/components/form/formInput";
import FormMultiSlider from "@/components/form/formMultiSlider";
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
    className: "col-span-2",
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
    name: "gender",
    label: "Gender",
    placeholder: "Please Select Age",
    options: [
      {
        value: "male",
        text: "Male",
      },
      {
        value: "female",
        text: "Female",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Age is mendetory",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormMultiSlider,
    name: "age",
    label: "Age",
    defaultValue:[25,50],
    max:100,
    min: 0,
    step:1
  },
  {
    component: FormRadioGroup,
    name: "status",
    label: "Status",
    options: [
      {
        value: "married",
        text: "Married",
      },
      {
        value: "unmarried",
        text: "Unmarried",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Status is mendetory",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormFieldArray,
    name: "productItems",
    fieldArray: [
      {
        component: FormInput,
        name: "itemName",
        label: "Item Name",
        placeholder: "Item Name",
        rules: {
          required: {
            value: true,
            message: "Item Name is mendetory",
          },
        },
        className: "w-full",
      },
      {
        component: FormInput,
        name: "quantity",
        label: "Qty",
        placeholder: "Quantity",
        rules: {
          required: {
            value: true,
            message: "Quantity is mendetory",
          },
        },
        className: "w-full",
      },
      {
        component: FormInput,
        name: "price",
        label: "Price",
        placeholder: "Price",
        rules: {
          required: {
            value: true,
            message: "Price is mendetory",
          },
        },
        className: "w-full",
      },
    ],
  },
];

export default loginFormFields;
