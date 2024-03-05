import React, { useEffect } from "react";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export default function OTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <div className="stepform w-fit m-auto flex flex-col gap-5 items-center">
      <h2>We just emailed you an OTP</h2>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "4px",
          width: "54px",

          height: "54px",
          fontSize: "1rem",
          color: "#000",
          fontWeight: "400",
          caretColor: "black",
        }}
        renderSeparator={<span style={{ width: "8px" }}></span>}
        renderInput={(props) => <input {...props} />}
      />
      <Button type="submit">Submit</Button>
    </div>
  );
}
