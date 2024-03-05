"use client";
import React from "react";
import { Field, Formik, Form } from "formik";
import { useState } from "react";
import { Button } from "../ui/button";
import { ICONS } from "@/config";

export default function NewPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className="stepform flex flex-col gap-4 items-center justify-center m-auto">
        <div>
          <label>Enter New Password</label>
          <div className="flex flex-row bg-[#EEEEEE] rounded-sm">
            <Field
              className="bg-[#EEEEEE] py-2.5 2xs:py-1.6 px-3 rounded-sm"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
            />
            <Button
              variant="ghost"
              className="rounded-s-none bg-[#EEEEEE] hover:bg-[#EEEEEE]"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <ICONS.passwordVisible size={18} />
              ) : (
                <ICONS.passwordHidden size={18} />
              )}
            </Button>
          </div>
        </div>
        <div>
          <label>Confirm New Password</label>
          <div className="flex flex-row bg-[#EEEEEE] rounded-sm">
            <Field
              className="bg-[#EEEEEE] py-2.5 2xs:py-1.6 px-3 rounded-sm"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter new password"
            />{" "}
            <Button
              variant="ghost"
              type="button"
              className="rounded-s-none bg-[#EEEEEE] hover:bg-[#EEEEEE]"
              onClick={(e) => {
                e.preventDefault();
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <ICONS.passwordVisible size={18} />
              ) : (
                <ICONS.passwordHidden size={18} />
              )}
            </Button>
          </div>
        </div>
        <Button type="submit">Set New Password</Button>
      </div>
    </>
  );
}
