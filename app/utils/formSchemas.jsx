import * as Yup from "yup";
const phoneRegExp =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
const urlRegExp =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

export const SignupSchema = Yup.object().shape({
  Company: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ContactName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password must be less than 15 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/\d/, "Password must contain a number")
    .matches(/[!@#$%^&*]/, "Password must contain a special character")
    .required("Password is required"),
  PhoneNo: Yup.string()
    .min(10, "Phone Number must be 10 digits long")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
});

export const SignInSchema = Yup.object().shape({
  MobileNo: Yup.string()
    .min(10, "Phone Number must be 10 digits long")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  CustId: Yup.string().min(2, "Too Short").required("Required"),
});

export const ForgotPasswordModel = {
  formId: "forgotPasswordForm",
  formField: {
    recoveryEmail: {
      name: "recoveryEmail",
      label: "Enter recovery email",
      requiredErrorMsg: "Email can't be empty",
      placeholder: "Enter recovery email",
    },
    otp: {
      name: "otp",
      label: "Enter OTP",
      requiredErrorMsg: "Email can't be empty",
    },
    newPassword: {
      name: "newPassword",
      label: "Enter New Password",
      requiredErrorMsg: "Password can't be empty",
      placeholder: "Enter New Password",
    },
    confirmNewPassword: {
      name: "confirmNewPassword",
      label: "Re enter Password",
      requiredErrorMsg: "Password dont match",
      placeholder: "Confirm New Password",
    },
  },
};

export const ContactUsSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too short")
    .max(200, "Message can be no longer than 200words")
    .required("Required"),
});

export const KYCSchema = Yup.object().shape({
  companyName: Yup.string().min(2, "Too short").required("Required"),
  branch: Yup.mixed()
    .required("Please select an option")
    .oneOf(["HR", "Developers", "R&D"]),
  department: Yup.string().min(2, "Too short").required("Required"),
  customerName: Yup.string().min(2, "Too short").required("Required"),
  businessType: Yup.string().min(2, "Too short").required("Required"),
  teamSize: Yup.number().required("Required"),
  aadharCard: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/pdf";
    }),
  panCard: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/pdf";
    }),
  gstn: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/pdf";
    }),
  cin: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/pdf";
    }),
  agreement: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/pdf";
    }),
  other: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/pdf";
    }),
});

export const kycFormDocsFields = [
  { htmlFor: "aadharCard", name: "Aadhar Card" },
  { htmlFor: "panCard", name: "Pan Card" },
  { htmlFor: "gstin", name: "GSTIN" },
  { htmlFor: "cin", name: "CIN" },
  { htmlFor: "agreement", name: "Agreement" },
  { htmlFor: "other", name: "Other" },
];

export const UploadAttachmentDialog = Yup.object().shape({
  attachement: Yup.mixed()
    .required("Please select a file")
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true;
      return value.size <= 1024 * 1024;
    })
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true;
      return value.type === "application/xlsx";
    }),
});

//DASHBOARD -> SETTINGS ->
export const GeneralSettings = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Minimum required length: 2")
    .required("Required"),
  whatsappNumber: Yup.string().matches(
    phoneRegExp,
    "Phone number is not valid",
  ),
  secretToken: Yup.string().min(8, "Minimum required length: 8"),
  apiKey: Yup.string().min(8, "Minimum required length: 8"),
  description: Yup.string().max(200, "Maximum allowed length: 200"),
});
export const WhatsappSettings = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Minimum required length: 2")
    .required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  accessToken: Yup.string().min(8, "Minimum required length: 8"),
  apiKey: Yup.string().min(8, "Minimum required length: 8"),
  whatsappBusinessId: Yup.string().max(8, "Maximum length: 8"),
  phoneNumberId: Yup.string().max(8, "Maximum length: 8"),
  fbManagerId: Yup.string().max(8, "Maximum length: 8"),
});

export const KycSettings = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Minimum required length: 2")
    .required("Required"),
  businessPerson: Yup.string()
    .min(2, "Minimum required length: 2")
    .required("Required"),
  addressDocument: Yup.mixed().required("File is required"),
});

export const SmsSettings = Yup.object().shape({
  smsNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  apiUrl: Yup.string().matches(urlRegExp, "Enter valid API URL"),
  apiKeySecretToken: Yup.string().min(8, "Minimum required length: 8"),
  apiKey: Yup.string().min(8, "Minimum required length: 8"),
  defaultApi: Yup.string().min(2, "Min 2 characters required"),
});
export const EmailSettings = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password must be less than 15 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/\d/, "Password must contain a number")
    .matches(/[!@#$%^&*]/, "Password must contain a special character")
    .required("Password is required"),
  port: Yup.number().max(999),
  smtpName: Yup.string(),
});
export const DomainSettings = Yup.object().shape({
  domain: Yup.string().matches(urlRegExp, "Enter valid domain"),
});

export const ContentMasterTemplateForm = Yup.object().shape({
  templateName: Yup.string().max(100),
  templateBody: Yup.string().max(250),
});
