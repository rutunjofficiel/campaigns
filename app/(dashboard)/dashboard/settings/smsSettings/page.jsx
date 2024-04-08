"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { SmsSettings } from "@/app/utils/formSchemas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { Separator } from "@/components/ui/separator";
export default function Page() {
  return (
    <div className=" mx-auto  w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          {/* <Button variant="ghost" className="w-fit rounded-lg px-1 opacity-80">
            <Link href="./" className="text-md flex flex-row items-center ">
              <ChevronLeft className="h-4 w-fit " />
              <span>Settings</span>
            </Link>
          </Button> */}
          <SettingsBackButton />
        </CardHeader>

        <Formik
          validationSchema={SmsSettings}
          initialValues={{
            apiUrl: "",
            secretToken: "",
            apiKey: "",
            smsNumber: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2 px-4">
              <Link href="# " className=" ">
                <h1 className="dashboard">SMS Settings</h1>
              </Link>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-1">
                  <label className="text-sm opacity-75" htmlFor="smsNumber">
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
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
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
                  <ErrorMessage name="apiUrl" component="div" className="error">
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col p-1 ">
                  <label className="text-sm opacity-75" htmlFor="secretToken">
                    API Key Secret Token
                  </label>
                  <Field
                    className="formikInputField"
                    type="text"
                    name="secretToken"
                    id="secretToken"
                  />
                  <ErrorMessage
                    name="secretToken"
                    component="div"
                    className="error"
                  >
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
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
                  <ErrorMessage name="apiKey" component="div" className="error">
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
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
