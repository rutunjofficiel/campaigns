"use client";
import OTPInput from "react-otp-input";
import { useState } from "react";
import { permanentRedirect } from "next/navigation";
import { Button } from "../ui/button";
import axios from "axios";

export default function SignInOtp({ userInfo }) {
  const [OTP, setOTP] = useState(0);
  const [OTPReEnter, setOTPReEnter] = useState(false);
  const [OTPMatched, setOTPMatched] = useState(false);

  console.log("OTP", OTP);
  function verifyOTP() {
    if (OTP?.length == 6) {
      axios
        .post("/api/otpVerify", {
          OTP: values.OTP,
        })
        .then((response) => {
          if (response.data.statusCode == 200) {
            console.log("response.data.statusCode", response.data.statusCode);
            try {
              window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
            } catch (error) {
              console.error(error);
            }
            setOTPMatched(true);
            permanentRedirect("/signUp");
          } else {
            toast.warning(response.data.message);
          }
          console.log(response.data);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log("ERROR:", error.response.data.message);
        });
    } else if (OTP?.length != 6) {
      toast.warning("OTP must be 6 digits long");
    }
  }

  return (
    <div className="flex flex-col items-center bg-slate-50">
      <OTPInput
        value={OTP}
        onChange={setOTP}
        numInputs={6}
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
      <Button
        onClick={() => {
          verifyOTP();
        }}
      >
        Verify OTP
      </Button>
      {OTPReEnter ? (
        <p>OTP mismatch, enter correct OTP</p>
      ) : (
        <p>An OTP has been sent to your registered number</p>
      )}

      {OTPMatched && <p className="">OTP verified, redirecting to Dashboard</p>}
    </div>
  );
}
