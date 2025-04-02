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
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DynamicForm from "@/components/form/dynamicForm";
import { useForm } from "react-hook-form";
import invoiceFormFields from "./invoiceFormFields";
import { ScrollArea } from "@/components/ui/scroll-area";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Invoices = () => {
  const form = useForm({
    defaultValues: invoiceFormFields.reduce(
      (p, c) => ({ ...p, [c.name]: "" }),
      {}
    ),
    mode: "all",
  });

  const onSubmit = (value) => {
    console.log(value);
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="aspect-square max-sm:p-0">
                <PlusIcon
                  className="opacity-60 sm:-ms-1"
                  size={16}
                  aria-hidden="true"
                />
                <span className="max-sm:sr-only">Add new</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full !max-w-xl">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[80%]">
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
                <SheetClose asChild>
                  <Button type="submit" form="invoice-create">
                    Save changes
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          {/* <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </main>
    </section>
  );
};

export default Invoices;
