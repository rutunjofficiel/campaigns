import React from "react";
import OtpInput from "react-otp-input";
import { useState } from "react";
export default function OTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
    </>
  );
}
