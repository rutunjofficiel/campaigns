import { HeroFeatures } from "@/config";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import HeroFeatureCard from "./(hero)/heroFeatureCard";

export default function Hero() {
  return (
    <section className="m-auto flex flex-col gap-10 text-start  md:max-w-full md:items-center md:text-center">
      <div className="flex flex-col items-start justify-center gap-4 py-12 md:items-center md:gap-8">
        <h1 className="heading text-4xl leading-none">
          <span className="heading  bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text     text-transparent  ">
            Email Marketing{" "}
          </span>
          and SMS Marketing Made Easy
        </h1>

        <p className="paragraph max-w-[42rem] text-xl font-medium   leading-normal text-[#00243B] opacity-90 ">
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

      <div className="lg:max-w-[80vw] [&>*:nth-child(even)]:bg-campaignBlueDark  [&>*:nth-child(odd)]:bg-campaignBlue m-auto mx-auto mt-8 grid w-fit grid-cols-1 justify-center gap-4  md:max-w-[85vw]  md:grid-cols-3 ">
        <HeroFeatureCard
        
          feature={"Expanding Your Business"}
          featureDescription={
            "Expand your business with the Officiel Campaign and accelerate your growth with many options integrated into one platform."
          }
        />
        <HeroFeatureCard
          feature={"Sign Up For Free"}
          featureDescription={
            "Leave worries about investing. Officiel offers a free sign-up for 500 emails."
          }
        />
        <HeroFeatureCard
          className="col-span-2"
          feature={"Explore Your Options"}
          featureDescription={
            "Don't feel stuck with one option; explore SMS, WhatsApp, and Email everything by investing in one app."
          }
        />
      </div>
    </section>
  );
}
