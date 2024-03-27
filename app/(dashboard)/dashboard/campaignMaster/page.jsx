import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { DataTable } from "../dataTable";
import { CampaignMasterColumns, SMSAutomationColumns } from "../columns";

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
      customer: "YYDS Seth",
      mobile: 9978838787,
      campaign: "Whatssapp Campaign",
      deliveryStatus: "Success",
      deliveryDate: "25 May 2024",
      response: "Success",
    },
  ];
}

async function getDataCampaignMaster() {
  return [
    {
      srNo: 1,
      date: "25 May 2024",
      customer: "DD Seth",
      mobile: 9978878787,
      campaignName: "Whatssapp Campaign",
      campaignStatus: "Success",
    },
    {
      srNo: 2,
      date: "25 May 2024",
      customer: "YYD Seth",
      mobile: 9978858787,
      campaignName: "Email Campaign",
      campaignStatus: "Success",
    },
  ];
}

export default async function Page() {
  const data = await getData();
  const CampaignMasterData = await getDataCampaignMaster();
  return (
    <div>
      <Tabs defaultValue="sms">
        <div>
          <SectionHeader section="Campaign Master" />
          <TabsList className="ml-14">
            <TabsTrigger value="sms">SMS</TabsTrigger>
            <TabsTrigger value="whatsapp">Whatsapp</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="sms">
          <DataTable
            columns={CampaignMasterColumns}
            data={CampaignMasterData}
          />
        </TabsContent>
        <TabsContent value="whatsapp">
          <DataTable columns={SMSAutomationColumns} data={data} />
        </TabsContent>
        <TabsContent value="email">
          <DataTable columns={SMSAutomationColumns} data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
