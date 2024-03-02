import Image from "next/image";
import signInIllustration from "../public/images/signInIllustration.png";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Illustration() {
  return (
    <div className="bg-[#029AFF] lg:flex flex-col content-center justify-center w-full hidden md:w-1/2 md:h-screen text-white text-center lg:text-left">
      <div className="max-w-fit flex flex-col m-auto lg:text-left text-center">
        <div className="flex flex-col gap-2 lg:gap-4 p-8 ">
          <div className="flex flex-row gap-1 items-center py-1 lg:hidden m-auto">
            <SlEnvolopeLetter size={22} color="#fff" />
            <h1 className="font-bold text-xl">OfficielCampaign</h1>
          </div>
          <h1 className="font-bold text-4xl">
            Craft Engaging <br></br>Messages, Drive Results
          </h1>
          <p className="text-xl font-medium">
            Inscreva-se no Twitter hoje mesms
          </p>
        </div>
        <div className="w-11/12 m-auto lg:m-0 relative h-[60vh]">
          <Image
            src={signInIllustration}
            quality={100}
            priority={true}
            alt="heroImage"
            fill={true}
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          />
        </div>
      </div>
      <p className="m-auto max-w-fit font-light">
        &copy; 2024 Officiel Campaigns.
      </p>
    </div>
  );
}
