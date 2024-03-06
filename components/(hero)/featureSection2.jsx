import { Button } from "../ui/button";
import indexIllustration2 from "../../public/images/indexIllustration2.png";
import Image from "next/image";
export default function FeatureSection2() {
  return (
    <div className="m-auto flex h-max max-w-[64rem] flex-row-reverse items-center justify-center bg-[#F3F3F3]">
      <div className="flex  flex-col items-end gap-4 text-end md:gap-6 ">
        <h1 className="text-3xl font-bold">
          Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.{" "}
        </h1>
        <p>
          Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum
          is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy
          text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text.
        </p>
        <Button className="w-fit">Get Started</Button>
      </div>
      <div className="lg:m-0 relative m-auto h-[50vh] w-[60vw]">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={indexIllustration2}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
