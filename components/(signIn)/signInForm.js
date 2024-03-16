"use client";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { Button } from "../ui/button";
import { Toaster, toast } from "sonner";
import { SignInSchema, SignupSchema } from "@/app/utils/formSchemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomErrorMessage from "../customErrorMessage";
import ForgotPasswordDialog from "./forgotPasswordDialog";
import OTPForm from "../(forgotPassword)/OTPForm";
import NewPasswordForm from "../(forgotPassword)/NewPasswordForm";

export default function SignInForm() {
  return (
    <div className="flex w-full flex-col justify-center py-4 md:w-1/2 md:py-0">
      <Toaster richColors />
      <Card className="m-auto w-fit border-0 pb-0 shadow-none hideIllustration:mt-[3rem]">
        <div className="flex flex-col gap-8 md:gap-8 md:p-6 md:pl-0">
          <div className="flex flex-col gap-5 pl-0 md:gap-4">
            <CardHeader className="gap-7 py-0">
              <div className="m-auto flex w-fit flex-row items-center justify-center gap-1 md:m-0 lg:justify-normal hideIllustration:w-full ">
                <SlEnvolopeLetter size={22} color="#029AFF" />
                <h1 className="text-xl font-bold">
                  <span>Officiel</span>
                  <span className="text-campaignBlue">Campaign</span>
                </h1>
              </div>
              <div className="flex flex-col gap-4 md:gap-5 md:text-left hideIllustration:text-center">
                <CardTitle className="text-[2rem] font-extrabold leading-tight lg:text-[2.5rem] xs:text-[1.6rem] 2xs:text-[1.2rem]">
                  Welcome Back to Your <br></br> Email Marketing Hub
                </CardTitle>
                <CardDescription className="text-[1rem]  font-semibold  text-gray-500 2xs:text-[0.8rem]">
                  Access Your Campaigns with Ease
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="m-auto flex flex-col  gap-7 md:m-0">
                <Formik
                  validationSchema={SignInSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email Id"
                            className="2xs:py-1.6 rounded-sm  bg-[#EEEEEE] px-2 py-2.5"
                          />
                          <ErrorMessage name="email">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-3 py-2.5"
                          />
                          <ErrorMessage name="password">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end text-xs sm:text-sm">
                        <Dialog onOpenAutoFocus>
                          <DialogTrigger>
                            <p>Forgot password?</p>
                          </DialogTrigger>
                          <DialogContent>
                            <ForgotPasswordDialog />
                          </DialogContent>
                        </Dialog>
                      </div>
                      <Button
                        className="w-full bg-campaignBlue py-6 hover:bg-blue-500"
                        type="submit"
                      >
                        Sign In
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
                    <FcGoogle size={26} />
                    Login with Google
                  </Button>
                  <Button className="flex items-center gap-1 bg-primary py-6 align-middle text-sm font-semibold hover:bg-primary/90 md:px-3 md:py-6  ">
                    <ImAppleinc size={24} />
                    Login with Apple
                  </Button>
                </div>
                <p className="m-auto 2xs:text-sm">
                  Don’t have an account?
                  <span className="font-bold text-campaignBlue">
                    {" "}
                    <Link href="/signUp">Sign Up</Link>
                  </span>
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
