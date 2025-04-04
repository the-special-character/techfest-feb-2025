import FormDatePicker from "@/components/form/formDatePicker";
import FormFieldArray from "@/components/form/formFieldArray";
import FormGroup from "@/components/form/formGroup";
import FormInput from "@/components/form/formInput";
import FormSelect from "@/components/form/formSelect";
import FormTextArea from "@/components/form/formTextArea";

const invoiceFormFields = [
  {
    component: FormGroup,
    name: "billFrom",
    legend: "Bill From",
    className: "grid-cols-12",
    hideMessage: true,
    defaultValue: {
      billFrom: {
        streetAddress: "",
        city: "",
        postalCode: "",
        country: "",
      }
    },
    fieldArray: [
      {
        component: FormInput,
        name: "streetAddress",
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
        name: "city",
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
        name: "postalCode",
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
        name: "country",
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
    ],
  },
  {
    component: FormGroup,
    name: "billTo",
    legend: "Bill To",
    className: "grid-cols-12",
    hideMessage: true,
    defaultValue: {
      billTo: {
        clientName: "",
        clientEmail: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        country: "",
      }
    },
    fieldArray: [
      {
        component: FormInput,
        name: "clientName",
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
        name: "clientEmail",
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
        name: "streetAddress",
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
        name: "city",
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
        name: "postalCode",
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
        name: "country",
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
    ],
  },
  {
    component: FormDatePicker,
    name: "invoiceDate",
    defaultValue: new Date(),
    label: "Invoice Date",
    placeholder: "Invoice Date",
    rules: {
      required: {
        value: true,
        message: "Invoice Date is mendetory",
      },
    },
    hideMessage: true,
    className: "col-span-6",
  },
  {
    component: FormSelect,
    name: "paymentTerms",
    defaultValue: "",
    label: "Payment Terms",
    placeholder: "Select Payment Terms",
    rules: {
      required: {
        value: true,
        message: "Payment Terms is mendetory",
      },
    },
    hideMessage: true,
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
    defaultValue: "",
    label: "Project Description",
    placeholder: "Project Description",
    rules: {
      required: {
        value: true,
        message: "Project Description is mendetory",
      },
    },
    hideMessage: true,
    className: "col-span-full",
  },
  {
    component: FormFieldArray,
    name: "productItems",
    defaultValue: [],
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
    hideMessage: true,
    className: "col-span-full",
  },
];

export default invoiceFormFields;
