import { HeroFeatures } from "@/config";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import HeroFeatureCard from "./(hero)/heroFeatureCard";

export default function Hero() {
  return (
    <section className="container flex max-w-[64rem] flex-col items-center gap-10 text-center">
      <div className="sm:gap-8 flex flex-col items-center justify-center gap-12">
        <div className="sm:gap-4 container flex max-w-[64rem] flex-col items-center gap-10   text-center">
          <h1 className="sm:text-5xl lg:text-7xl text-3xl font-semibold md:text-6xl">
            <span className="text-[#029AFF]">Email Marketing</span> and SMS
            Marketing Made Easy
          </h1>
          <p className="sm:text-xl sm:leading-8 max-w-[42rem] leading-normal text-muted-foreground">
            Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem
            Ipsum is a dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a
            dummy text. Lorem Ipsum is a dummy text. Lorem Ipsum is a dummy
            text.
          </p>
          <div className="m-auto flex w-fit flex-row gap-2">
            <Button className="bg-[#029AFF]">Contact Us</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly md:flex-row">
          {HeroFeatures.map((feature, i) => (
            <HeroFeature feature={feature} key={i} />
          ))}
        </div>
      </div>
      <div className="sm:grid-cols-2 lg:max-w-[80vw] m-auto mx-auto grid w-fit max-w-[85vw]  justify-center gap-4 md:grid-cols-3">
        <HeroFeatureCard />
        <HeroFeatureCard />
        <HeroFeatureCard />
      </div>
    </section>
  );
}
