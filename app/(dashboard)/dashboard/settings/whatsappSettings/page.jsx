"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSettingsStore } from "../../../../utils/stores";
import { Separator } from "@/components/ui/separator";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { useEffect, useState } from "react";
import { whatsappSettingsColumns } from "../../columns";
import { DataTable } from "../../dataTable";
import AddNewWhatsappIdDialog from "@/components/(dashboard)/addNewWhatsappIdDialog";
import { Plus } from "lucide-react";

export default async function Page() {
  const { settings, getSettings } = useSettingsStore();

  useEffect(() => {
    if (settings === null) {
      getSettings();
    }
  }, []);

  return (
    <div className="mx-auto w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row justify-between">
            <h1 className="dashboard">Whatsapp Settings</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus /> Whatsapp
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New Whatsapp account</DialogTitle>
                </DialogHeader>
                <AddNewWhatsappIdDialog />
              </DialogContent>
            </Dialog>
          </div>
          <Separator />
          <CardContent className=" ">
            {settings && (
              <DataTable columns={whatsappSettingsColumns} data={settings} />
            )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
