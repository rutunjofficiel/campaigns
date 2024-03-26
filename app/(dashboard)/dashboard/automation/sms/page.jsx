import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { DataTable } from "../../dataTable";
import { SMSAutomationColumns } from "../../columns";

async function getData() {
  return [
    {
      srNo: 1,
      date: "25 May 2024",
      customer: "DD Seth",
      mobile: 9978878787,
      campaign: "Whatssapp Campaign",
      deliveryStatus: "Success",
      deliveryDate: "25 May 2024",
      response: "Fail",
    },
    {
      srNo: 2,
      date: "25 May 2024",
      campaign: "Whatssapp Campaign",
      deliveryStatus: "Success",
      deliveryDate: "25 May 2024",
      response: "Success",
    },
  ];
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="mx-auto flex w-full flex-col gap-8 py-10">
      <SectionHeader section="SMS Automation" />
      <DataTable columns={SMSAutomationColumns} data={data} />
    </div>
  );
}
