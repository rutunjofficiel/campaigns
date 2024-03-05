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
    <div className="flex flex-col justify-center md:py-0 py-4 w-full md:w-1/2">
      <Toaster richColors />
      <Card className="w-fit m-auto border-0 shadow-none pb-0 hideIllustration:mt-[3rem]">
        <div className="md:p-6 md:pl-0 flex flex-col md:gap-8 gap-8">
          <div className="flex flex-col md:gap-4 gap-5 pl-0">
            <CardHeader className="gap-7 py-0">
              <div className="flex flex-row hideIllustration:w-full w-fit gap-1 items-center justify-center lg:justify-normal m-auto md:m-0 ">
                <SlEnvolopeLetter size={22} color="#029AFF" />
                <h1 className="font-bold text-xl">
                  <span>Officiel</span>
                  <span className="text-[#029AFF]">Campaign</span>
                </h1>
              </div>
              <div className="flex flex-col md:gap-5 gap-4 hideIllustration:text-center md:text-left">
                <CardTitle className="lg:text-[2.5rem] text-[2rem] xs:text-[1.6rem] 2xs:text-[1.2rem] leading-tight font-extrabold">
                  Welcome Back to Your <br></br> Email Marketing Hub
                </CardTitle>
                <CardDescription className="text-[1rem]  2xs:text-[0.8rem]  font-semibold text-gray-500">
                  Access Your Campaigns with Ease
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-7  m-auto md:m-0">
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
                            className="bg-[#EEEEEE] py-2.5  2xs:py-1.6 px-2 rounded-sm"
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
                            className="bg-[#EEEEEE] py-2.5 2xs:py-1.6 px-3 rounded-sm"
                          />
                          <ErrorMessage name="password">
                            {(errMsg) => (
                              <CustomErrorMessage errorMessage={errMsg} />
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div className="flex flex-row sm:text-sm text-xs justify-end">
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
                        className="bg-[#029AFF] hover:bg-blue-500 w-full py-6"
                        type="submit"
                      >
                        Sign In
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
                    Login with Google
                  </Button>
                  <Button className="font-semibold bg-primary hover:bg-primary/90 py-6 md:py-6 md:px-3 text-sm flex gap-1 items-center align-middle  ">
                    <ImAppleinc size={28} />
                    Login with Apple
                  </Button>
                </div>
                <p className="m-auto 2xs:text-sm">
                  Don’t have an account?
                  <span className="font-bold text-[#029AFF]">
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
