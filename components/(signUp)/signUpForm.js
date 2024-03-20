"use client";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "@/app/utils/formSchemas";
import CustomErrorMessage from "../customErrorMessage";
import { useEffect } from "react";

export default function SignUpForm() {
  return (
    <div className="flex w-full flex-col justify-center py-4 md:w-1/2 md:py-0">
      <Toaster richColors />
      <Card className="m-auto w-fit border-0 pb-0 shadow-none hideIllustration:mt-[3rem]">
        <div className="flex flex-col gap-8 md:gap-8 md:p-6 md:pl-0">
          <div className="flex flex-col gap-5 pl-0 md:gap-4">
            <CardHeader className="gap-7 py-0">
              <div className="m-auto flex  w-fit flex-row items-center justify-center gap-1 md:m-0 lg:justify-normal hideIllustration:w-full ">
                <SlEnvolopeLetter size={22} color="#029AFF" />
                <h1 className="text-xl font-bold">
                  <span>Officiel</span>
                  <span className="text-campaignBlue">Campaign</span>
                </h1>
              </div>
              <div className="flex flex-col gap-4 md:gap-5 md:text-left hideIllustration:text-center">
                <CardTitle className="sub-heading">
                  Get ready to email like a boss!
                </CardTitle>
                {/* <h1 className="md:text-[2.5rem] text-[1.6rem] leading-tight font-extrabold"></h1> */}
                <CardDescription className="text-[1rem]  font-semibold  text-gray-500 2xs:text-[0.8rem]">
                  Elevate your email campaigns starting now
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="m-auto flex flex-col  gap-7 md:m-0">
                <Formik
                  validationSchema={SignupSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    values = { input: values };
                    setTimeout(async () => {
                      console.log(JSON.stringify(values, null, 2));
                      const response = await fetch("/api/signUp", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      });
                      console.log("response", response);
                      if (response.status == 200) {
                        const res = await response.json();
                        console.log("response.message", res);
                        toast.success(res?.message);
                      } else if (response.status == 400) {
                        const res = await response.json();
                        console.log("response.message", res);
                        toast.warning(res?.message);
                      } else {
                        toast.error(response.d.Message);
                      }

                      setSubmitting(false);
                    }, 400);
                  }}
                  initialValues={{
                    Email: "Anjtwr58@gmail.com",
                    Password: "Test@54321",
                    ContactName: "Anuj",
                    Company: "Ideliza",
                    PhoneNo: "8796283216",
                  }}
                >
                  {({ errors, touched, validateField, validateForm }) => (
                    <Form className="flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                          <Field
                            name="Company"
                            type="text"
                            placeholder="Company Name"
                            className="2xs:py-1.6 rounded-sm  bg-[#EEEEEE]  px-2 py-2.5"
                          />
                          <ErrorMessage name="Company">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            name="ContactName"
                            type="text"
                            placeholder="Contact Name"
                            className="2xs:py-1.6 rounded-sm  bg-[#EEEEEE]  px-2 py-2.5"
                          />{" "}
                          <ErrorMessage name="ContactName">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            type="email"
                            name="Email"
                            placeholder="Email Id"
                            className="2xs:py-1.6 rounded-sm  bg-[#EEEEEE]  px-2 py-2.5"
                          />
                          <ErrorMessage name="Email">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            type="tel"
                            placeholder="Phone Number"
                            name="PhoneNo"
                            className="2xs:py-1.6 rounded-sm  bg-[#EEEEEE]  px-3 py-2.5"
                          />
                          <ErrorMessage name="PhoneNo">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>{" "}
                          <Field
                            type="password"
                            name="Password"
                            placeholder="Enter password"
                            className="2xs:py-1.6 rounded-sm  bg-[#EEEEEE]  px-3 py-2.5"
                          />{" "}
                          <ErrorMessage name="Password">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>{" "}
                        </div>
                      </div>
                      <Button
                        className="w-full bg-campaignBlue py-6 hover:bg-blue-500"
                        type="submit"
                      >
                        CREATE NEW ACCOUNT
                      </Button>
                    </Form>
                  )}
                </Formik>

                <div className="m-auto flex flex-row items-center">
                  <div className="h-[0.4px] flex-1  bg-[#424242] px-12 opacity-40"></div>
                  <p className="mx-4 text-[#424242] opacity-100">or</p>
                  <div className="h-[0.4px] flex-1  bg-[#424242] px-12 opacity-40"></div>
                </div>

                <div className="flex flex-col justify-around gap-2 md:flex-row lg:gap-0">
                  <Button className="flex items-center gap-1 bg-slate-200 py-6 text-sm font-semibold text-gray-700 hover:bg-slate-300 md:px-3 md:py-6">
                    <FcGoogle size={28} />
                    Continue with Google
                  </Button>
                  <Button className="flex items-center gap-1 bg-black py-6 align-middle text-sm font-semibold md:px-3 md:py-6  ">
                    <ImAppleinc size={28} />
                    Continue with Apple
                  </Button>
                </div>
                <p className="m-auto 2xs:text-sm">
                  Already have an account?
                  <span className="font-bold text-campaignBlue">
                    {" "}
                    <Link href="/signIn">Sign In</Link>{" "}
                  </span>{" "}
                </p>
              </div>{" "}
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
