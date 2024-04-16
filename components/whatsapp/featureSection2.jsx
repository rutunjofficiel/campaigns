import Image from "next/image";
import whatsappFeatureBackDrop from "../../public/images/backdropFeature2.png";
import whatsappFeature from "../../public/images/whatsappFeature2.png";
import { Button } from "../ui/button";
export default function FeatureSection2() {
  return (
    <div className="bg-[#32D851] py-8 lg:py-12">
      <div className="mx-auto h-full w-[94%] bg-[#32D851] text-white md:w-[90%]">
        <div className="my-16 flex w-full flex-col items-center gap-4 lg:grid lg:h-min lg:grid-cols-2  lg:justify-between ">
          <div className="relative mx-auto aspect-[5/4] w-[85%] ">
            <div className="absolute inset-0 aspect-[5/4] w-full">
              <Image
                src={whatsappFeatureBackDrop}
                fill={true}
                style={{
                  objectFit: "contain",
                }}
                alt="backdrop"
              />
            </div>
            <div className="absolute bottom-0 aspect-[4/3] w-full ">
              <Image
                src={whatsappFeature}
                fill={true}
                style={{
                  objectFit: "contain",
                }}
                alt="hero-whatsapp"
              />
            </div>
          </div>{" "}
          <div className="flex flex-col items-center   gap-8 text-white lg:items-start lg:gap-10">
            <h2 className="sub-heading-white  text-white">
              Sell more with your WhatsApp store
            </h2>
            <p className="leading-tighter  text-center text-xl opacity-90 lg:text-start">
              Showcase relevant products from your catalog with WhatsApp product
              messages through commerce API.
            </p>
            <p className="leading-tighter text-center text-xl  opacity-90 lg:text-start">
              Send interactive multi and single-product messages to present
              products from your inventory.
            </p>
            <p className="leading-tighter text-center text-xl  opacity-90 lg:text-start">
              Allow adding products to the shopping cart without risking
              obsolete information such as price and availability.
            </p>

            <Button size="xl" className="w-fit bg-white text-[#32D851]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
