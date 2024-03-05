import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import CustomErrorMessage from "../customErrorMessage";
import { CustomInputField } from "../customUIComponents/customInputField";
import { Button } from "../ui/button";

export default function EmailForm(props) {
  const { formField } = props;

  const [recoveryEmailState, setRecoveryEmailState] = useState("");
  console.log("formField", formField);

  return (
    <>
      {formField && (
        <div className="flex flex-col gap-2 justify-start">
          <label className="font-semibold w-fit">
            {formField?.recoveryEmail.label}
          </label>
          <Field
            type="email"
            name="email"
            className="bg-[#EEEEEE] py-2.5 2xs:py-1.6 px-2 rounded-sm"
            placeholder={formField?.recoveryEmail.label}
          />
          <ErrorMessage name={formField?.recoveryEmail.name}>
            {(errMsg) => {
              console.log(formField?.recoveryEmail, props);
              return (
                <CustomErrorMessage
                  errorMessage={formField?.recoveryEmail.requiredErrorMsg}
                />
              );
            }}
          </ErrorMessage>
          <Button type="submit" className="bg-[#029AFF]">
            Send OTP
          </Button>
        </div>
      )}
    </>
  );
}
