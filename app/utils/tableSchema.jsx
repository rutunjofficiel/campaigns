"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "deliveryStatus",
    header: "Delivery Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "deliveryDate",
    header: "Delivery Date",
  },
  {
    accessorKey: "response",
    header: "Response",
  },
];
