import { HeroFeatures } from "@/config";
import { Button } from "../ui/button";
import HeroFeature from "./heroFeature";
import HeroFeatureCard from "./heroFeatureCard";
import { heroCards } from "@/app/utils/content";

export default function Hero() {
  return (
    <section className="m-auto flex flex-col gap-10  text-start  md:max-w-full md:items-center md:text-center">
      <div className="flex flex-col items-start justify-center gap-4 py-16  md:max-w-[70%] md:items-center md:gap-8 md:py-24">
        <h1 className="heading">
          <span className="   bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text     text-transparent  ">
            Email Marketing{" "}
          </span>
          and SMS Marketing Made Easy
        </h1>

        <p className="paragraph  text-[1.2rem] font-medium leading-normal text-[#00243B] opacity-90 ">
          Boost your conversions; leave the confusion. Choose Officiel for
          marketing solutions.
        </p>
        <div className="flex w-fit flex-row gap-2">
          <Button size="lg">Contact Us</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      <div
        className="lg:max-w-[80vw]  
  [&>*:nth-child(even):hover]:bg-campaignBlue
  [&>*:nth-child(even)]:bg-campaignBlueDark 
  [&>*:nth-child(odd):hover]:bg-campaignBlueDark 
  [&>*:nth-child(odd)]:bg-campaignBlue
    m-auto mx-auto mt-8 grid w-fit grid-cols-1 justify-center gap-4  md:max-w-[85vw]  md:grid-cols-3 "
      >
        {heroCards.map((feature, index) => (
          <HeroFeatureCard
            key={index}
            feature={feature.feature}
            featureDescription={feature.featureDescription}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
