"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { WhatsappSettings } from "@/app/utils/formSchemas";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWhatsappSettingsStore } from "../../../../utils/stores";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { create } from "zustand";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { useEffect, useState } from "react";
import { whatsappSettingsColumns } from "../../columns";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { DataTable } from "../../dataTable";
import AddNewWhatsappIdDialog from "@/components/(dashboard)/addNewWhatsappIdDialog";
import { Plus } from "lucide-react";

export default async function Page() {
  const { setWhatsappSettings, whatsappSettings, getWhatsappSettings } =
    useWhatsappSettingsStore();

  useEffect(() => {
    if (whatsappSettings === null) {
      getWhatsappSettings();
    }
    console.log(whatsappSettings);
    // setWhatsappSettings();
  }, []);

  console.log(whatsappSettings);

  return (
    // <div className="tableSectionWrapper">
    //   <SectionHeader
    //     addWhatsappSettings={true}
    //     hideButtons={true}
    //     section="Whatsapp Settings"
    //   />
    //   {whatsappSettings && (
    //     <DataTable columns={whatsappSettingsColumns} data={whatsappSettings} />
    //   )}
    // </div>
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
            {whatsappSettings && (
              <DataTable
                columns={whatsappSettingsColumns}
                data={whatsappSettings}
              />
            )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
