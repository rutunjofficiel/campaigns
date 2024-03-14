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
import { ContactusSchema } from "@/app/utils/formSchemas";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactUsIllustration() {
  return (
    
      <Card className="relative m-auto w-fit border-0 bg-transparent text-white shadow-none">
        <div className="m-auto flex max-w-fit flex-col items-center  ">
          <div className="flex w-3/5 flex-col gap-2 py-6">
            <h1 className="text-start text-[1.6rem] font-bold leading-tight  md:text-[2rem] lg:text-[2.5rem]">
              Let&apos;s Talk
            </h1>
            <p className="m-auto text-start text-[1rem] font-medium opacity-80">
              Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem
              Ipsum is a dummy text. Lorem Ipsum is a dummy text.
            </p>
          </div>
          <div className="flex w-3/5 flex-col gap-5 py-6  ">
            <div className="flex flex-row items-center gap-1 ">
              <div className="rounded-full ">
                <div className="white-gradient relative aspect-square h-[1.8rem] w-fit rounded-full p-1   md:h-[2.4rem] md:p-2">
                  <FaPhoneAlt size="100%" color="#029AFF" />
                </div>
              </div>
              <p className="text-[0.9rem] font-medium">+91-9949399393</p>
            </div>

            <div className="flex flex-row items-center gap-1">
              <div className="rounded-full ">
                <div className="white-gradient relative aspect-square h-[1.8rem] w-fit rounded-full p-1   md:h-[2.4rem] md:p-2">
                  <MdEmail size="100%" color="#029AFF" />
                </div>
              </div>
              <p className="text-[0.9rem] font-medium">
                {" "}
                contact@officielcrm.com
              </p>
            </div>

            <div className="flex flex-row items-center gap-1">
              <div className="rounded-full ">
                <div className="white-gradient relative aspect-square h-[1.8rem] w-fit rounded-full p-1   md:h-[2.4rem] md:p-2">
                  <FaLocationDot size="100%" color="#029AFF" />
                </div>
              </div>{" "}
              <p className="text-[0.9rem] font-medium">
                Idealiza Empyre Pvt Ltd. 91 Springboard Hub, Gopala Krishna
                Complex, No. 45/3 Residency Road, MG Road, Bengaluru 560025
              </p>
            </div>
          </div>
          {/* <div className="image-container">
            <Image
              src={contactUsIllustration}
              quality={100}
              priority={true}
              alt="heroImage"
              fill={true}
              style={{
                objectFit: "contain",
              }}
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
            />
          </div> */}
        </div>
      </Card>
 
  );
}
