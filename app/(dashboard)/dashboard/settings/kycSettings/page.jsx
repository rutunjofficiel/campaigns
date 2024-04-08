"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { KycSettings, WhatsappSettings } from "@/app/utils/formSchemas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { useState } from "react";
import { Upload } from "lucide-react";
import { MdAttachment } from "react-icons/md";
export default function Page() {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className=" mx-auto  w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <Formik
          // validationSchema={KycSettings}
          initialValues={{
            companyName: "",
            businessPerson: "",
            addressDocument: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2 px-4">
              <Link href="# " className=" ">
                <h1 className="dashboard">KYC Settings</h1>
              </Link>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-1">
                  <label className="text-sm opacity-75" htmlFor="companyName">
                    Company Information
                  </label>
                  <Field
                    className="formikInputField"
                    type="text"
                    name="companyName"
                    id="companyName"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error"
                  >
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col p-1">
                  <label
                    className="text-sm opacity-75"
                    htmlFor="businessPerson"
                  >
                    Business Person
                  </label>
                  <Field
                    className="formikInputField"
                    type="text"
                    name="businessPerson"
                    id="businessPerson"
                  />
                  <ErrorMessage
                    name="businessPerson"
                    component="div"
                    className="error"
                  >
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col ">
                  <label
                    className="text-sm opacity-75"
                    htmlFor="addressDocument"
                  >
                    Address Document
                  </label>
                  <label
                    htmlFor="addressDocument"
                    className="flex w-full cursor-pointer flex-col justify-between rounded-lg bg-[#e9e9e9] p-3 text-sm"
                  >
                    <div className="flex flex-row items-center justify-between ">
                      <span className="opacity-80">
                        Aadhar, PAN or Electricity Bill
                      </span>
                      <MdAttachment
                        size={24}
                        className="my-auto rotate-90 opacity-80"
                      />
                    </div>
                    <div>
                      <span id="block file-name">{fileName}</span>
                    </div>
                  </label>
                  <input
                    type="file"
                    accept=".xlsx,.csv,.xls"
                    className="hidden"
                    id="addressDocument"
                    placeholder="Choose Excel File (Max File Size: 1MB)"
                    onChange={(event) => {
                      setFileName(
                        event.target.files[0]
                          ? event.target.files[0].name
                          : "No file chosen",
                      );
                      setFile(event.target.files[0]);
                      setFieldValue("file", event.target.files[0].name);
                    }}
                  />
                </div>
              </div>
              <CardFooter className="mt-2 px-0">
                <Button className="w-fit rounded-lg" type="submit">
                  Update Settings
                </Button>
              </CardFooter>
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
}
