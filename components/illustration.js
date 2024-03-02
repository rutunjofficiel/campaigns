import Image from "next/image";
import signInIllustration from "../public/images/signInIllustration.png";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Illustration() {
  return (
    <div className="bg-[#029AFF] hidden md:flex flex-col justify-center w-full md:w-1/2 md:h-screen text-white  text-left">
      <div className="max-w-fit flex flex-col m-auto">
        <div className="flex flex-col gap-2 lg:gap-4 p-6">
          <h1 className="font-bold text-4xl">
            Craft Engaging <br></br>Messages, Drive Results
          </h1>
          <p className="text-xl font-medium">
            Inscreva-se no Twitter hoje mesms
          </p>
        </div>
        <div className="w-11/12 m-auto lg:m-0 relative h-[45vh]">
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
