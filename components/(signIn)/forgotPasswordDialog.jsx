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
import { Button } from "../ui/button";
import EmailForm from "../(forgotPassword)/EmailForm";
import OTPForm from "../(forgotPassword)/OTPForm";
import NewPasswordForm from "../(forgotPassword)/NewPasswordForm";
import { useState } from "react";
import RedirectToLogin from "../(forgotPassword)/redirectToLogin";
import { ForgotPasswordModel } from "@/app/utils/formSchemas";
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
      return <EmailForm formField={formField} />;
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
      <DialogHeader>
        <DialogTitle>
          <div>Are you absolutely sure?</div>
          <div className="relative w-[30vw]"></div>
        </DialogTitle>
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
                <Form id={formId} onSubmit={_handleSubmit}>
                  {_renderStepContent(activeStep)}
                  {activeStep !== 0 && (
                    <Button type="button" onClick={_handleBack}>
                      Back
                    </Button>
                  )}
                  <Button type="submit">
                    {isLastStep ? "Place order" : "Next"}
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </DialogDescription>
      </DialogHeader>
    </>
  );
}
