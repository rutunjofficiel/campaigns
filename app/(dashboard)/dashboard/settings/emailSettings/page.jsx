"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { EmailSettings, WhatsappSettings } from "@/app/utils/formSchemas";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
export default function Page() {
  return (
    <div className="mx-auto w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <Formik
          validationSchema={EmailSettings}
          initialValues={{
            email: "",
            password: "",
            port: "",
            smtpName: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2 px-4">
              <Link href="# " className=" ">
                <h1 className="dashboard">Email Settings</h1>
              </Link>
              <Separator />
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
                  <ErrorMessage name="email" component="div" className="error">
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>

                <div className="flex flex-col  p-1 ">
                  <label className="text-sm opacity-75" htmlFor="password">
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
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
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
                  <ErrorMessage name="port" component="div" className="error">
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col  p-1 ">
                  <label className="text-sm opacity-75" htmlFor="smtpName">
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
