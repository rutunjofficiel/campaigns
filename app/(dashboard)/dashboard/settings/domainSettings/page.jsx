"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { DomainSettings, WhatsappSettings } from "@/app/utils/formSchemas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
export default function Page() {
  return (
    <div className=" mx-auto  w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <Formik
          validationSchema={DomainSettings}
          initialValues={{
            domain: "",
          }}
          onSubmit={(values) => {
            // console.log(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2 px-4">
              <Link href="# " className=" ">
                <h1 className="dashboard">Domain Settings</h1>
              </Link>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-1">
                  <label className="text-sm opacity-75" htmlFor="domain">
                    Add Domain
                  </label>
                  <Field
                    className="formikInputField"
                    type="text"
                    name="domain"
                    id="domain"
                  />
                  <ErrorMessage name="domain" component="div" className="error">
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
