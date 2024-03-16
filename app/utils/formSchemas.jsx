import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SignupSchema = Yup.object().shape({
  Company: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ContactName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Password: Yup.string().min(2, "Too Short").required("Required"),
  PhoneNo: Yup.string()
    .min(10, "Phone Number must be 10 digits long")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(2, "Too Short").required("Required"),
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
