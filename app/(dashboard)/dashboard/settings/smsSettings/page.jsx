"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomErrorMessage from "@/components/customErrorMessage";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SmsSettings } from "@/app/utils/formSchemas";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { DataTable } from "../../dataTable";
import { smsSenderList } from "../../columns";
export default function Page() {
  const data = [
    {
      smsNumber: "884583833",
      apiUrl: "yahoo",
      defaultApi: "twillio",
      apiKeysecretToken: "Test@5222",
      apiKey: 8000,
      accountId: 1000,
    },
    {
      smsNumber: "rutunj@officiel.com",
      apiUrl: "gmail",
      defaultApi: "gupshup",
      apiKeysecretToken: "Test@222",
      apiKey: 8000,
      accountId: 2000,
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedApi, setSelectedApi] = useState("twillio");
  const [smsNumbers, setSmsNumbers] = useState(data);
  return (
    <div className=" mx-auto  w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row justify-between">
            <h1 className="dashboard">SMS Settings</h1>
            <Dialog open={open}>
              <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant="outline">
                  Add new Number
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New SMS Phone Number</DialogTitle>
                </DialogHeader>
                <Formik
                  validationSchema={SmsSettings}
                  initialValues={{
                    apiUrl: "",
                    apiKeysecretToken: "",
                    apiKey: "",
                    accountId: "",
                    smsNumber: "",
                    defaultApi: "",
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                    setOpen(false);
                    setSmsNumbers([...data, values]);
                  }}
                >
                  <Form>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col p-1">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="defaultApi"
                        >
                          Default Provider
                        </label>
                        <Select
                          htmlFor="defaultApi"
                          defaultValue="twillio"
                          onChange={(e) => setSelectedApi(e.target.value)}
                        >
                          <SelectValue placeholder="Select an API" />
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select API" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="twillio">Twillio</SelectItem>
                            <SelectItem value="gupshup">Gupshup</SelectItem>
                            <SelectItem value="ifficiel">Officiel</SelectItem>
                          </SelectContent>
                        </Select>

                        <ErrorMessage
                          name="defaultApi"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col p-1">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="smsNumber"
                        >
                          SMS Number
                        </label>
                        <Field
                          className="formikInputField"
                          type="tel"
                          name="smsNumber"
                          id="smsNumber"
                        />
                        <ErrorMessage
                          name="smsNumber"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col p-1 ">
                        <label className="text-sm opacity-75" htmlFor="apiUrl">
                          API Url
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="apiUrl"
                          id="apiUrl"
                        />
                        <ErrorMessage
                          name="apiUrl"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="apiKeysecretToken"
                        >
                          API Key Secret Token
                        </label>

                        <Field
                          className="formikInputField"
                          type="text"
                          name="apiKeysecretToken"
                          id="apiKeysecretToken"
                        />
                        <ErrorMessage
                          name="apiKeysecretToken"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col p-1">
                        <label className="text-sm opacity-75" htmlFor="apiKey">
                          API Key
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="apiKey"
                          id="apiKey"
                        />
                        <ErrorMessage
                          name="apiKey"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="apiKey">
                          API Key
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="apiKey"
                          id="apiKey"
                        />
                        <ErrorMessage
                          name="apiKey"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <Button className="w-fit rounded-lg" type="submit">
                        Update Settings
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </DialogContent>
            </Dialog>
          </div>
          <Separator />
          <CardContent>
            <DataTable columns={smsSenderList} data={smsNumbers} />
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
