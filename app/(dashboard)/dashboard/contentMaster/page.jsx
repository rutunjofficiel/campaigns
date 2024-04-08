"use client";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="tableSectionWrapper">
      <SectionHeader
        hideButtons={true}
        filterButtons={true}
        section="Content Master"
      />
      <Tabs defaultValue="sms">
        <div className="ml-[68px]  w-[90%] ">
          <TabsList>
            <TabsTrigger value="sms">SMS</TabsTrigger>
            <TabsTrigger value="whatsapp">Whatsapp</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="sms"></TabsContent>
      </Tabs>
    </div>
  );
}
