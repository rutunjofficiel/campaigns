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
      customer: "Jonty Rhodes",
      mobile: 9972378787,
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
    <div className="tableSectionWrapper">
      <SectionHeader section="Email Automation" />
      <DataTable columns={SMSAutomationColumns} data={data} />
    </div>
  );
}
