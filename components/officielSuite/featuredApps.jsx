import Image from "next/image";
import featuredAppsIllustration from "../../public/images/featuredApps.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { ArrowBigLeft } from "lucide-react";

export default function FeaturedApps() {
  return (
    <div className="mx-auto mt-12 grid w-full grid-cols-1 pb-0 pt-10 text-white lg:w-[90%] lg:grid-cols-2 lg:py-16">
      <div className="mx-auto flex w-[94%] flex-col gap-4 lg:w-[80%] lg:gap-8">
        <div className="flex flex-row items-center gap-2 opacity-90">
          <div className="inline-block h-[1px] w-[24px] bg-white"></div>
          <p className="text-sm tracking-[0.25rem]">FEATURED APPS</p>
        </div>
        <h2 className="text-[36px] leading-tight lg:text-[48px]">
          Your life's work, powered by our life's work
        </h2>
        <p className="tracking-wide">
          A unique and powerful software suite to transform the way you work.
          Designed for businesses of all sizes, built by a company that values
          your privacy.
          <br /> <br /> Run your entire business on Officiel with our unified
          cloud software, designed to help you break down silos between
          departments and increase organizational efficiency.
        </p>
        <div className="mx-auto">
          <div className="image-container-suite ">
            <Image
              fill={true}
              quality={100}
              style={{
                objectFit: "contain",
              }}
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
              src={featuredAppsIllustration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-fit w-[94%] flex-col gap-4 rounded-3xl bg-[#373737] lg:w-[80%] lg:gap-6">
        <div className="flex flex-col gap-6 p-4 pb-0 lg:p-12">
          {apps.map((app, i) => {
            return (
              <div key={i} className="flex flex-row items-center gap-2">
                <div className="h-[64px] w-[64px] rounded-xl bg-[#616161] lg:h-[100px] lg:w-[100px]"></div>
                <div className=" flex w-[80%] flex-col gap-1">
                  <h2 className="text-md font-semibold lg:text-xl">
                    {app.title}
                  </h2>
                  <p>{app.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="#">
          <div
            className="flex w-full flex-row items-center justify-between gap-2 rounded-ee-3xl
              rounded-es-3xl bg-[#616161] px-12 py-4 "
          >
            <p className="text-xl font-medium">Explore All Products </p>
            <div className="inline-flex">
              <FaArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

const apps = [
  {
    title: "Officiel CRM",
    description: "Lorem Ipsum is a dummy text Lorem Ipsum is a dummy text",
  },
  {
    title: "Officiel Mail",
    description: "Lorem Ipsum is a dummy text Lorem Ipsum is a dummy text",
  },
  {
    title: "Officiel Meet",
    description: "Lorem Ipsum is a dummy text Lorem Ipsum is a dummy text",
  },
  {
    title: "Officiel Campaign",
    description: "Lorem Ipsum is a dummy text Lorem Ipsum is a dummy text",
  },
];
