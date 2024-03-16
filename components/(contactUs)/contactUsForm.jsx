import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomErrorMessage from "../customErrorMessage";
import { ContactUsSchema } from "@/app/utils/formSchemas";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactUsForm() {
  return (
    <Card className="m-auto my-auto flex w-[95%] flex-col gap-12 rounded-lg border-none bg-transparent outline-none lg:w-[70%]">
      <Formik
        validationSchema={ContactUsSchema}
        initialValues={{
          fullName: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values) => {
          console.log("values", values);
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
        }}
      >
        <Form
          method="POST"
          action="/api/contact"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="fullName">Full name</label>
              <Field
                type="text"
                name="fullName"
                placeholder="Full name"
                className="2xs:py-1.6 rounded-sm border-none  bg-slate-50 px-3 py-2.5 outline-none"
              />
              <ErrorMessage name="fullName">
                {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
              </ErrorMessage>
              <label htmlFor="email">Email Id</label>
              <Field
                type="email"
                name="email"
                placeholder="Email Id"
                className="2xs:py-1.6 rounded-sm border-none bg-slate-50 px-2 py-2.5 outline-none"
              />
              <ErrorMessage name="email">
                {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
              </ErrorMessage>
              <label htmlFor="message">Message</label>
              <Field
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                }}
                name="message"
                className="2xs:py-1.6 rounded-sm   bg-slate-50 px-3 py-2.5  ring-0"
              >
                {({ field, form, meta }) => (
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder="Tell us a little bit about yourself"
                    className="outline_none resize-none bg-slate-50 ring-0"
                  />
                )}
              </Field>
              <ErrorMessage name="message">
                {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
              </ErrorMessage>
            </div>
          </div>

          <Button
            className="w-fit  justify-end bg-campaignBlue py-4 hover:bg-blue-500"
            type="submit"
          >
            Send Message
          </Button>
        </Form>
      </Formik>
    </Card>
  );
}
