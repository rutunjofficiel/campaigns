"use client";

import Image from "next/image";
import ContactUsIllustration from "@/components/(contactUs)/contactUsIllustration";
import ContactUsForm from "@/components/(contactUs)/contactUsForm";
import { FAQs, addresses } from "../../utils/content";
import OfficesCard from "@/components/(contactUs)/officesCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQIllustration from "../../../public/images/faqIllustration.png";
export default function Page() {
  return (
    <div className="flex flex-col ">
      <div className="my-6 flex flex-col items-center md:my-8 lg:mt-14">
        <h1 className="sub-heading-lg">Contact Us</h1>
        <p className="w-[70%] text-center  text-[0.9rem] font-medium leading-tight text-[#00243B] md:w-[50%] md:leading-normal lg:text-[1.1rem] ">
          Lorem Ipsum is dummy text.
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-12">
        <div className="min-h-full flex-col justify-center gap-0 bg-campaignBlue py-12 text-left align-middle text-white md:flex  ">
          <ContactUsIllustration />
        </div>
        <div className="m-auto flex min-h-full w-full flex-col items-center bg-[#ECEEF0] p-2">
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

      <div className="flex w-full flex-col-reverse justify-evenly gap-8 bg-[#E9EEF4] py-8 lg:flex-row  lg:py-16 ">
        <div className="flex flex-col gap-8">
          <h1 className="sub-heading">Frequently Asked Questions </h1>
          <Accordion
            collapsible
            className="m-auto flex w-[90vw] flex-col gap-3 lg:w-[50vw]"
          >
            {FAQs.map((faq, index) => (
              <AccordionItem
                className="w-[90vw] rounded-lg border-none bg-white p-2 px-3 lg:w-[50vw]"
                key={index}
                value={index + 1}
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="w-[90vw] lg:w-[50vw]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="image-container">
          <Image
            fill={true}
            quality={100}
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
            src={FAQIllustration}
            alt="FAQIllustration"
          />
        </div>
      </div>
    </div>
  );
}
