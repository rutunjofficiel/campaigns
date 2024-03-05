import Image from "next/image";
import signInIllustration from "../public/images/signInIllustration.png";
import { SlEnvolopeLetter } from "react-icons/sl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Illustration() {
  return (
    <div className="bg-[#029AFF]  hideIllustration:hidden md:flex flex-col justify-center gap-0 align-middle w-full md:w-1/2  md:min-h-screen  text-white text-left">
      {" "}
      <Card className="w-fit m-auto border-0 shadow-none text-white bg-transparent relative">
        <div className="max-w-fit 2xl:w-[90%] flex flex-col m-auto">
          <div className="flex flex-col gap-2 lg:gap-4 p-6">
            <h1 className="lg:text-[2.5rem] md:text-[2rem] text-[1.6rem]  leading-tight font-extrabold">
              Craft Engaging <br></br>Messages, Drive Results
            </h1>
            <p className="text-[1rem] font-semibold">
              Inscreva-se no Twitter hoje mesms
            </p>
          </div>
          <div className="w-[75%] 2xl:w-[90%] m-auto lg:m-0 relative h-[45vh]">
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
          <p className="absolute  bottom-0 left-0 right-0 top-[110%] m-auto max-w-fit font-light text-center">
            &copy; 2024 Officiel Campaigns.
          </p>
        </div>
      </Card>
      {/* <p className="absolute  m-auto max-w-fit font-light">
        &copy; 2024 Officiel Campaigns.
      </p> */}
    </div>
  );
}
