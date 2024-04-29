import netflix from "@/public/images/whatsappLogos/netflix.png";
import amazon from "@/public/images/whatsappLogos/amazon.png";
import forbes from "@/public/images/whatsappLogos/forbes.png";
import entrepreneur from "@/public/images/whatsappLogos/entrepreneur.png";
import sej from "@/public/images/whatsappLogos/sej.png";
import Image from "next/image";
export default function Companies() {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-center gap-4 rounded-xl bg-[#fff] px-3 py-6 drop-shadow-[0px_20px_20px_rgba(0,0,0,0.2)] lg:w-[90%]">
      <h1 className=" text-xl font-medium opacity-90 ">BRANDS THAT TRUST US</h1>
      <div className="grid w-full grid-cols-2  gap-3   md:grid-cols-5 md:grid-rows-1">
        <div className="relative mx-auto aspect-video w-[120px] md:w-[100px] lg:w-[140px] ">
          <Image
            src={forbes}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative  mx-auto aspect-video w-[120px] md:w-[100px] lg:w-[140px]">
          <Image
            src={sej}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative  mx-auto aspect-video w-[120px]  md:w-[100px] lg:w-[140px]">
          <Image
            src={entrepreneur}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative mx-auto aspect-video w-[120px]  md:w-[100px] lg:w-[140px]">
          <Image
            src={amazon}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            alt="forbes-logo"
          />
        </div>
        <div className="relative col-span-2 mx-auto aspect-video w-[120px] md:col-span-1 md:w-[100px] lg:w-[140px]">
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
