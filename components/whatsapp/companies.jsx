import netflix from "@/public/images/whatsappLogos/netflix.png";
import amazon from "@/public/images/whatsappLogos/amazon.png";
import forbes from "@/public/images/whatsappLogos/forbes.png";
import entrepreneur from "@/public/images/whatsappLogos/entrepreneur.png";
import sej from "@/public/images/whatsappLogos/sej.png";
import Image from "next/image";
export default function Companies() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="sub-heading">
        Trusted by leading consumer brands globally
      </h1>
      <div className="grid w-full grid-cols-2 gap-3 rounded-md bg-[#E5F5FF] px-3 py-2 shadow-lg    md:grid-cols-5 md:grid-rows-1 lg:w-[90%] ">
        <div className="relative mx-auto aspect-video w-[120px] md:w-[100px] lg:w-[120px] ">
          <Image
            src={forbes}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative  mx-auto aspect-video w-[120px] md:w-[100px] lg:w-[120px]">
          <Image
            src={sej}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative  mx-auto aspect-video w-[120px]  md:w-[100px] lg:w-[120px]">
          <Image
            src={entrepreneur}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative mx-auto aspect-video w-[120px]  md:w-[100px] lg:w-[120px]">
          <Image
            src={amazon}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative col-span-2 mx-auto aspect-video w-[120px] md:col-span-1 md:w-[100px] lg:w-[120px]">
          <Image
            src={netflix}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
      </div>
    </div>
  );
}
