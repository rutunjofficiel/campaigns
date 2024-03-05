"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, Form, Formik, ErrorMessage } from "formik";

import Image from "next/image";
import CustomErrorMessage from "../customErrorMessage";
import forgotPasswordIllustration from "../../public/images/forgotPasswordIllustration.png";
import { Button } from "../ui/button";
import EmailForm from "../(forgotPassword)/EmailForm";
import OTPForm from "../(forgotPassword)/OTPForm";
import NewPasswordForm from "../(forgotPassword)/NewPasswordForm";
import { useState } from "react";

import RedirectToLogin from "../(forgotPassword)/redirectToLogin";
import { ForgotPasswordModel } from "@/app/utils/formSchemas";
import { Card } from "../ui/card";
const steps = [
  "Enter recovery email",
  "Enter OTP",
  "Enter new Password",
  "Redirecting to Login",
];
const { formId, formField } = ForgotPasswordModel;
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <EmailForm  formField={formField} />;
    case 1:
      return <OTPForm formField={formField} />;
    case 2:
      return <NewPasswordForm formField={formField} />;
    case 3:
      return <RedirectToLogin />;
    default:
      return <div>Not Found</div>;
  }
}
export default function ForgotPasswordDialog() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
    }
  }
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <>
      <Card className="border-none shadow-none ">
        <div className="flex flex-col gap-8 ">
          <DialogHeader>
            <Image
              alt="forgotPassword"
              className="m-auto"
              src={forgotPasswordIllustration}
            />
            <DialogTitle>
              <h2>Password Recovery</h2>
              <div className="relative w-[30vw]"></div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {activeStep === steps.length ? (
              <RedirectToLogin />
            ) : (
              <Formik
                onSubmit={(values) => {
                  console.log(values);  
                }}
              >
                {({ errors, touched }) => (
                  <Form
                    id={formId}
                    onSubmit={(e) => {
                      e.preventDefault();
                      _handleSubmit();
                    }}
                  >
                    {_renderStepContent(activeStep)}
                  </Form>
                )}
              </Formik>
            )}
          </DialogDescription>
        </div>
      </Card>
    </>
  );
}
