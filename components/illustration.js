import Image from "next/image";
// import signInIllustration from "../public/images/signInIllustration.png";
import signInIllustration from "@/public/images/signInIllustration.png";
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
    <div className="w-full  flex-col justify-center gap-0 bg-campaignBlue text-left align-middle text-white md:flex    md:w-1/2 hideIllustration:hidden">
      <Card className="relative m-auto w-fit border-0 bg-transparent text-white shadow-none">
        <div className="m-auto flex max-w-fit flex-col 2xl:w-[90%]">
          <div className="flex flex-col gap-2 p-6 lg:gap-4">
            <h1 className="sub-heading-white">
              Craft Engaging <br></br>Messages, Drive Results
            </h1>
            <p className="text-[1rem] font-semibold">
              Inscreva-se no Twitter hoje mesms
            </p>
          </div>
          <div className="image-container-2">
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
          {/* <p className="absolute  bottom-0 left-0 right-0 top-[110%] m-auto max-w-fit text-center font-light">
            &copy; 2024 Officiel Campaigns.
          </p> */}
        </div>
      </Card>
      {/* <p className="absolute  m-auto max-w-fit font-light">
        &copy; 2024 Officiel Campaigns.
      </p> */}
    </div>
  );
}
