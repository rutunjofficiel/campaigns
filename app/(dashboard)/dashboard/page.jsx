"use client";
import { useRouter } from "next/navigation";
import { DataTable } from "./dataTable";
import { SMSAutomationColumns } from "./columns";
import SectionHeader from "@/components/(dashboard)/sectionHeader";

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
      customer: "Adil Seth",
      mobile: 9978878787,
      campaign: "Whatssapp Campaign",
      deliveryStatus: "Success",
      deliveryDate: "25 May 2024",
      response: "Success",
    },
  ];
}

export default async function Page() {
  const router = useRouter();
  const data = await getData();

  if (typeof window !== "undefined") {
    let d = JSON.parse(window.localStorage.getItem("userInfo"));
    // console.log("d", d);
    if (d === null) {
      // router.push("/signIn");
    }
  }

  return (
    <div className="tableSectionWrapper">
      <SectionHeader section="Dashboard" />
      <DataTable columns={SMSAutomationColumns} data={data} />
    </div>
  );
}
