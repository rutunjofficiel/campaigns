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
import { FAQs, addresses } from "../utils/content";
import OfficesCard from "@/components/(contactUs)/officesCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="my-6 flex flex-col items-center md:my-8 lg:mt-14">
        <h1 className="sub-heading-lg">Contact Us</h1>
        <p className="w-[70%] text-center  text-[0.9rem] font-medium leading-tight text-[#00243B] opacity-80 md:w-[50%] md:leading-normal lg:text-[1.2rem] ">
          Lorem Ipsum is dummy text. Lorem Ipsum is dummy text. Lorem Ipsum is
          dummy text.
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-12">
        <div class="min-h-full flex-col justify-center gap-0 bg-campaignBlue py-12 text-left align-middle text-white md:flex  ">
          <ContactUsIllustration />
        </div>
        <div class="m-auto flex min-h-full w-full flex-col items-center bg-[#E9EEF4] p-2">
          <ContactUsForm />
        </div>
      </div>
      <div className=" my-24 flex flex-col items-center gap-8">
        <h1 className="sub-heading">We&apos;re located in the top cities!</h1>
        <ul className="m-auto grid w-[90%] grid-cols-1 items-center gap-2 lg:w-[70%] lg:grid-cols-3 ">
          {addresses.map((address, index) => (
            <li key={index}>
              <OfficesCard
                city={address.city}
                phoneNumber={address.phoneNumber}
                address={address.address}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 bg-[#A900A4] py-16 lg:gap-12 lg:py-16">
        <h1 className="sub-heading-white  ">Frequently Asked Questions </h1>
        <Accordion
          collapsible
          className="m-auto flex w-[95%] flex-col gap-1 lg:w-[60%] "
        >
          {FAQs.map((faq, index) => (
            <AccordionItem
              className="rounded-lg border-none bg-white p-2  px-3"
              key={index}
              value={index + 1}
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="w-[95%] lg:w-[80%]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
