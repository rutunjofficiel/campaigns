import { ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import emailFeatureSection1 from "../../public/images/emailFeatureSection1.png";
import Image from "next/image";
export default function FeatureSection() {
  return (
    <div className="my-16 flex flex-col gap-28">
      <div className="mx-auto flex w-[94%] flex-col items-center gap-3">
        <h2 className="sub-heading">Send with assurance</h2>
        <p className="w-[100%] text-center opacity-90 lg:w-[70%]">
          Email plays a crucial role in your tech stack, and the technologies
          powering your email program should integrate seamlessly and scale
          effortlessly on a platform known for its compliance and reliability.
        </p>
      </div>
      <div className="ml-auto grid-cols-1 lg:grid lg:w-[94%] lg:grid-cols-2 ">
        <div className="relative lg:flex">
          <div className=" order-last flex flex-col gap-8   lg:order-first">
            <h2 className="sub-heading">
              Get your emails to the inbox — where they belong
            </h2>

            <p className="mx-auto w-[80%] text-center opacity-90 lg:mx-0 lg:text-start">
              Take advantage of features like ISP monitoring, event webhooks,
              sender authentication, dedicated IP addresses, and expert services
              to ensure your emails reach customers.
            </p>
            <div className="grid grid-cols-1 ">
              <div className="flex flex-row gap-4">
                <div className="flex h-fit w-fit flex-col rounded-full bg-campaignBlue p-4 text-white lg:hidden">
                  <Mail size={36} />
                </div>
                <div className="hidden h-fit w-fit flex-col rounded-full bg-campaignBlue p-4 text-white lg:flex">
                  <Mail size={80} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[1.2rem] font-semibold">Email API</p>
                  <p className="w-[80%] ">
                    Configure your application in ZeptoMail using email API for
                    a deeper integration. Developer-friendly API documentation
                    helps you hit the ground running.
                  </p>
                  <Link
                    className="flex flex-row items-center gap-1  font-semibold"
                    href="#"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-first w-[80%] flex-col items-center justify-self-end lg:order-last lg:flex">
          <div className="-z-10  h-[110%] w-[80%]  self-end rounded-s-2xl bg-[#9F03A8]"></div>
          <Image src={emailFeatureSection1} alt="Hero image SMS" />
        </div>
      </div>
    </div>
  );
}
