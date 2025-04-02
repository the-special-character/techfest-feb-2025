import FormDatePicker from "@/components/form/formDatePicker";
import FormFieldArray from "@/components/form/formFieldArray";
import FormInput from "@/components/form/formInput";
import FormSelect from "@/components/form/formSelect";
import FormTextArea from "@/components/form/formTextArea";

const invoiceFormFields = [
  {
    component: FormInput,
    name: "billFrom.streetAddress",
    label: "Street Address",
    placeholder: "Street Address",
    rules: {
      required: {
        value: true,
        message: "Street Address is mendetory",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "billFrom.city",
    label: "City",
    placeholder: "City",
    rules: {
      required: {
        value: true,
        message: "City is mendetory",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "billFrom.postalCode",
    label: "Postal Code",
    placeholder: "Postal Code",
    rules: {
      required: {
        value: true,
        message: "Postal Code is mendetory",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "billFrom.country",
    label: "Country",
    placeholder: "Country",
    rules: {
      required: {
        value: true,
        message: "Country is mendetory",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "billTo.clientName",
    label: "Client's Name",
    placeholder: "Client's Name",
    rules: {
      required: {
        value: true,
        message: "Client's Name is mendetory",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "billTo.clientEmail",
    label: "Client's Email",
    placeholder: "Client's Email",
    rules: {
      required: {
        value: true,
        message: "Client's Email is mendetory",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "billTo.streetAddress",
    label: "Street Address",
    placeholder: "Street Address",
    rules: {
      required: {
        value: true,
        message: "Street Address is mendetory",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "billTo.city",
    label: "City",
    placeholder: "City",
    rules: {
      required: {
        value: true,
        message: "City is mendetory",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "billTo.postalCode",
    label: "Postal Code",
    placeholder: "Postal Code",
    rules: {
      required: {
        value: true,
        message: "Postal Code is mendetory",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "billTo.country",
    label: "Country",
    placeholder: "Country",
    rules: {
      required: {
        value: true,
        message: "Country is mendetory",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormDatePicker,
    name: "invoiceDate",
    label: "Invoice Date",
    placeholder: "Invoice Date",
    rules: {
      required: {
        value: true,
        message: "Invoice Date is mendetory",
      },
    },
    className: "col-span-6",
  },
  {
    component: FormSelect,
    name: "paymentTerms",
    label: "Payment Terms",
    placeholder: "Select Payment Terms",
    rules: {
      required: {
        value: true,
        message: "Payment Terms is mendetory",
      },
    },
    options: [
      {
        value: "15days",
        text: "Next 15 Days",
      },
      {
        value: "30days",
        text: "Next 30 Days",
      },
      {
        value: "45days",
        text: "Next 45 Days",
      },
    ],
    className: "col-span-6",
  },
  {
    component: FormTextArea,
    name: "projectDescription",
    label: "Project Description",
    placeholder: "Project Description",
    rules: {
      required: {
        value: true,
        message: "Project Description is mendetory",
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
            message: "Name is mendetory",
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
            message: "Qty is mendetory",
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
    className:"col-span-full",
  },
];

export default invoiceFormFields;
