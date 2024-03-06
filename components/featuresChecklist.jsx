import Image from "next/image";
import { Button } from "./ui/button";
import indexIllustration from ".././public/images/indexIllustration.png";
import HeroFeature from "./(hero)/heroFeature";

export default function FeaturesChecklist() {
  return (
    <div className="m-auto flex h-max max-w-[64rem] flex-row items-center justify-center">
      <div className="lg:m-0 relative m-auto h-[50vh] w-[60vw]">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={indexIllustration}
          alt="Illustration"
        />
      </div>
      <div className="flex  flex-col gap-4 text-start md:gap-6 ">
        <h1 className="text-3xl font-bold">
          Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.{" "}
        </h1>
        <ul className="gap-2">
          <li className="my-4">
            <HeroFeature feature="Lorem Ipsum is a dummy text. " />
          </li>
          <li className="my-4">
            <HeroFeature feature="Lorem Ipsum is a dummy text. " />
          </li>
          <li className="my-4">
            <HeroFeature feature="Lorem Ipsum is a dummy text. " />
          </li>
          <li className="my-4">
            <HeroFeature feature="Lorem Ipsum is a dummy text. " />
          </li>
        </ul>
        <Button className="w-fit">Learn More</Button>
      </div>
    </div>
  );
}
