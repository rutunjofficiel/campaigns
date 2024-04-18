import { ErrorMessage, Field, Form, Formik } from "formik";
import CustomErrorMessage from "@/components/customErrorMessage";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { Button } from "../ui/button";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogClose,
} from "../../components/ui/dialog";
import { WhatsappSettings } from "@/app/utils/formSchemas";
import Link from "next/link";
import { Separator } from "../ui/separator";
export default function AddNewWhatsappIdDialog() {
  return (
    <Formik
      validationSchema={WhatsappSettings}
      initialValues={{
        whatsappBusinessId: "433443433443",
        accessToken: "433443433443",
        phoneNumberId: "",
        phoneNumber: "",
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
            <div className="flex flex-col p-1">
              <label className="text-sm opacity-75" htmlFor="fbManagerId">
                FB ManagerId
              </label>
              <Field
                className="formikInputField"
                type="text"
                name="fbManagerId"
                id="fbManagerId"
              />
              <ErrorMessage
                name="fbManagerId"
                component="div"
                className="error"
              >
                {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
              </ErrorMessage>
            </div>

            <div className="flex flex-col  p-1 ">
              <label className="text-sm opacity-75" htmlFor="phoneNumber">
                Phone Number
              </label>
              <Field
                className="formikInputField"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
              />
              <ErrorMessage
                name="phoneNumber"
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
                type="text"
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
            <div className="flex w-fit flex-row gap-2">
              <Button className="w-fit rounded-lg" type="submit">
                Save
              </Button>
              <Button
                className="w-fit rounded-lg"
                type="submit"
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </CardFooter>
        </div>
      </Form>
    </Formik>
  );
}
