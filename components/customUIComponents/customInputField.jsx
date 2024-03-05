import { Field, ErrorMessage } from "formik";
import CustomErrorMessage from "../customErrorMessage";

export const CustomInputField = ({ type, name, placeholder }) => (
  <div className="flex flex-col gap-3">
    <Field
      type={type}
      
      name={name}
      placeholder={placeholder}
      className="bg-[#EEEEEE] py-2.5  2xs:py-1.6 px-2 rounded-sm"
    />
    <ErrorMessage name={name}>
      {(errMsg) => <CustomErrorMessage errorMessage={errMsg} />}
    </ErrorMessage>
  </div>
);
