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

export default function SignUpForm() {
  return (
    <div className="flex flex-col justify-center md:py-0 py-4 w-full md:w-1/2">
      <Toaster richColors />
      <Card className="w-fit m-auto border-0 shadow-none pb-0 hideIllustration:mt-[3rem]">
        <div className="md:p-6 md:pl-0 flex flex-col md:gap-8 gap-8">
          <div className="flex flex-col md:gap-4 gap-5 pl-0">
            <CardHeader className="gap-7 py-0">
              <div className="flex flex-row  hideIllustration:w-full w-fit gap-1 items-center justify-center lg:justify-normal m-auto md:m-0 ">
                <SlEnvolopeLetter size={22} color="#029AFF" />
                <h1 className="font-bold text-xl">
                  <span>Officiel</span>
                  <span className="text-[#029AFF]">Campaign</span>
                </h1>
              </div>{" "}
              <div className="flex flex-col md:gap-5 gap-4 hideIllustration:text-center md:text-left">
                <CardTitle className="lg:text-[2.5rem] text-[2rem] xs:text-[1.6rem] 2xs:text-[1.2rem] leading-tight font-extrabold">
                  Get ready to email like a boss!
                </CardTitle>
                {/* <h1 className="md:text-[2.5rem] text-[1.6rem] leading-tight font-extrabold"></h1> */}
                <CardDescription className="text-[1rem]  2xs:text-[0.8rem]  font-semibold text-gray-500">
                  Elevate your email campaigns starting now
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-7  m-auto md:m-0">
                <Formik
                  validationSchema={SignupSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                  initialValues={{
                    email: "",
                    password: "",
                    companyName: "",
                    phoneNumber: "",
                  }}
                >
                  {({ errors, touched, validateField, validateForm }) => (
                    <Form className="flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                          <Field
                            name="companyName"
                            type="string"
                            placeholder="Company Name"
                            className="bg-[#EEEEEE] py-2.5  2xs:py-1.6  px-2 rounded-sm"
                          />{" "}
                          <ErrorMessage name="companyName">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            name="contactName"
                            type="string"
                            placeholder="Contact Name"
                            className="bg-[#EEEEEE] py-2.5  2xs:py-1.6  px-2 rounded-sm"
                          />{" "}
                          <ErrorMessage name="contactName">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email Id"
                            className="bg-[#EEEEEE] py-2.5  2xs:py-1.6  px-2 rounded-sm"
                          />
                          <ErrorMessage name="email">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            className="bg-[#EEEEEE] py-2.5  2xs:py-1.6  px-3 rounded-sm"
                          />
                          <ErrorMessage name="phoneNumber">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>{" "}
                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="bg-[#EEEEEE] py-2.5  2xs:py-1.6  px-3 rounded-sm"
                          />{" "}
                          <ErrorMessage name="password">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>{" "}
                        </div>
                      </div>
                      <Button
                        className="bg-[#029AFF] hover:bg-blue-500 w-full py-6"
                        type="submit"
                      >
                        CREATE NEW ACCOUNT
                      </Button>
                    </Form>
                  )}
                </Formik>

                <div className="flex flex-row items-center m-auto">
                  <div className="flex-1 bg-[#424242]  px-12 h-[0.4px] opacity-40"></div>
                  <p className="text-[#424242] mx-4 opacity-100">or</p>
                  <div className="flex-1 bg-[#424242]  px-12 h-[0.4px] opacity-40"></div>
                </div>

                <div className="flex md:flex-row flex-col lg:gap-0 gap-2 justify-around">
                  <Button className="font-semibold py-6 md:py-6 md:px-3 text-sm flex gap-1 items-center bg-slate-200 hover:bg-slate-300 text-gray-700">
                    <FcGoogle size={28} />
                    Continue with Google
                  </Button>
                  <Button className="font-semibold py-6 md:py-6 md:px-3 text-sm flex gap-1 items-center align-middle  ">
                    <ImAppleinc size={28} />
                    Continue with Apple
                  </Button>
                </div>
                <p className="m-auto 2xs:text-sm">
                  Already have an account?
                  <span className="font-bold text-[#029AFF]">
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
