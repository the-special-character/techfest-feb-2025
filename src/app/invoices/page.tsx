"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DynamicForm from "@/components/form/dynamicForm";
import { useForm } from "react-hook-form";
import invoiceFormFields from "./invoiceFormFields";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format, addDays } from "date-fns";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

const Invoices = () => {
  const [values, setValues] = useState(undefined);
  const form = useForm({
    defaultValues: invoiceFormFields.reduce(
      (p, c) => ({ ...p, [c.name]: c.defaultValue }),
      {}
    ),
    values,
    mode: "all",
  });
  const [invoices, setinvoices] = useState([]);
  const [open, setOpen] = useState(false);

  const loadInvoices = async () => {
    try {
      const res = await fetch("http://localhost:3000/invoices");
      const json = await res.json();
      setinvoices(json);
    } catch (error) {}
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const onSubmit = async (value) => {
    try {
      if (value.id) {
        const res = await fetch(`http://localhost:3000/invoices/${value.id}`, {
          method: "PUT",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const json = await res.json();
        setinvoices((val) => {
          const index = val.findIndex((x) => x.id === value.id);
          return [...val.slice(0, index), json, ...val.slice(index + 1)];
        });
      } else {
        const res = await fetch("http://localhost:3000/invoices", {
          method: "POST",
          body: JSON.stringify({ ...value, status: "pending" }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const json = await res.json();
        setinvoices((val) => [json, ...val]);
      }
      setOpen(false);
    } catch (error) {}
  };

  return (
    <section className="container mx-auto flex flex-col gap-10">
      <header className="flex justify-between flex-wrap">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter By Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter By Status</SelectLabel>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Sheet
            open={open}
            onOpenChange={(value) => {
              console.log({ value });
              setOpen(value);
              setValues(
                invoiceFormFields.reduce(
                  (p, c) => ({ ...p, [c.name]: c.defaultValue }),
                  {}
                )
              );
            }}
          >
            <Button
              variant="outline"
              className="aspect-square max-sm:p-0"
              onClick={() => setOpen(true)}
            >
              <PlusIcon
                className="opacity-60 sm:-ms-1"
                size={16}
                aria-hidden="true"
              />
              <span className="max-sm:sr-only">Add new</span>
            </Button>
            <SheetContent className="w-full !max-w-xl">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[75%]">
                <DynamicForm
                  form={form}
                  onSubmit={onSubmit}
                  formFields={invoiceFormFields}
                  id="invoice-create"
                  className="grid-cols-12"
                />
              </ScrollArea>
              <SheetFooter className="flex-row justify-end">
                <SheetClose asChild>
                  <Button type="reset" variant="secondary">
                    Cancel
                  </Button>
                </SheetClose>
                <Button type="submit" form="invoice-create">
                  Save changes
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>
        <Table>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                role="button"
                onClick={() => {
                  setOpen(true);
                  setValues(invoice);
                }}
              >
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{`Due ${format(
                  addDays(
                    new Date(invoice.invoiceDate),
                    Number(invoice.paymentTerms)
                  ),
                  "dd MMM yyyy"
                )}`}</TableCell>
                <TableCell>{invoice.billTo.clientName}</TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat("en-IN", {
                    currency: "INR",
                    style: "currency",
                  }).format(
                    invoice.productItems.reduce(
                      (p, c) => p + Number(c.quantity) * Number(c.price),
                      0
                    )
                  )}
                </TableCell>
                <TableCell className="text-right">{invoice.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </section>
  );
};

export default Invoices;
