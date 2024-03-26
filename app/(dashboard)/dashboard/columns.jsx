"use client";

import { Badge } from "@/components/ui/badge";

// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const SMSAutomationColumns = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "campaign",
    header: "Campaign",
  },
  {
    accessorKey: "deliveryStatus",
    header: "Delivery Status",
  },
  {
    accessorKey: "deliveryDate",
    header: "Delivery Date",
  },
  {
    accessorKey: "response",
    header: "Response",
    cell: ({ row }) =>
      row.getValue("response") === "Success" ? (
        <Badge className="bg-green-600 text-white">Success</Badge>
      ) : (
        <Badge className="bg-red-600 text-white">Fail</Badge>
      ),
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

export const CampaignMasterColumns = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "campaignName",
    header: "Campaign Name",
  },
  {
    accessorKey: "campaignStatus",
    header: "Campaign Status",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
