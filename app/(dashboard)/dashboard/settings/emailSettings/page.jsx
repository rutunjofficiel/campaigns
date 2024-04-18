"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { EmailSettings, WhatsappSettings } from "@/app/utils/formSchemas";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { useEffect, useState } from "react";
import { DataTable } from "../../dataTable";
import { emailSenderList } from "../../columns";

export default function Page() {
  const data = [
    {
      srNo: 1,
      email: "tulsi@officiel.com",
      smtpName: "yahoo",
      password: "Test@222",
      port: 8000,
    },
    {
      srNo: 2,
      email: "rutunj@officiel.com",
      smtpName: "gmail",
      password: "Test@222",
      port: 8000,
    },
  ];
  const [open, setOpen] = useState(false);
  const [newEmail, setNewEmail] = useState({});
  const [emailList, setEmailList] = useState(data);
  return (
    <div className="mx-auto w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row justify-between">
            <h1 className="dashboard">Email Settings</h1>
            <Dialog open={open}>
              <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant="outline">
                  Add new email
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Email</DialogTitle>
                </DialogHeader>
                <Formik
                  validationSchema={EmailSettings}
                  initialValues={{
                    email: "",
                    password: "",
                    port: "",
                    smtpName: "",
                  }}
                  onSubmit={(values) => {
                    setNewEmail(values);
                    console.log("new emial", values);
                    setEmailList([...emailList, values]);
                    setOpen(false);
                  }}
                >
                  <Form>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col p-1">
                        <label className="text-sm opacity-75" htmlFor="email">
                          Email Id
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="email"
                          id="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Field
                          className="formikInputField"
                          type="password"
                          name="password"
                          id="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="port">
                          Port
                        </label>
                        <Field
                          className="formikInputField"
                          type="number"
                          name="port"
                          id="port"
                        />
                        <ErrorMessage
                          name="port"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="smtpName"
                        >
                          SMTP Name
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="smtpName"
                          id="smtpName"
                        />
                        <ErrorMessage
                          name="smtpName"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-row gap-2">
                        <Button className="w-fit rounded-lg" type="submit">
                          Save
                        </Button>
                        <Button
                          onClick={() => {
                            setOpen(false);
                          }}
                          className="w-fit rounded-lg"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </DialogContent>
            </Dialog>
          </div>
          <Separator />
          <CardContent className=" ">
            <DataTable columns={emailSenderList} data={emailList} />
          </CardContent>
          <CardFooter className="mt-2 px-0"></CardFooter>
        </div>
      </Card>
    </div>
  );
}
