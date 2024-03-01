import Image from "next/image";
import signInIllustration from "../public/images/signInIllustration.png";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function Illustration() {
  return (
    <div className="bg-[#029AFF] items-center md:w-1/2 md:h-screen text-white py-20 px-4 md:px-0 text-center md:text-left">
      <div className="max-w-fit flex flex-col gap-12 m-auto">
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="font-bold text-4xl text-left">
            Craft Engaging <br></br>Messages, Drive Results
          </h1>
          <p className="text-xl font-light text-left">
            Inscreva-se no Twitter hoje mesmo
          </p>
        </div>{" "}
        <div className="md:w-10/12 w-11/12 m-auto md:m-0 relative h-96">
          <Image
            src={signInIllustration}
            quality={100}
            priority={true}
            alt="heroImage"
            fill={true}
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
            className="rounded-3xl"
          />
        </div>
        <p className="m-auto max-w-fit font-light">
          &copy; 2024 Officiel Campaigns.
        </p>
      </div>
    </div>
  );
}
