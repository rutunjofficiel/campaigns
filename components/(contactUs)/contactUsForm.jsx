import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomErrorMessage from "../customErrorMessage";
import { ContactusSchema } from "@/app/utils/formSchemas";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactUsForm() {
  return (
    <Card className="m-auto flex w-[95%] flex-col gap-12 rounded-lg my-auto border-none bg-transparent outline-none lg:w-[70%]">
      <Formik
        validationSchema={ContactusSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4  ">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <Label>Full name</Label>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="2xs:py-1.6 rounded-sm bg-slate-50  px-3 py-2.5"
                />
                <ErrorMessage name="password">
                  {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                </ErrorMessage>
                <Label>Email Id</Label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  className="2xs:py-1.6 rounded-sm  bg-slate-50  px-2 py-2.5"
                />
                <ErrorMessage name="email">
                  {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                </ErrorMessage>{" "}
                <Label>Message</Label>{" "}
                <Field
                  name="message"
                  className="2xs:py-1.6 rounded-sm bg-slate-50  px-3 py-2.5"
                >
                  {({ field, form, meta }) => (
                    <div>
                      <Textarea
                        {...field}
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                      />
                      {meta.touched && meta.error && (
                        <CustomErrorMessage errorMessage={meta.error} />
                      )}
                    </div>
                  )}
                </Field>
                <ErrorMessage name="password">
                  {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                </ErrorMessage>
              </div>
            </div>

            <Button
              className="w-fit  bg-campaignBlue py-4 hover:bg-blue-500"
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
