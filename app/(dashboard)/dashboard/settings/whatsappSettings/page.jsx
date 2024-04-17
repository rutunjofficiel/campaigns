"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { WhatsappSettings } from "@/app/utils/formSchemas";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useWhatsappSettingsStore from "../../../../utils/stores";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { create } from "zustand";
import SettingsBackButton from "@/components/(dashboard)/settingsBackButton";
import { useEffect } from "react";

export default function Page() {
  const { setWhatsappNumber, whatsappSetting, getWhatsappNumber } =
    useWhatsappSettingsStore();

  useEffect(() => {
    if (WhatsappSettings === null) {
      getWhatsappNumber();
    }
    setWhatsappNumber("7987291782");
  }, []);

  console.log(whatsappSetting);

  return (
    <div className="mx-auto w-[90%]">
      <Card className="mt-6">
        <CardHeader className="px-4">
          <SettingsBackButton />
        </CardHeader>

        <Formik
          validationSchema={WhatsappSettings}
          initialValues={{
            whatsappBusinessId: "433443433443",
            accessToken: "433443433443",
            phoneNumberId: "",
            fbManagerId: "",
            companyName: "RRRR",
            apiKey: "433443433443",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="flex flex-col gap-2 px-4">
              <Link href="# " className=" ">
                <h1 className="dashboard">Whatsapp Settings</h1>
              </Link>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-1">
                  <label className="text-sm opacity-75" htmlFor="companyName">
                    Company Name
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

                <div className="flex flex-col  p-1 ">
                  <label className="text-sm opacity-75" htmlFor="phoneNumberId">
                    Phone Number Id
                  </label>
                  <Field
                    className="formikInputField"
                    type="tel"
                    name="phoneNumberId"
                    id="phoneNumberId"
                  />
                  <ErrorMessage
                    name="phoneNumberId"
                    component="div"
                    className="error"
                  >
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col  p-1 ">
                  <label className="text-sm opacity-75" htmlFor="accessToken">
                    Access Token
                  </label>
                  <Field
                    className="formikInputField"
                    type="number"
                    name="accessToken"
                    id="accessToken"
                  />
                  <ErrorMessage
                    name="accessToken"
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
                    type="number"
                    name="apiKey"
                    id="apiKey"
                  />
                  <ErrorMessage name="apiKey" component="div" className="error">
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col p-1">
                  <label
                    className="text-sm opacity-75"
                    htmlFor="whatsappBusinessId"
                  >
                    Whatsapp Business Id
                  </label>
                  <Field
                    className="formikInputField"
                    type="text"
                    name="whatsappBusinessId"
                    id="whatsappBusinessId"
                  />
                  <ErrorMessage
                    name="whatsappBusinessId"
                    component="div"
                    className="error"
                  >
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
              </div>
              <CardFooter className="mt-2 px-0">
                <Button className="w-fit rounded-lg" type="submit">
                  Add Settings
                </Button>
              </CardFooter>
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
}
