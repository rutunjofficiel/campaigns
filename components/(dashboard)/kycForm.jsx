"use client";
import { Card } from "../ui/card";
import { KYCSchema } from "../../app/utils/formSchemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import CustomErrorMessage from "../customErrorMessage";

export default function KYCForm() {
  const steps = [
    {
      id: "Step 1",
      name: "Company Information",
      fields: [
        "companyName",
        "branch",
        "department",
        "customerName",
        "businessType",
        "teamSize",
      ],
    },
    {
      id: "Step 2",
      name: "Documents Upload",
      fields: ["aadharCard", "panCard", "gstn", "cin", "agreement", "other"],
    },
    { id: "Step 3", name: "Complete" },
  ];
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const next = async () => {
    const fields = steps[currentStep].fields;
    // const output = await trigger(fields, { shouldFocus: true });
    // if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        // await handleSubmit();
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
    <Card>
      <h1>KYC Form</h1>
      <Formik
        initialValues={{
          companyName: "",
          branch: "",
          department: "",
          customerName: "",
          businessType: "",
          teamSize: "",
          aadharCard: null,
          panCard: null,
          gstn: null,
          cin: null,
          agreement: null,
          other: null,
        }}
        // Assuming KYCSchema is imported from your utils file
        validationSchema={KYCSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission here
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
          <Form>
            {/* Company Name */}
            {currentStep === 0 && (
              <>
                <div>
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Customer ID"
                    className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-2 py-2.5"
                  />
                  <ErrorMessage name=" CustId">
                    {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor="branch">Branch</label>
                  <Field
                    type="text"
                    name="MobileNo"
                    // disabled={isSubmitted}
                    placeholder="Enter Mobile number"
                    className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-3 py-2.5"
                  />
                  <Field
                    id="branch"
                    type="text"
                    name="branch"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // disabled={isSubmitted}
                    placeholder=" "
                    className="2xs:py-1.6 rounded-sm bg-[#EEEEEE] px-2 py-2.5"
                  />
                  <ErrorMessage
                    name="branch"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="businessType">Business Type</label>
                  <Field
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
                  />
                </div>
                <div>
                  <label htmlFor="teamSize">Team Size</label>
                  <Field
                    type="text"
                    name="teamSize"
                    id="teamSize"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="teamSize"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="department">Department</label>
                  <Field
                    as="select"
                    name="branch"
                    id="branch"
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
                  />
                </div>

                <div>
                  <label htmlFor="branch">Branch</label>
                  <Field
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
                  />
                </div>
              </>
            )}

            {currentStep === 1 && (
              <div className="">
                <div>
                  <label htmlFor="aadharCard">Aadhar Card</label>
                  <Field
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
                  />
                </div>
                <div>
                  <label htmlFor="panCard">PAN Card</label>
                  <Field
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
                  />
                </div>
                <div>
                  <label htmlFor="gstn">GSTN</label>
                  <Field
                    type="file"
                    name="gstn"
                    id="gstn"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="gstn" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="cin">CIN</label>
                  <Field
                    type="file"
                    name="cin"
                    id="cin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="cin" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="agreement">Agreement</label>
                  <Field
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
                  />
                </div>
                <div>
                  <label htmlFor="other">Other</label>
                  <Field
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
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Complete
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Thank you for your submission.
                </p>
              </>
            )}
            {/* Other file upload fields... */}
            {/* ...similar structure for panCard, gstn, cin, agreement, other */}
          </Form>
        )}
      </Formik>

      <div className="flex flex-col gap-2">
        <Button onClick={prev} size="icon">
          <ChevronUp />
        </Button>
        <Button size="icon" onClick={next}>
          <ChevronDown />
        </Button>
      </div>
    </Card>
  );
}
