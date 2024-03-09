import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import CustomErrorMessage from "../customErrorMessage";
import { CustomInputField } from "../customUIComponents/customInputField";
import { Button } from "../ui/button";

export default function EmailForm({ activeStep, setActiveStep }) {
  const [recoveryEmailState, setRecoveryEmailState] = useState("");

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        console.log("INNTI", values);
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
          body: JSON.stringify(values), // Convert values to JSON string
        });

        console.log("activeStep", typeof setActiveStep);
        setActiveStep(activeStep + 1);

        console.log("VALUES", values.email);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
    >
      <Form method="POST" action="/api/email">
        <div className="m-auto flex flex-col gap-2">
          <label className="font-semibold ">Enter recovery email</label>
          <Field
            type="email"
            name="email"
            className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-2  py-2.5"
          />
          <ErrorMessage name="email">
            {(errMsg) => {
              console.log(errMsg);
              return <CustomErrorMessage errorMessage={errMsg} />;
            }}
          </ErrorMessage>
          <Button type="submit" className="bg-campaingnBlue">
            Send OTP
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
