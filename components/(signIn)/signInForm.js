"use client";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { SignInSchema } from "@/app/utils/formSchemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CustomErrorMessage from "../customErrorMessage";
import ForgotPasswordDialog from "./forgotPasswordDialog";
import { useEffect, useState } from "react";
import SignInOtp from "./signInOtp";
import { useRouter } from "next/navigation";
import Loading from "@/app/(dashboard)/dashboard/loading";
import { TbReload } from "react-icons/tb";
import { Toaster } from "sonner";

const axios = require("axios");

export default function SignInForm() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOTPForm, toggleOTPForm] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [custId, setCustId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("userInfo"));
    if (d) {
      if (d["userInfo"] && d["custId"]) {
        router.push("/dashboard");
        setLoading(true);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading) {
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
                <div className="m-auto flex flex-col gap-7 md:m-0">
                  <Formik
                    validationSchema={SignInSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      setCustId(values.CustId);
                      console.log(JSON.stringify(values, null, 2));
                      axios
                        .post("/api/signIn", {
                          CustId: values.CustId,
                          MobileNo: values.MobileNo,
                        })
                        .then((response) => {
                          if (response.data.statusCode == 200) {
                            console.log(
                              "response.data.statusCode",
                              response.data.statusCode,
                            );
                            toggleOTPForm(!showOTPForm);
                            setIsSubmitted(true);
                            toast.success("OTP Sent to your phone");
                            setUserInfo(response.data.customerData);
                          } else {
                            toast.warning(response.data.message);
                          }
                          console.log(response.data);
                        })
                        .catch((error) => {
                          console.log("ERROR:", error.response.data.message);
                          {
                            error &&
                              toast.error(`${error.response.data.message}`);
                          }
                        });

                      setSubmitting(false);
                    }}
                    initialValues={{
                      CustId: "",
                      MobileNo: "",
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="flex flex-col gap-4" method="get">
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-3">
                            <Field
                              type="text"
                              name="CustId"
                              placeholder="Customer ID"
                              className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-2 py-2.5"
                            />
                            <ErrorMessage name="CustId">
                              {(errMsg) => (
                                <CustomErrorMessage errorMessage={errMsg} />
                              )}
                            </ErrorMessage>
                            <Field
                              type="text"
                              name="MobileNo"
                              // disabled={isSubmitted}
                              placeholder="Enter Mobile number"
                              className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-3 py-2.5"
                            />
                            <ErrorMessage name="MobileNo">
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
                        {isSubmitting ? (
                          <Button disabled>
                            <TbReload className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                          </Button>
                        ) : (
                          <Button type="submit">Sign In</Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                  {showOTPForm && userInfo && (
                    <SignInOtp userInfo={userInfo} custID={custId} />
                  )}

                  <div className="m-auto flex flex-row items-center">
                    <div className="h-[0.4px] flex-1  bg-[#424242] px-12 opacity-40"></div>
                    <p className="mx-4 text-[#424242] opacity-100">or</p>
                    <div className="h-[0.4px] flex-1 bg-[#424242] px-12 opacity-40"></div>
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
  } else {
    return <Loading />;
  }
}
