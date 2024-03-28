"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Card } from "../../../../components/ui/card";
import { KYCSchema } from "../../../utils/formSchemas";
import CustomErrorMessage from "../../../../components/customErrorMessage";
import { Check } from "lucide-react";
import { Clock } from "lucide-react";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { Separator } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Upload } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function Page() {
  const steps = [
    {
      id: "Step 1",
      name: "Company Information",
      fields: ["companyName", "branch", "customerName"],
    },
    {
      id: "Step 2",
      name: "Department Information",
      fields: ["department", "businessType", "teamSize"],
    },
    {
      id: "Step 3",
      name: "Documents Upload",
      fields: ["aadharCard", "panCard", "gstn", "cin", "agreement", "other"],
    },
    { id: "Step 4", name: "Complete" },
  ];
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const next = async (values) => {
    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        // await handleSubmit();
        // console.log(values);
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-8 py-6">
      <SectionHeader section="KYC" />

      <Card className="mx-auto w-[90%] border-none py-8 shadow-md outline-none">
        <div className="flex flex-row items-start  gap-8 px-8">
          <nav className=" mr-2 flex flex-col border-gray-200 px-4  ">
            <ol role="list" className="flex flex-col  justify-around space-y-2">
              {steps.map((step, index) => (
                <li key={step.name}>
                  {currentStep > index ? (
                    <div className="flex flex-row items-center justify-center  ">
                      <div className="blue-gradient flex aspect-square h-[2.8rem] w-fit flex-col items-center  justify-center rounded-full">
                        <Check color="#fff" />
                      </div>
                      <div
                        className="flex w-full flex-col border-sky-600 py-2 pl-4     "
                        aria-current="step"
                      >
                        <span className="text-md  font-medium text-sky-600 opacity-75">
                          {step.id}
                        </span>
                        <span className="text-md font-medium">{step.name}</span>
                      </div>
                    </div>
                  ) : currentStep === index ? (
                    <div className="flex flex-row items-center justify-center  ">
                      <div className=" yellow-gradient flex aspect-square h-[2.8rem] w-fit flex-col items-center  justify-center rounded-full">
                        <Clock color="#fff" />
                      </div>
                      <div
                        className="flex w-full flex-col border-sky-600 py-2 pl-4     "
                        aria-current="step"
                      >
                        <span className="text-md  font-medium text-sky-600 opacity-75">
                          {step.id}
                        </span>
                        <span className="text-md font-medium">{step.name}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center justify-center grayscale">
                      <div className="yellow-gradient flex aspect-square h-[2.8rem] w-fit flex-col items-center justify-center  rounded-full ">
                        <Clock color="#fff" />
                      </div>
                      <div
                        className="flex w-full flex-col border-sky-600 py-2 pl-4"
                        aria-current="step"
                      >
                        <span className="text-md  font-medium text-sky-600 opacity-75">
                          {step.id}
                        </span>
                        <span className="text-md font-medium text-gray-600">
                          {step.name}
                        </span>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex h-max flex-row  items-start gap-4 border-l-2 px-6">
            <Formik
              initialValues={{
                companyName: "",
                branch: "",
                department: "",
                customerName: "",
                businessType: "",
                teamSize: null,
                aadharCard: null,
                panCard: null,
                gstn: null,
                cin: null,
                agreement: null,
                other: null,
              }}
              validationSchema={KYCSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form className="flex  min-h-[400px] min-w-[600px] flex-col justify-between gap-2 lg:gap-4">
                  {currentStep === 0 && (
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col  p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="companyName"
                        >
                          Company Name
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="companyName"
                          id="companyName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="companyName"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="businessType"
                        >
                          Business Type
                        </label>
                        <Field
                          className="formikInputField"
                          type="text"
                          name="businessType"
                          id="businessType"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="businessType"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  )}
                  {currentStep === 1 && (
                    <>
                      <div className="flex flex-col p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="teamSize"
                        >
                          Team Size
                        </label>
                        <Field
                          className="formikInputField"
                          type="number"
                          name="teamSize"
                          id="teamSize"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="teamSize"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="department"
                        >
                          Department
                        </label>
                        <Field
                          className="formikInputField"
                          as="select"
                          name="department"
                          id="department"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">--Select Department--</option>
                          <option value="HR">HR</option>
                          <option value="Developers">Developers</option>
                          <option value="R&D">R&D</option>
                        </Field>
                        <ErrorMessage
                          name="department"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="branch">
                          Branch
                        </label>
                        <Field
                          className="formikInputField"
                          as="select"
                          name="branch"
                          id="branch"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">--Select Branch--</option>
                          <option value="HR">HR</option>
                          <option value="Developers">Developers</option>
                          <option value="R&D">R&D</option>
                        </Field>
                        <ErrorMessage
                          name="branch"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                    </>
                  )}
                  {currentStep === 2 && (
                    <div className="grid grid-cols-2  lg:grid-cols-3">
                      <div className="flex flex-col p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="aadharCard"
                        >
                          Aadhar Card
                        </label>
                        <Field
                          className="formikInputFieldDocument "
                          type="file"
                          name="aadharCard"
                          id="aadharCard"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="aadharCard"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="panCard">
                          PAN Card
                        </label>
                        <Field
                          className="formikInputFieldDocument"
                          type="file"
                          name="panCard"
                          id="panCard"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="panCard"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="gstn">
                          GSTN
                        </label>
                        <Field
                          className="formikInputFieldDocument"
                          type="file"
                          name="gstn"
                          id="gstn"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="gstn"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="cin">
                          CIN
                        </label>
                        <Field
                          className="formikInputFieldDocument"
                          type="file"
                          name="cin"
                          id="cin"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="cin"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label
                          className="text-sm opacity-75"
                          htmlFor="agreement"
                        >
                          Agreement
                        </label>
                        <Field
                          className="formikInputFieldDocument"
                          type="file"
                          name="agreement"
                          id="agreement"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="agreement"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="flex flex-col  p-1 ">
                        <label className="text-sm opacity-75" htmlFor="other">
                          Other
                        </label>
                        <Field
                          className="formikInputFieldDocument"
                          type="file"
                          name="other"
                          id="other"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="other"
                          component="div"
                          className="error"
                        >
                          {(errMsg) => (
                            <CustomErrorMessage errorMessage={errMsg} />
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div className="flex flex-col gap-4">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Complete
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Thank you for your submission.
                      </p>
                    </div>
                  )}
                  <div className="ml-auto flex flex-row gap-2">
                    <Button
                      className="rounded-md"
                      variant="outline"
                      onClick={prev}
                    >
                      Back
                    </Button>
                    <Button className="rounded-md" onClick={next}>
                      Next
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <Separator />
        </div>
      </Card>
    </div>
  );
}

const CustomInputDocument = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => (
  <div className="custom-file-input group   w-fit cursor-pointer border-2 border-red-100 ">
    <input
      type="file"
      {...field}
      {...props}
      className=" absolute z-0 opacity-0"
    />
    <div className="relative m-auto ">
      <Upload />
    </div>

    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

// const CustomInputDocument = ({
//   field, // { name, value, onChange, onBlur }
//   form: { touched, errors },
//   ...props
// }) => (
//   <div>
//     {/* <div className="formikInputFieldDocument"> */}
//     <input type="file" {...field} {...props} />
//     {touched[field.name] && errors[field.name] && (
//       <div className="error">{errors[field.name]}</div>
//     )}
//   </div>
// );
