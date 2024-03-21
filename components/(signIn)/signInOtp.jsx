"use client";
import OTPInput from "react-otp-input";
import { useState } from "react";
import { permanentRedirect, redirect } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignInOtp({ userInfo, custID }) {
  const router = useRouter();
  const [OTP, setOTP] = useState(0);
  const [OTPReEnter, setOTPReEnter] = useState(false);
  const [OTPMatched, setOTPMatched] = useState(false);
  const userData = { userInfo: userInfo, custID: custID };
  console.log("OTP", OTP);
  console.log({ userInfo: userInfo, custID: custID });
  function verifyOTP() {
    if (OTP?.length == 6) {
      axios
        .post("/api/otpVerify", {
          OTP: OTP,
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.statusCode);
          if (Number(response.data.statusCode) == 200) {
            console.log("response.data.statusCode", response.data.statusCode);
            try {
              localStorage.setItem("userInfo", JSON.stringify(userData));
              toast.success("OTP Verified");
              setOTPMatched(true);

              redirect('/dashboard') 
            } catch (error) {
              console.error(error);
            }
          } else {
            toast.warning(response.data.message);
          }
          console.log(response.data);
        })
        .catch((error) => {
          console.log("ERROR:", error);
          toast.error(error.response?.data?.message || "An error occurred");
        });
    } else if (OTP?.length != 6) {
      toast.warning("OTP must be 6 digits long");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 bg-slate-50 p-8">
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
