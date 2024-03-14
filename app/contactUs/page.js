"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import contactUsIllustration from "../../public/images/contactUsIllustration.png";
import CustomErrorMessage from "@/components/customErrorMessage";
import { ContactusSchema } from "../utils/formSchemas";
import ContactUsIllustration from "@/components/(contactUs)/contactUsIllustration";
import ContactUsForm from "@/components/(contactUs)/contactUsForm";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="my-6 flex flex-col items-center md:my-8">
        <h1 className="sub-heading-lg">Contact Us</h1>
        <p className="w-[70%] text-center text-[1.2rem] font-medium leading-normal text-[#00243B] opacity-90 md:w-[50%] ">
          Lorem Ipsum is dummy text. Lorem Ipsum is dummy text. Lorem Ipsum is
          dummy text. Lorem Ipsum is dummy text. Lorem Ipsum is dummy text.{" "}
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-0">
        <div class="min-h-full flex-col justify-center gap-0 bg-campaignBlue text-left align-middle text-white md:flex  ">
          <ContactUsIllustration />
        </div>
        <div class="m-auto min-h-full w-full bg-[#E9EEF4] p-2">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
