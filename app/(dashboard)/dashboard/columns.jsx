"use client";

import { Badge } from "@/components/ui/badge";
import moment from "moment";
function excelDateToJSDate(excelDate) {
  // Excel epoch
  var excelEpoch = new Date("1899-12-30");

  // Extract the integer and fractional parts
  var integerPart = Math.floor(excelDate);
  var fractionalPart = excelDate - integerPart;

  // Calculate the number of milliseconds in a day
  var millisecondsInDay = 24 * 60 * 60 * 1000;

  // Calculate the time portion in milliseconds
  var timeMilliseconds = Math.round(fractionalPart * millisecondsInDay);

  // Create a new Date object for the base date
  var baseDate = new Date(
    excelEpoch.getTime() + integerPart * millisecondsInDay,
  );

  // Add the time portion to the base date
  baseDate.setMilliseconds(baseDate.getMilliseconds() + timeMilliseconds);
  baseDate = moment(baseDate).format("DD/MM/YYYY");
  return baseDate;
}
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

export const columnsSMSAutomation = [
  {
    accessorKey: "SrNo",
    header: "Sr No.",
  },
  {
    accessorKey: "Date",
    header: "Date",
    cell: ({ row }) => excelDateToJSDate(row.getValue("Date")),
  },
  {
    accessorKey: "Customer Name",
    header: "Customer Name",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "Campaign",
    header: "Campaign Name",
  },
  {
    accessorKey: "Delivery Status",
    header: "Delivery Status",
    cell: ({ row }) =>
      row.getValue("Delivery Status") == "Success" ? (
        <Badge className="bg-green-600 text-white">Success</Badge>
      ) : (
        <Badge className="bg-red-600 text-white">Fail</Badge>
      ),
  },
  {
    accessorKey: "Number",
    header: "Number",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

export const emailSenderList = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "email",
    header: "Email Id",
  },
  {
    accessorKey: "smtpName",
    header: "SMTP Name",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "port",
    header: "Port",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

export const domainList = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "Domain",
    header: "Domain",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

export const smsSenderList = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "smsNumber",
    header: "SMS Number",
  },
  {
    accessorKey: "apiUrl",
    header: "Api Url",
  },
  {
    accessorKey: "apiKeysecretToken",
    header: "Token",
  },
  {
    accessorKey: "apiKey",
    header: "Api Key",
  },
  {
    accessorKey: "accountId",
    header: "Account ID",
  },
  {
    accessorKey: "defaultApi",
    header: "Default API",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

export const whatsappSettingsColumns = [
  {
    accessorKey: "srNo",
    header: "Sr No.",
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "phoneNumberId",
    header: "Phone Number Id",
  },
  {
    accessorKey: "fbManagerId",
    header: "FB Manager Id",
  },

  {
    accessorKey: "accessToken",
    header: "Access Token",
  },
  {
    accessorKey: "whatsappBusinessId",
    header: "Whatsapp Business Id",
  },
  {
    accessorKey: "apiKey",
    header: "API Key",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
